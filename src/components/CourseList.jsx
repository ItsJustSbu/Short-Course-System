import { progress } from "@material-tailwind/react"
import Navbar from "./Navbar"
import { LinearProgress } from "@mui/material"

const courses = [
    {
        name: 'Intro to Ergonomics',
        author: "Michael Mkhize",
        description: "Become a Python Programmer and learn one of employer's most requested skills of 2023! This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!",
        imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        progress: 50   

    },
    {
        name: 'Intro to Ergonomics',
        author: "Michael Mkhize",
        imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        progress: 50   

    },
    {
        name: 'Intro to Ergonomics',
        author: "Michael Mkhize",
        imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        progress: 50   

    },
    {
        name: 'Intro to Ergonomics',
        author: "Michael Mkhize",
        imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        progress: 50   

    },
    {
        name: 'Intro to Ergonomics',
        author: "Michael Mkhize",
        imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        progress: 50   

    },
    {
        name: 'Intro to Ergonomics',
        author: "Michael Mkhize",
        imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        progress: 50   

    }
]

export default function Example() {
    return (
        <div class="flex justify-center pt-9">

        <ul role="list" className="w-11/12 place-content-center bg-transparent">
            {courses.map((course) => (
                <li key={course.author} className="gap-x-6 py-5 pb-6 mb-7 border-2 border-blue-gray-200 rounded-xl content-center " >
                    <div className="flex gap-x-4 h-35 content-center">
                        <img className="flex-none h-35 w-50 bg-gray-50" src={course.imageUrl} alt="" />
                        <div className="min-w-0 w-4/5">
                            <div className="h-3/5">
                                <p className="text-5xl font-semibold leading-6 text-blue-gray-200 mb-5 mt-9">{course.name}</p>
                                <p className="text-2xl mt-1 truncate text-xs leading-5 text-blue-gray-300 ">{course.author}</p>   
                            </div>
                            <div className=" text-blue-gray-200 ">
                                <div className="w-4/5 align-middle"> 
                                    <LinearProgress variant="buffer" value={70} valueBuffer={100} color='secondary' />
                                </div>
                                70%
                            </div> 
                        </div>
                        <div className="align-bottom">
                            <button className="border-2 mr-5 w-50 px-5 py-3 rounded-xl text-blue-gray-200">Continue</button>
                        </div>     
                    </div>
                </li>
      ))}
        </ul>    
    </div>
    
  )
}
