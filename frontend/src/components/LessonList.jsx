import { progress } from "@material-tailwind/react"
import Navbar from "./Navbar"
import { LinearProgress } from "@mui/material"
import { useNavigate } from "react-router-dom";

const lessons = [
    {
        name: 'Lesson 1',
        description: "Become a Python Programmer and learn one of employer's most requested skills of 2023! This is the most comprehensive.",
        imageUrl:
      'https://www.kasandbox.org/programming-images/avatars/cs-hopper-cool.png',
        progress: 50   
        

    },
    {
        name: 'Lesson 2',
        description: "Become a Python Programmer and learn one of employer's most requested skills of 2023! This is the most comprehensive.",
        imageUrl:
      'https://www.kasandbox.org/programming-images/avatars/cs-hopper-cool.png',
        progress: 50   
  
    },
    {
        name: 'Lesson 3',
        description: "Become a Python Programmer and learn one of employer's most requested skills of 2023! This is the most comprehensive.",
        imageUrl:
      'https://www.kasandbox.org/programming-images/avatars/cs-hopper-cool.png',
        progress: 50   

    },
    {
        name: 'Lesson 4',
        description: "Become a Python Programmer and learn one of employer's most requested skills of 2023! This is the most comprehensive.",
        imageUrl:
        'https://www.kasandbox.org/programming-images/avatars/cs-hopper-cool.png',
        progress: 50   

    },
    {
        name: 'Lesson 5',
        description: "Become a Python Programmer and learn one of employer's most requested skills of 2023! This is the most comprehensive.",
        imageUrl:
        'https://www.kasandbox.org/programming-images/avatars/cs-hopper-cool.png',
        progress: 50   

    },
    {
        name: 'Lesson 6',
        description: "Become a Python Programmer and learn one of employer's most requested skills of 2023! This is the most comprehensive.",
        imageUrl:
        'https://www.kasandbox.org/programming-images/avatars/cs-hopper-cool.png',
        progress: 50   

    }
]

export default function Example() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/watch');
    };
    return (
        <div class="flex justify-center pt-9">

        <ul role="list" className="w-11/12 place-content-center bg-transparent">
            {lessons.map((course) => (
                <li key={course.author} className="gap-x-6 py-5 pb-6 mb-7 border-2 border-blue-gray-200 rounded-xl content-center " >
                    <div className="flex gap-x-4 h-35 content-center">
                        <img className="flex-none h-35 w-50 bg-gray-50" src={course.imageUrl} alt="" />
                        <div className="min-w-0 w-4/5">
                            <div className="h-3/5">
                                <p className="text-5xl font-semibold leading-6 text-blue-gray-200 mb-5 mt-9">{course.name}</p>
                                <p className="text-2xl mt-1 truncate text-xs leading-5 text-blue-gray-300 ">{course.description}</p>
                                   
                            </div>
                            <div className=" text-blue-gray-200 ">
                            
                            </div> 
                        </div>
                        <div className="align-bottom">
                            <button className="border-2 mr-5 w-50 px-5 py-3 rounded-xl text-blue-gray-200"onClick={handleClick}>Start lesson</button>
                        </div>     
                    </div>
                </li>
      ))}
        </ul>    
    </div>
    
  )
}
