import { coursesTable } from '../../../config/schema';
import { db } from '../../../config/db';
import { eq } from 'drizzle-orm';
import { auth, currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
// import axios from 'axios'
import {
    GoogleGenAI,
} from '@google/genai';

const PROMPT = `Genrate Learning Course depends on following details. In which Make sure to add Course Name, Description, Chapter Name, Image Prompt (Course Banner Image Prompt. Generate only one imagePrompt for the entire course banner. Do not create separate image prompts for each chapter. Create a modern, flat-style 2D digital illustration that visually represents the course titled "user Course". Include symbolic elements directly related to the course subject, such as programming icons, code snippets, terminal windows, or IDE mockups for tech courses. Avoid generic human figures. Use UI/UX elements like mockup screens, text blocks, icons, buttons, and creative workspace tools. Use a vibrant color palette (blues, purples, oranges) with a clean, professional look. The illustration should feel creative, tech-savvy, and educational, ideal for visualizing concepts in user Course) for Course Banner in 3d format, Topic under each chapters , Duration for each chapters etc, in JSON format only

Schema:

{
"courses":{
"name":"string",
"description":"string",
"category":"string",
"level":"string",
"includeVideo":"boolean",
"noOfChapters":"number",
"chapters":[
{
"chapterName":"string",
"duration":"string",
"topics":[
"string"
],
"imagePrompt":"string"
}
]
}
}

,User Input: `

export const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

export async function POST(req) {
    const {courseId, ...formData} = await req.json();
    const { has } = await auth()
    const hasPremiumAccess = has({ plan: 'starter' })
    const user = await currentUser();

    const tools = [
        {
            googleSearch: {
            }
        },
    ];
    const config = {
        thinkingConfig: {
            thinkingBudget: 0,
        },
        tools,
    };
    const model = 'gemini-flash-lite-latest';
    const contents = [
        {
            role: 'user',
            parts: [
                {
                    text: PROMPT + JSON.stringify(formData)
                },
            ],
        },
    ];

    //if user already created any course?
    if(!hasPremiumAccess){
        const result=await db.select().from(coursesTable).where(eq(coursesTable.userEmail,user?.primaryEmailAddress.emailAddress));

        if(result?.length>=1){
            return NextResponse.json({'resp':'limit exceed'})
        }
    }
    // const response = await ai.models.generateContent({
    //     model,
    //     config,
    //     contents,
    // });
    let JSONResp = {
  courses: {
    name: formData.name,
    description: formData.description || "AI generated course",
    category: formData.category || "Programming",
    level: formData.level || "Beginner",
    includeVideo: true,
    noOfChapters: formData.noOfChapters || 2,
    imagePrompt: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    chapters: [
      {
        chapterName: "Introduction",
        duration: "20 min",
        topics: ["Overview", "Setup"]
      },
      {
        chapterName: "Core Concepts",
        duration: "30 min",
        topics: ["Basics", "Examples"]
      }
    ]
  }
};

    // console.log(response.candidates[0].content.parts[0].text);
    // const RawResp = response?.candidates[0]?.content?.parts[0]?.text
    // const RawJson = RawResp.replace('```json', '').replace('```','');
    // const JSONResp = JSON.parse(RawJson);
    const ImagePrompt= JSONResp.courses?.imagePrompt;

    //generate Image
    const bannerImageUrl = await GenerateImage(ImagePrompt)
    // Save to Database
    const result = await db.insert(coursesTable).values({
        ...formData,
        courseJson: JSONResp,
        userEmail:user?.primaryEmailAddress?.emailAddress,
        cid: courseId,
        bannerImageUrl: bannerImageUrl
    });

    return NextResponse.json({ courseId: courseId });
}


// const GenerateImage = async(imagePrompt) => {
//     const BASE_URL='https://aigurulab.tech';
// const result = await axios.post(BASE_URL+'/api/generate-image',
//         {
//             width: 1024,
//             height: 1024,
//             input: imagePrompt,
//             model: 'sdxl',//'flux'
//             aspectRatio:"1:1"//Applicable to Flux model only
//         },
//         {
//             headers: {
//                 'x-api-key': process?.env?.AI_GURU_LAB_API, // Your API Key
//                 'Content-Type': 'application/json', // Content Type
//             },
//         })
// console.log(result.data.image) //Output Result: Base 64 Image
// return result.data.image
// }

const GenerateImage = async (imagePrompt) => {
    const prompt = imagePrompt || "AI learning course";
    return `https://source.unsplash.com/featured/?${encodeURIComponent(prompt)}`;
};

console.log("Using Gemini key:", process.env.GEMINI_API_KEY?.slice(0,10));