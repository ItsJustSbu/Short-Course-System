import React from 'react'
import { Link } from 'react-router-dom'
import { MdAdd } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

var CourseList = [
  {
      name: 'Intro to Ergonomics',
      author: "Michael Mkhize",
      description: "First Course",
      imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      progress: 50   

  },
  {
      name: 'Intro to Ergonomics',
      author: "Michael Mkhize",
      description:"Second Course with a passionate smile that asks the important question of what's in the box, what is what's in the box worth?",
      imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      progress: 50   

  },
]

const Courses = () => {
  const navigate = useNavigate();
    const goToAddCourse = () => {
        navigate('/AddCourse')
    }

  return (
    <div class="flex flex-col items-center pl-9 pt-9 text-white">
      <div className="w-11/12 place-content-center bg-transparent">
        {CourseList.map((course) => (

          <div key={course.author} className="gap-x-6 py-5 pb-6 mb-7 border-2 border-blue-gray-200 rounded-xl content-center " >
            <div className="flex gap-x-4 h-35 max-w-35 content-center">
                <img className="flex-none rounded-md h-35 w-25 bg-gray-50" src={course.imageUrl} alt="" />
                <div className="min-w-0 w-4/5">
                    <div className="h-3/5">
                        <p className="text-5xl font-semibold leading-6 text-blue-gray-200 mb-5 mt-9">{course.name}</p>
                        <p className="text-2xl mt-1 leading-5 text-blue-gray-300 ">{course.description}</p>
                          
                    </div>
                    <div className=" text-blue-gray-200 ">
                    
                    </div> 
                </div>

                <div className="align-bottom">
                    <button className="border-2 mr-5 w-50 px-5 py-3 rounded-xl text-blue-gray-200">Edit</button>
                </div> 
                    
            </div>
          </div>

        ))}
      </div>
      <nav className='pb-9 '>
        <li>
          
            <button className='flex border-white border-2 rounded-md h-16 w-32 place-content-center items-center' onClick={goToAddCourse}>
              <MdAdd className= 'text-4xl'/>
            </button>
        
        </li>
      </nav>
    </div>
  )
}

export default Courses