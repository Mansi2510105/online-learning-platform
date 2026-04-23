// "use client"
// import React from 'react'
// import { useContext } from 'react'
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "../../../components/ui/accordion"
// import { SelectedChapterIndexContext } from "../../../context/SelectedChapterIndexContext";


// function ChapterListSidebar({ courseInfo }) {
//   const course = courseInfo?.courses;
//   const enrollCourse = courseInfo?.enrollCourse;
//   // const courseContent = courseInfo?.courses?.courseContent;
//   const courseContent = courseInfo?.courses?.courseJson?.courses?.chapters;
//   const { selectedChapterIndex, setSelectedChapterIndex } = useContext(SelectedChapterIndexContext);
//   let completedChapter = enrollCourse?.completedChapters ?? [];
//   return (
//     // <div className='w-400 h-500 bg-secondary h-screen p-5'>
//     <div className="w-[280px] border-r bg-secondary h-screen p-4 overflow-y-auto">
//       <h2 className='my-3 font-bold text-xl'>Chapters ({courseContent?.length})</h2>
//       <Accordion type="single" collapsible defaultValue="item-1">
//         {courseContent?.map((chapter, index) => (
//           <AccordionItem value={chapter?.chapterName} key={index}
//             onClick={() => setSelectedChapterIndex(index)}>
//             <AccordionTrigger className={`text-lg font-medium ${completedChapter.includes(index)
//                         ? "bg-green-100 text-green-900 font-bold"
//                         : " "
//                       }`}>{index + 1}. {chapter?.chapterName}</AccordionTrigger>
//             <AccordionContent asChild>
//               <div className=''>
//                 {/* {chapter?.courseData?.topics.map((topic, index_) => ( */}
//                 {chapter?.topics?.map((topic, index_) => (
//                   <h2 key={index_}
//                     className={`p-3 my-1 rounded-lg ${completedChapter.includes(index)
//                         ? "bg-green-100 text-green-900 font-bold"
//                         : "bg-white"
//                       }`}>{topic}</h2>
//                 ))}
//               </div>
//             </AccordionContent>
//           </AccordionItem>
//         ))}

//       </Accordion>
//     </div>
//   )
// }

// export default ChapterListSidebar

// "use client"
// import React, { useContext } from 'react'
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "../../../components/ui/accordion"
// import { SelectedChapterIndexContext } from "../../../context/SelectedChapterIndexContext";
// import { CheckCircle } from 'lucide-react'; // Added this for a cleaner "completed" look!

// function ChapterListSidebar({ courseInfo }) {
//   const course = courseInfo?.courses;
//   const enrollCourse = courseInfo?.enrollCourse;
//   const courseContent = courseInfo?.courses?.courseJson?.courses?.chapters;
//   const { selectedChapterIndex, setSelectedChapterIndex } = useContext(SelectedChapterIndexContext);
//   let completedChapter = enrollCourse?.completedChapters ?? [];

//   return (
//     <div className="w-full md:w-[320px] flex-shrink-0 border-r border-slate-100 bg-white h-screen p-5 overflow-y-auto">
//       {/* Sidebar Header */}
//       <div className="mb-6 pb-4 border-b border-slate-100">
//         <h2 className='font-extrabold text-2xl text-slate-900 tracking-tight'>
//           Curriculum
//         </h2>
//         <p className="text-sm font-medium text-slate-500 mt-1">
//           {courseContent?.length || 0} Chapters
//         </p>
//       </div>

//       <Accordion type="single" collapsible className="space-y-3">
//         {courseContent?.map((chapter, index) => {
//           // Check states to apply dynamic styling
//           const isCompleted = completedChapter.includes(index);
//           const isSelected = selectedChapterIndex === index;

//           return (
//             <AccordionItem 
//               value={chapter?.chapterName || `item-${index}`} 
//               key={index}
//               onClick={() => setSelectedChapterIndex(index)}
//               // Dynamic borders and backgrounds based on selection
//               className={`border rounded-2xl px-4 overflow-hidden transition-all duration-200 ${
//                 isSelected 
//                   ? 'border-purple-300 bg-purple-50/50 shadow-sm' 
//                   : 'border-slate-100 bg-white hover:border-purple-200'
//               }`}
//             >
//               <AccordionTrigger className="hover:no-underline py-4">
//                 <div className="flex items-center justify-between w-full text-left pr-2">
//                   <span className={`text-base font-bold leading-tight ${isSelected ? 'text-purple-700' : 'text-slate-800'}`}>
//                     {index + 1}. {chapter?.chapterName}
//                   </span>
                  
