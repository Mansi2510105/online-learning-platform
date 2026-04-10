// import React from 'react'



// function ChapterTopicList() {

//   return (

//     <div>

//       <h2 className='font-bold text-3xl mt-10'>Chapters & Topics</h2>

     

//     </div>

//   )

// }



// export default ChapterTopicList

import React from 'react'



function ChapterTopicList({ course }) {

 

  const courseLayout = course?.courseJson?.courses;



  return (

    <div className='mt-10'>

      <h2 className='font-bold text-3xl mb-5'>Chapters & Topics</h2>

     

      <div className='flex flex-col gap-10 max-w-4xl mx-auto'>

          {courseLayout?.chapters?.map((chapter, index) => (

              <div key={index}>

                 

                  {/* --- Chapter Header Card --- */}

                  <div className='p-5 border shadow-md rounded-xl bg-primary text-white flex justify-between items-center'>

                      <div className='flex flex-col gap-1'>

                         <h2 className='font-bold text-lg'>Chapter {index + 1}: {chapter?.chapterName}</h2>

                         <p className='text-sm opacity-80'>{chapter?.duration}</p>

                      </div>

                      <div className='bg-white text-primary rounded-full px-4 py-1 text-sm font-bold'>

                         {chapter?.topics?.length} Topics

                      </div>

                  </div>



                  {/* --- Topics Roadmap (Zig-Zag) --- */}

                  <div className='flex flex-col items-center mt-6'>

                      {chapter?.topics?.map((topic, topicIndex) => (

                          <div key={topicIndex} className='flex flex-col items-center w-full max-w-3xl'>

                             

                              {/* Connector Line (Top) */}

                              <div className='h-8 bg-slate-200 w-[2px]'></div>



                              {/* Topic Row: Left - Circle - Right */}

                              <div className='flex items-center w-full gap-5 p-4'>

                                 

                                  {/* Left Side (Text if ODD index) */}

                                  <div className={`flex-1 text-right ${topicIndex % 2 !== 0 ? 'block' : 'invisible'}`}>

                                      <h2 className='inline-block p-3 border rounded-lg shadow-sm bg-white hover:bg-slate-50 transition-all max-w-xs'>

                                          {topic}

                                      </h2>

                                  </div>



                                  {/* Center Number Circle */}

                                  <div className='flex-shrink-0 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600'>

                                      {topicIndex + 1}

                                  </div>



                                  {/* Right Side (Text if EVEN index) */}

                                  <div className={`flex-1 ${topicIndex % 2 === 0 ? 'block' : 'invisible'}`}>

                                      <h2 className='inline-block p-3 border rounded-lg shadow-sm bg-white hover:bg-slate-50 transition-all max-w-xs'>

                                          {topic}

                                      </h2>

                                  </div>



                              </div>

                          </div>

                      ))}

                  </div>



              </div>

          ))}

      </div>

    </div>

  )

}



export default ChapterTopicList