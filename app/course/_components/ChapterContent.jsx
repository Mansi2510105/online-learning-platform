// import React, { useContext, useState } from 'react'
// import { SelectedChapterIndexContext } from "../../../context/SelectedChapterIndexContext";
// import YouTube from 'react-youtube';
// import { CheckCircle, Loader2Icon, X } from 'lucide-react';
// import { Button } from '../../../components/ui/button';
// import { useParams } from 'next/navigation';
// import axios from 'axios';
// import { toast } from 'sonner';

// function ChapterContent({ courseInfo, refreshData }) {
//   const {courseId}=useParams();
//   const { course, enrollCourse }=courseInfo ?? '';
//   const courseContent = courseInfo?.courses?.courseContent;
//   const {selectedChapterIndex, setSelectedChapterIndex}=useContext(SelectedChapterIndexContext)
//   const videoData=courseContent?.[selectedChapterIndex]?.youtubeVideo
//   const topics=courseContent?.[selectedChapterIndex]?.courseData?.topics
//   let completedChapter=enrollCourse?.completedChapters ?? [];
//   const [loading, setLoading]=useState(false);
//   const markChapterCompleted = async() => {

//     setLoading(true);
//       completedChapter.push(selectedChapterIndex);
//       const result = await axios.put('/api/enroll-course',{
//         courseId: courseId,
//         completedChapter: completedChapter
//       });
//       console.log(result);
//       refreshData();
//       toast.success('Chapter Marked Completed')
//       setLoading(false);
    
//   }

//    const markIncompletedChapter = async() => {
//      setLoading(true)
//       const completedChap=completedChapter.filter(item=>item!=selectedChapterIndex)
//       const result = await axios.put('/api/enroll-course',{
//         courseId: courseId,
//         completedChapter: completedChap
//       });
//       console.log(result);
//       refreshData();
//       toast.success('Chapter Marked Incompleted')
//       setLoading(false)
    
//   }

//   return (
//     <div className='p-10'>
//       <div className='flex justify-between items-center'>
//       <h2 className='font-bold text-2xl'>{selectedChapterIndex+1}. {courseContent?.[selectedChapterIndex]?.courseData?.chapterName}</h2>
//       {!completedChapter?.includes(selectedChapterIndex)?<Button onClick={()=>markChapterCompleted()}
//         disabled={loading}>{loading?<Loader2Icon className='animate-spin'/>:<CheckCircle/>}Mark as Completed</Button>:<Button variant="outline" onClick={markIncompletedChapter} disabled={loading}>{loading?<Loader2Icon className='animate-spin'/>:<X />} Mark Incomplete </Button>}
//       </div>
      
//       <h2 className='my-2 font-bold text-lg'>Related Videos 📽️</h2>
//       <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
//         {videoData?.map((video, index) => index < 2 && (
//           <div key={index}>
//             <YouTube
//             videoId={video?.videoId}
//             opts={{
//               height:'250', 
//               width: '400'
//               }}/>
//             </div>
//         ))}
//       </div>
//       <div className='mt-7'>
//         {topics?.map((topic, index)=>(
//           <div key={index} className='mt-10 p-5 bg-secondary rounded-2xl'> 
//             <h2 className='font-bold text-lg text-primary'>{index+1}. {topic?.topic}</h2>
//             {/* <p>{topic?.content}</p> */}
//             <div dangerouslySetInnerHTML={{__html: topic?.content}} style={{
//               lineHeight: "2.5"
//             }}></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }


// export default ChapterContent

import React, { useContext, useState } from 'react';
import { SelectedChapterIndexContext } from "../../../context/SelectedChapterIndexContext";
import YouTube from 'react-youtube';
import { CheckCircle, Loader2Icon, X } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { toast } from 'sonner';

function ChapterContent({ courseInfo, refreshData }) {
  const { courseId } = useParams();
  const { course, enrollCourse } = courseInfo ?? '';
  const courseContent = courseInfo?.courses?.courseContent;
  const { selectedChapterIndex, setSelectedChapterIndex } = useContext(SelectedChapterIndexContext);
  
  const videoData = courseContent?.[selectedChapterIndex]?.youtubeVideo;
  const topics = courseContent?.[selectedChapterIndex]?.courseData?.topics;
  let completedChapter = enrollCourse?.completedChapters ?? [];
  const [loading, setLoading] = useState(false);

  const markChapterCompleted = async () => {
    setLoading(true);
    completedChapter.push(selectedChapterIndex);
    const result = await axios.put('/api/enroll-course', {
      courseId: courseId,
      completedChapter: completedChapter
    });
    refreshData();
    toast.success('Chapter Marked Completed');
    setLoading(false);
  }

  const markIncompletedChapter = async () => {
    setLoading(true);
    const completedChap = completedChapter.filter(item => item !== selectedChapterIndex);
    const result = await axios.put('/api/enroll-course', {
      courseId: courseId,
      completedChapter: completedChap
    });
    refreshData();
    toast.success('Chapter Marked Incomplete');
    setLoading(false);
  }

  // Responsive YouTube options
  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  }

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className='p-6 md:p-10 max-w-5xl mx-auto'>
      {/* Header Section */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
        <h2 className='font-extrabold text-3xl text-slate-900 tracking-tight'>
          {selectedChapterIndex + 1}. {courseContent?.[selectedChapterIndex]?.courseData?.chapterName}
        </h2>
        
        {!completedChapter?.includes(selectedChapterIndex) ? (
          <Button 
            onClick={() => markChapterCompleted()}
            disabled={loading}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity border-0 shadow-md rounded-full px-6"
          >
            {loading ? <Loader2Icon className='animate-spin mr-2' size={18} /> : <CheckCircle className="mr-2" size={18} />}
            Mark as Completed
          </Button>
        ) : (
          <Button 
            variant="outline" 
            onClick={markIncompletedChapter} 
            disabled={loading}
            className="rounded-full text-slate-600 hover:text-slate-900 border-slate-200"
          >
            {loading ? <Loader2Icon className='animate-spin mr-2' size={18} /> : <X className="mr-2" size={18} />} 
            Mark Incomplete
          </Button>
        )}
      </div>
      
      {/* Videos Section */}
      {videoData && videoData.length > 0 && (
        <div className="mb-10">
          <h3 className='mb-4 font-bold text-xl text-slate-800 flex items-center gap-2'>
            Related Videos <span className="text-2xl">🎥</span>
          </h3>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {videoData?.map((video, index) => index < 2 && (
              <div 
                key={index} 
                className="w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50"
              >
                <YouTube
                  videoId={video?.videoId}
                  opts={opts}
                  onReady={onPlayerReady}
                  className="w-full h-full"
                  iframeClassName="w-full h-full" 
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className='mt-8 space-y-6'>
        {topics?.map((topic, index) => (
          <div 
            key={index} 
            className='p-6 md:p-8 bg-white border border-slate-100 shadow-sm rounded-3xl transition-all hover:shadow-md'
          > 
            <h3 className='font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 mb-4 pb-4 border-b border-slate-100'>
              {index + 1}. {topic?.topic}
            </h3>
            <div 
              className="text-slate-700 prose prose-slate prose-sm md:prose-base max-w-none 
             break-words overflow-x-hidden"
              dangerouslySetInnerHTML={{ __html: topic?.content }} 
              style={{ lineHeight: "1.8" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterContent;