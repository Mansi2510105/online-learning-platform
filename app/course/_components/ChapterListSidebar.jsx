"use client"
import React from 'react'
import { useContext } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion"
import { SelectedChapterIndexContext } from "../../../context/SelectedChapterIndexContext";


function ChapterListSidebar({ courseInfo }) {
  const course = courseInfo?.courses;
  const enrollCourse = courseInfo?.enrollCourse;
  // const courseContent = courseInfo?.courses?.courseContent;
  const courseContent = courseInfo?.courses?.courseJson?.courses?.chapters;
  const { selectedChapterIndex, setSelectedChapterIndex } = useContext(SelectedChapterIndexContext);
  let completedChapter = enrollCourse?.completedChapters ?? [];
  return (
    // <div className='w-400 h-500 bg-secondary h-screen p-5'>
    <div className="w-[280px] border-r bg-secondary h-screen p-4 overflow-y-auto">
      <h2 className='my-3 font-bold text-xl'>Chapters ({courseContent?.length})</h2>
      <Accordion type="single" collapsible defaultValue="item-1">
        {courseContent?.map((chapter, index) => (
          <AccordionItem value={chapter?.chapterName} key={index}
            onClick={() => setSelectedChapterIndex(index)}>
            <AccordionTrigger className={`text-lg font-medium ${completedChapter.includes(index)
                        ? "bg-green-100 text-green-900 font-bold"
                        : " "
                      }`}>{index + 1}. {chapter?.chapterName}</AccordionTrigger>
            <AccordionContent asChild>
              <div className=''>
                {/* {chapter?.courseData?.topics.map((topic, index_) => ( */}
                {chapter?.topics?.map((topic, index_) => (
                  <h2 key={index_}
                    className={`p-3 my-1 rounded-lg ${completedChapter.includes(index)
                        ? "bg-green-100 text-green-900 font-bold"
                        : "bg-white"
                      }`}>{topic}</h2>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}

      </Accordion>
    </div>
  )
}

export default ChapterListSidebar
