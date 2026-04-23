import { Book, PlayCircle, Settings } from 'lucide-react';
import { LoaderCircle } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '../../../components/ui/button';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'sonner';

function CourseCard({course}) {
    const courseJson= course?.courseJson.courses;
    const [loading, setLoading] = useState(false);
    const onEnrollCourse=async()=>{
        try{
            setLoading(true);
        const result = await axios.post('/api/enroll-course', {
            courseId : course?.cid
        });
        console.log(result.data);
        if(result.data.resp){
            toast.warning('Already Enrolled!');
            setLoading(false)
            return;
        }
        toast.success('Enrolled!')
        setLoading(false);
    }
    catch(e){
        toast.error('Server side error')
        setLoading(false);
    }
    }


  return (
    <div className='shadow rounded-xl border overflow-hidden flex flex-col h-full bg-white'>
      {/* <Image src={course?.bannerImageUrl} alt={course?.name} width={400} height={300} className='w-full aspect-video rounded-xl object-cover'/> */}
   <div className='relative w-full aspect-video'>
        <Image
          src={
            course?.bannerImageUrl?.includes("source.unsplash")
              ? "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
              : course?.bannerImageUrl || "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
          }
          alt={course?.name || "course image"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className='p-3 flex flex-col gap-3 flex-1'>
        <h2 className='font-bold text-lg line-clamp-1'>{courseJson?.name}</h2>
        <p className='line-clamp-3 text-gray-400 text-sm flex-1'>{courseJson?.description}</p>
        <div className='flex justify-between items-center'>
            <h2 className = 'flex item-center gap-2'><Book className='text-primary h-5 w-5' />{courseJson?.noOfChapters} Chapters</h2>
            {course?.courseContent?.length?<Button size={'sm'} onClick={onEnrollCourse} disabled={loading}> {loading?<LoaderCircle className='animate-spin' />:<PlayCircle />} Enroll Course </Button> :
            <Link href={'/workspace/edit-course/'+ course?.cid}><Button size={'sm'} variant={'outline'}><Settings />Generate Course</Button> </Link> }
        </div>
      </div>
    </div>
  )
}

export default CourseCard
  