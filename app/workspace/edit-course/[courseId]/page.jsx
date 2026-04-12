"use client"
import { useParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CourseInfo from '../_components/CourseInfo'
import ChapterTopicList from '../_components/ChapterTopicList'

const dummyCourse = {
  title: "Sample Course: Web Development",
  description: "This is a fallback course shown when API is unavailable.",
  chapters: [
    {
      title: "Introduction to HTML",
      topics: ["Tags", "Structure", "Forms"]
    },
    {
      title: "CSS Basics",
      topics: ["Selectors", "Box Model", "Flexbox"]
    },
    {
      title: "JavaScript Basics",
      topics: ["Variables", "Functions", "Events"]
    }
  ]
};

function EditCourse({viewCourse=false}) {
    const {courseId} = useParams();
    const [loading, setLoading] = useState(false);
    console.log(courseId);
    const [course, setCourse] = useState();

    useEffect(()=>{
        GetCourseInfo();
    }, [])

    // const GetCourseInfo = async ()=>{
    //     setLoading(true);
    //     const result = await axios.get('/api/courses?courseId='+courseId)
    //     console.log(result.data);
    //     setLoading(false);
    //     setCourse(result.data)
    // }

    const GetCourseInfo = async () => {
    setLoading(true);
    try {
        const result = await axios.get('/api/courses?courseId=' + courseId);
        console.log(result.data);

        // If API gives empty or invalid response
        if (!result.data || Object.keys(result.data).length === 0) {
            setCourse(dummyCourse);
        } else {
            setCourse(result.data);
        }

    } catch (error) {
        console.log("API failed, loading dummy data");
        setCourse(dummyCourse);
    }
    setLoading(false);
};
  return (
    <div>
      <CourseInfo course = {course} viewCourse={viewCourse} />
      <ChapterTopicList course={course} />
    </div>
  )
}

export default EditCourse
