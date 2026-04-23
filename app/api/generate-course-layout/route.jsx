import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../../config/db';
import { coursesTable } from '../../../config/schema';

const PROMPT = `Generate a Learning Course based on the following details. Make sure to include Course Name, Description, Chapter Name, Image Prompt (a single course banner image prompt for the entire course - do NOT create separate image prompts per chapter). Create a modern, flat-style 2D digital illustration that visually represents the course. Include symbolic elements related to the subject (e.g. programming icons, code snippets, terminal windows for tech courses). Use a vibrant color palette (blues, purples, oranges) with a clean professional look. Also include Topics under each chapter and Duration for each chapter. Return JSON format only.

Schema:
{
  "courses": {
    "name": "string",
    "description": "string",
    "category": "string",
    "level": "string",
    "includeVideo": "boolean",
    "noOfChapters": "number",
    "imagePrompt": "string",
    "chapters": [
      {
        "chapterName": "string",
        "duration": "string",
        "topics": ["string"]
      }
    ]
  }
}

User Input: `;

export async function POST(req) {
  try {
    const {courseId, ...formData} = await req.json();
    const user = await currentUser();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "Missing GEMINI_API_KEY" }, { status: 500 });
    }

   
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      // model: "gemini-3-flash-preview",
      generationConfig: { responseMimeType: "application/json" },
    });

    const prompt = PROMPT + JSON.stringify(formData);

    const result = await model.generateContent(prompt);


    const rawText = result.response.text();

    console.log("Gemini raw response:", rawText);

    const cleanJson = rawText
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/```\s*$/i, "")
      .trim();

    const JSONResp = JSON.parse(cleanJson);
    // const courseId = uuidv4()

    // Save to Database
    const course = await db.insert(coursesTable).values({
        ...formData,
        courseJson: JSONResp,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        cid: courseId
    })

    return NextResponse.json({ courseId: courseId });

  } catch (error) {
    console.error("Error in generate-course-layout:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}