//                   {/* Shows a checkmark if the chapter is completed */}
//                   {isCompleted && (
//                     <CheckCircle className="text-emerald-500 ml-3 flex-shrink-0" size={20} strokeWidth={2.5} />
//                   )}
//                 </div>
//               </AccordionTrigger>

//               <AccordionContent className="pt-1 pb-4">
//                 <div className="flex flex-col space-y-2">
//                   {chapter?.topics?.map((topic, index_) => (
//                     <div 
//                       key={index_}
//                       className={`px-4 py-3 text-sm rounded-xl transition-colors flex items-start gap-3 ${
//                         isCompleted
//                           ? "bg-gradient-to-r from-purple-50 to-pink-50 text-slate-800 border border-purple-100/50"
//                           : "bg-slate-50 text-slate-600 border border-slate-100"
//                       }`}
//                     >
//                       {/* Custom little bullet point */}
//                       <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isCompleted ? 'bg-purple-500' : 'bg-slate-300'}`} />
//                       <span className="leading-relaxed">{topic}</span>
//                     </div>
//                   ))}
//                 </div>
//               </AccordionContent>
//             </AccordionItem>
//           );
//         })}
//       </Accordion>
//     </div>
//   )
// }

// export default ChapterListSidebar


"use client"
import React, { useContext } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion"
import { SelectedChapterIndexContext } from "../../../context/SelectedChapterIndexContext";
import { CheckCircle, X } from 'lucide-react'; 

function ChapterListSidebar({ courseInfo, isOpen, setIsOpen }) {
  const course = courseInfo?.courses;
  const enrollCourse = courseInfo?.enrollCourse;
  const courseContent = courseInfo?.courses?.courseJson?.courses?.chapters;
  const { selectedChapterIndex, setSelectedChapterIndex } = useContext(SelectedChapterIndexContext);
  let completedChapter = enrollCourse?.completedChapters ?? [];

  return (
    <>
      {/* 1. MOBILE OVERLAY: Closes sidebar when clicking outside on mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 2. SIDEBAR CONTAINER: Controlled by 'isOpen' on mobile, static on desktop */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-[300px] bg-white transition-transform duration-300 ease-in-out transform
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 md:w-[320px] md:flex-shrink-0 
        border-r border-slate-100 h-screen p-5 overflow-y-auto
      `}>
        
        {/* Sidebar Header with Mobile Close Button */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
          <div>
            <h2 className='font-extrabold text-2xl text-slate-900 tracking-tight'>
              Curriculum
            </h2>
            <p className="text-sm font-medium text-slate-500 mt-1">
              {courseContent?.length || 0} Chapters
            </p>
          </div>
          
          {/* Close button - only visible on mobile */}
          <button 
            onClick={() => setIsOpen(false)}
            className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {courseContent?.map((chapter, index) => {
            const isCompleted = completedChapter.includes(index);
            const isSelected = selectedChapterIndex === index;

            return (
              <AccordionItem 
                value={chapter?.chapterName || `item-${index}`} 
                key={index}
                onClick={() => {
                  setSelectedChapterIndex(index);
                  // Optional: Auto-close sidebar on mobile after selecting a chapter
                  if(window.innerWidth < 768) setIsOpen(false);
                }}
                className={`border rounded-2xl px-4 overflow-hidden transition-all duration-200 ${
                  isSelected 
                    ? 'border-purple-300 bg-purple-50/50 shadow-sm' 
                    : 'border-slate-100 bg-white hover:border-purple-200'
                }`}
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center justify-between w-full text-left pr-2">
                    <span className={`text-base font-bold leading-tight ${isSelected ? 'text-purple-700' : 'text-slate-800'}`}>
                      {index + 1}. {chapter?.chapterName}
                    </span>
                    {isCompleted && (
                      <CheckCircle className="text-emerald-500 ml-3 flex-shrink-0" size={20} strokeWidth={2.5} />
                    )}
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pt-1 pb-4">
                  <div className="flex flex-col space-y-2">
                    {chapter?.topics?.map((topic, index_) => (
                      <div 
                        key={index_}
                        className={`px-4 py-3 text-sm rounded-xl transition-colors flex items-start gap-3 ${
                          isCompleted
                            ? "bg-gradient-to-r from-purple-50 to-pink-50 text-slate-800 border border-purple-100/50"
                            : "bg-slate-50 text-slate-600 border border-slate-100"
                        }`}
                      >
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isCompleted ? 'bg-purple-500' : 'bg-slate-300'}`} />
                        <span className="leading-relaxed">{topic}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </>
  )
}

export default ChapterListSidebar