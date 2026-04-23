// "use client"
// import { Input } from '../../../components/ui/input'
// import { Button } from '../../../components/ui/button'
// import React, { useState, useEffect } from 'react'
// import { useUser } from '@clerk/nextjs'
// import { Search } from 'lucide-react'
// import axios from 'axios'
// import CourseCard from '../_components/CourseCard'
// import { Skeleton } from '../../../components/ui/skeleton'



// function Explore() {
//     const [courseList, setCourseList] = useState([]);

//     const { user } = useUser();
//     useEffect(()=>{
//       user && GetCourseList();
//     }, [user])
//     const GetCourseList = async()=>{
//       const result = await axios.get('/api/courses?courseId=0');
//       console.log(result.data);
//       setCourseList(result.data);
//     }
//   return (
//     <div>
//       <h2 className='font-bold text-3xl mb-6'>Explore More Courses</h2>
//       <div className='flex gap-5 max-w-md'>
//         <Input placeholder="Search" />
//         <Button><Search />Search</Button>
//       </div>
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
//         {courseList.length>0?courseList?.map((course,index)=>(
//           <CourseCard course={course} key={index} />
//         )):
//         [0,1,2,3].map((item, index)=>(
//             <Skeleton key={index} className='w-full h-[240px]'/>
//         ))}
//         </div>
//     </div>
//   )
// }

// export default Explore

"use client"
import { Input } from '../../../components/ui/input'
import { Button } from '../../../components/ui/button'
import React, { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { Search, GraduationCap } from 'lucide-react'
import axios from 'axios'
import CourseCard from '../_components/CourseCard'
import { Skeleton } from '../../../components/ui/skeleton'

export default function Explore() {
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state explicitly
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      GetCourseList();
    }
  }, [user])

  const GetCourseList = async () => {
    setLoading(true);
    try {
      const result = await axios.get('/api/courses?courseId=0');
      setCourseList(result.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-5 py-8 md:px-10 lg:px-12 max-w-7xl mx-auto">
      {/* Header & Description */}
      <div className="mb-10">
        <h2 className='font-extrabold text-4xl text-slate-900 tracking-tight flex items-center gap-3'>
          <GraduationCap className="text-purple-600 w-10 h-10" />
          Explore Courses
        </h2>
        <p className="text-slate-500 mt-2 text-lg">
          Discover AI-generated masterclasses tailored to your goals.
        </p>
      </div>

      {/* Modernized Search Bar */}
      <div className='flex flex-col sm:flex-row gap-3 mb-12 max-w-2xl'>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <Input 
            placeholder="What do you want to learn today?" 
            className="pl-10 h-12 rounded-xl border-slate-200 focus-visible:ring-purple-500 shadow-sm"
          />
        </div>
        <Button className="h-12 px-8 bg-purple-600 hover:bg-purple-700 rounded-xl shadow-md shadow-purple-100 transition-all active:scale-95 font-bold">
          Search
        </Button>
      </div>

      {/* Improved Grid Logic */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {!loading ? (
          courseList?.length > 0 ? (
            courseList.map((course, index) => (
              <div key={index} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                <CourseCard course={course} displayType="explore" />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
              <p className="text-slate-500 font-medium">No courses found. Try a different search term!</p>
            </div>
          )
        ) : (
          // Better Skeleton Placeholders
          [0, 1, 2, 3, 4, 5].map((item, index) => (
            <div key={index} className="space-y-4">
              <Skeleton className='w-full h-[200px] rounded-2xl' />
              <Skeleton className='w-[80%] h-6 rounded-lg' />
              <Skeleton className='w-[40%] h-4 rounded-lg' />
            </div>
          ))
        )}
      </div>
    </div>
  )
}
