// "use client"
// import AppHeader from '../../../app/workspace/_components/AppHeader'
// import React, { useEffect, useState } from 'react'
// import ChapterListSidebar from '../_components/ChapterListSidebar'
// import ChapterContent from '../_components/ChapterContent'
// import { useParams } from 'next/navigation';
// import axios from 'axios';

// function Course() {
//   const {courseId}=useParams();
//   const [courseInfo, setCourseInfo]= useState();
//   useEffect(()=>{
//         GetEnrolledCourseById();
//     }, [])
//     const GetEnrolledCourseById = async()=>{
//         const result = await axios.get('/api/enroll-course?courseId='+courseId);
//         console.log(result.data);
//         setCourseInfo(result.data);
        
//     }
//   return (
//     <div>
//       <AppHeader hideSidebar={true} />
//       <div className='flex gap-10'>
//         <ChapterListSidebar courseInfo={courseInfo} />
//         <ChapterContent courseInfo={courseInfo} refreshData={()=>GetEnrolledCourseById()} />
//       </div>
//     </div>
//   )
// }

// export default Course
// "use client"
// import AppHeader from '../../../app/workspace/_components/AppHeader'
// import React, { useEffect, useState } from 'react'
// import ChapterListSidebar from '../_components/ChapterListSidebar'
// import ChapterContent from '../_components/ChapterContent'
// import { useParams } from 'next/navigation';
// import axios from 'axios';

// // 1. We put "export default" right here!
// export default function CoursePage() {  
//   const { courseId } = useParams();
//   const [courseInfo, setCourseInfo] = useState();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   useEffect(() => {
//     // Adding a safety check to ensure courseId exists before fetching
//     if (courseId) {
//       GetEnrolledCourseById();
//     }
//   }, [courseId]); 

//   const GetEnrolledCourseById = async () => {
//     try {
//       const result = await axios.get('/api/enroll-course?courseId=' + courseId);
//       setCourseInfo(result.data);
//     } catch (error) {
//       console.error("Failed to fetch course:", error);
//     }
//   }

//   return (
//     <div className="flex flex-col h-screen overflow-hidden bg-slate-50">
//       <AppHeader hideSidebar={true} />
//       <div className='flex relative w-full flex-1 overflow-hidden'>
//         <ChapterListSidebar 
//           courseInfo={courseInfo} 
//           isOpen={isSidebarOpen} 
//           setIsOpen={setIsSidebarOpen} 
//         />
//         <div className="flex-1 w-full overflow-y-auto bg-white">
//           <ChapterContent 
//             courseInfo={courseInfo} 
//             refreshData={() => GetEnrolledCourseById()} 
//             setIsOpen={setIsSidebarOpen} 
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"
import AppHeader from '../../../app/workspace/_components/AppHeader'
import React, { useEffect, useState } from 'react'
import ChapterListSidebar from '../_components/ChapterListSidebar'
import ChapterContent from '../_components/ChapterContent'
import { useParams } from 'next/navigation';
import axios from 'axios';
import { Menu, X } from 'lucide-react'; // Using Lucide icons for the toggle

export default function CoursePage() {  
  const { courseId } = useParams();
  const [courseInfo, setCourseInfo] = useState();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (courseId) {
      GetEnrolledCourseById();
    }
  }, [courseId]); 

  const GetEnrolledCourseById = async () => {
    try {
      const result = await axios.get('/api/enroll-course?courseId=' + courseId);
      setCourseInfo(result.data);
    } catch (error) {
      console.error("Failed to fetch course:", error);
    }
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50 relative">
      <AppHeader hideSidebar={true} />
      
      {/* MOBILE TOGGLE BUTTON */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 p-3 bg-purple-600 text-white rounded-full shadow-lg active:scale-95 transition-transform"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className='flex relative w-full flex-1 overflow-hidden'>
        <ChapterListSidebar 
          courseInfo={courseInfo} 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen} 
        />
        
        {/* Main Content Area */}
        <div className="flex-1 w-full overflow-y-auto bg-white">
          <ChapterContent 
            courseInfo={courseInfo} 
            refreshData={() => GetEnrolledCourseById()} 
            setIsOpen={setIsSidebarOpen} 
          />
        </div>
      </div>
    </div>
  )
}