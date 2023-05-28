import React, { useState } from 'react'

const AddCourse = () => {
  const [lessons, setLessons] = useState([''])

  const handleAddLesson = () => {
    setLessons([...lessons, ''])
  }

  const handleLessonChange = (index, value) => {
    const newLessons = [...lessons]
    newLessons[index] = value
    setLessons(newLessons)
  }

  return (
    <div className=' flex flex-col pl-2 text-light-purple'>
        <h1 className='bold text-4xl pb-8'>Edit Course</h1>
        
        <h2 className='semibold text-2xl'>What will you call this Course?</h2>
        <p className=' pb-2 '>Give a title for your course.</p>
        {/* This text area is for adding the title */}
        <textarea className='resize-none w-[500px] rounded-md' placeholder='Enter title'></textarea>

        <h2 className='semibold text-2xl pb-2 pt-8'>What will students learn from your course?</h2>
        <p className=' pb-2 '>Give a short description for your course.</p>
      {/* This text area is for entering the course description */}
        <textarea className='resize-none w-[500px] rounded-md' placeholder='Enter description'></textarea>

        <h2 className='semibold text-2xl pb-2 pt-8'>What are the prerequisites for taking this course?</h2>
        <p className=' pb-2 '>Give all skills required before enrolling in this course.</p>
        {/* This text area is for entering the requirements of the course i.e. prerequisites */}
        <textarea className='resize-none w-[500px] rounded-md' placeholder='Enter requirements'></textarea>

        <h2 className='semibold text-2xl pb-2 pt-8'>Who this course is for?</h2>
        <p className=' pb-2 '>Write a description of the intended students that this course is aimed towards.</p>
        {/*  */}
        <textarea className='resize-none w-[500px] rounded-md' placeholder='Describe intended audience'></textarea>

        <h2 className='semibold text-2xl pb-2 pt-8'>What will the thumbnail be?</h2>
        <p className=' pb-2 '>Attach a link to a picture to use as your thumbnail.</p>
        <textarea className='resize-none w-[500px] rounded-md' placeholder='Enter link address'></textarea>

        <h2 className='semibold text-2xl pb-2 pt-8'>Attach Lessons</h2>
        <div className='flex flex-col gap-4'>
        {lessons.map((lesson, index) => (
          <textarea
            key={index}
            className='resize-none w-[500px] rounded-md'
            placeholder='Enter lesson link'
            value={lesson}
            onChange={(e) => handleLessonChange(index, e.target.value)}
          />
        ))}
        <button className='text-3xl font-semibold border-2 rounded-md p-2 border-white' onClick={handleAddLesson}>
          Add Lesson
        </button>
      </div>

        <div className='pt-8 pb-4'>
          <button className='text-3xl font-semibold border-2 rounded-md p-2 border-white'>
            Save
          </button>
        </div>
        

        
    </div>
  )
}

export default AddCourse