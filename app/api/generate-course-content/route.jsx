import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import { db } from '../../../config/db';
import { coursesTable } from "../../../config/schema";
import { eq } from "drizzle-orm";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const PROMPT = `Depends on Chapter name and Topic Generate content for each topic in HTML
and give response in JSON format.
Schema:
chapterName:<>,
{
topic:<>,
content:<>
}
}: User Input:`;

export async function POST(req) {
    try {
        const { courseJson, courseTitle, courseId } = await req.json();

        const promises = courseJson?.chapters?.map(async (chapter) => {
            const model = genAI.getGenerativeModel({
                model: "gemini-3-flash-preview",
                generationConfig: { responseMimeType: "application/json" },
            });

            const result = await model.generateContent(PROMPT + JSON.stringify(chapter));
            const JSONResp = JSON.parse(result.response.text());

            const youtubeData = await GetYoutubeVideo(chapter?.chapterName);

            console.log({
                youtubeVideo: youtubeData,
                courseData: JSONResp
            });

            return {
                youtubeVideo: youtubeData,
                courseData: JSONResp
            };
        });

        const CourseContent = await Promise.all(promises);

        await db.update(coursesTable).set({
            courseContent: CourseContent
        }).where(eq(coursesTable.cid, courseId));

        return NextResponse.json({
            courseName: courseTitle,
            CourseContent: CourseContent
        });

    } catch (error) {
        console.error("Error in generate-course-content:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

const GetYoutubeVideo = async (topic) => {
    const params = {
        part: 'snippet',
        q: topic,
        maxResults: 4,
        type: 'video',
        key: process.env.YOUTUBE_API_KEY
    };

    const resp = await axios.get(YOUTUBE_BASE_URL, { params });
    const youtubeVideoListResp = resp.data.items;

    const youtubeVideoList = youtubeVideoListResp.map(item => ({
        videoId: item.id?.videoId,
        title: item?.snippet?.title
    }));

    console.log("youtubeVideoList", youtubeVideoList);
    return youtubeVideoList;
};