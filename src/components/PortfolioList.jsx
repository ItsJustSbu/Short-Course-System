import { LinearProgress } from "@mui/material"
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const courses = [
    {
        name: 'Intro to Ergonomics',
        author: "Michael Mkhize",
        description: "Become a Python Programmer and learn one of employer's most requested skills of 2023! This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!",
        imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        progress: 50,
        
        

    },
    {
        name: 'Intro to Ergonomics',
        author: "Michael Mkhize",
        imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        progress: 50,
 

    },
    {
        name: 'Intro to Ergonomics',
        author: "Michael Mkhize",
        imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        progress: 50,
 
    },
    {
        name: 'Intro to Ergonomics',
        author: "Michael Mkhize",
        imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        progress: 50,
 

    },
    {
        name: 'Intro to Ergonomics',
        author: "Michael Mkhize",
        imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        progress: 50,
 

    },
    {
        name: 'Intro to Ergonomics',
        author: "Michael Mkhize",
        imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        progress: 50,

    }
]

const quizzes = [
    {
        courseName: 'Intro to Ergonomics',
        name: 'Quiz 1',
        description: 'A quiz is a fun and interactive way to test your knowledge on a particular topic. OpenMP (Open Multi-Processing) is an application programming interface (API) that enables parallel programming on shared memory multiprocessing architectures.',
        percentage: 50,
        status: 'Completed'
    },
    {
        courseName: 'Intro to Ergonomics',
        name: 'Quiz 2',
        description: 'A quiz is a fun and interactive way to test your knowledge on a particular topic. OpenMP (Open Multi-Processing) is an application programming interface (API) that enables parallel programming on shared memory multiprocessing architectures.',
        percentage: 20,
        pass: false,
        
    },
    {
        courseName: 'Intro to Ergonomics',
        name: 'Quiz 3',
        description: 'A quiz is a fun and interactive way to test your knowledge on a particular topic. OpenMP (Open Multi-Processing) is an application programming interface (API) that enables parallel programming on shared memory multiprocessing architectures.',
        percentage: 63,
        pass: false,
    },
 
    
]

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="white">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}


export default function Example() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/lesson');
    };
    return (
        <div class="flex justify-center pt-9">

        <ul role="list" className="w-11/12 place-content-center ">
            {courses.map((course) => (
                <li key={course.author} className="gap-x-6 py-5 pb-6 mb-7 border-2 border-blue-gray-200 rounded-xl content-center " >
                    <div className="flex gap-x-4 h-35 content-center">
                        {/* <img className="flex-none h-30  bg-gray-50 rounded-xl" src={course.imageUrl} alt="" /> */}
                        <div className="min-w-0 w-full ml-7">
                            <div className="h-3/5 pr-8">
                                <p className="text-5xl font-semibold leading-6 text-blue-gray-200 mb-5 mt-9">{course.name}</p>
                                <p className="text-2xl mt-1 truncate text-xs leading-5 text-blue-gray-300 mb-4">{course.author}</p>   
                                <LinearProgress variant="buffer" value={70} valueBuffer={100} color='secondary'></LinearProgress>

                                <div className="flex mt-6 space-x-10">
                                    <div className="flex flex-col flex-1 text-center text-blue-gray-200 border-2 border-blue-gray-200 text-3xl rounded-xl">
                                        My Notes
                                        <p className="text-justify mx-10 text-center text-sm mt-7">
                                        OpenMP (Open Multi-Processing) is an application programming interface (API) that enables parallel programming on shared memory multiprocessing architectures. It allows software developers to write parallel programs in a straightforward manner using a set of compiler directives, runtime library routines, and environment variables.

                                        OpenMP is widely used in high-performance computing, scientific simulations, and parallel processing applications. The programming model is based on a set of compiler directives, which are statements in the source code that give instructions to the compiler to generate parallel code. The directives can be used to parallelize loops, sections of code, and even entire functions.

                                        OpenMP also provides a runtime library that supports the execution of the parallel code generated by the compiler. The library manages the creation and synchronization of threads, which are the parallel execution units in OpenMP.

                                        OpenMP is supported by a wide range of compilers, including GCC, Clang, Intel C++ Compiler, and Microsoft Visual C++. It is available on a variety of platforms, including Linux, Windows, and macOS.

                                        Overall, OpenMP is a powerful tool for parallel programming that can help developers to write efficient and scalable code for shared-memory systems.
                                        </p>
                                    </div>
                                    <div className="flex flex-col flex-1 text-center text-blue-gray-200 border-2 border-blue-gray-200 text-3xl rounded-xl">
                                        Quizzes
                                        <div className="mt-7 ">
                                            <ul role="list" className="text-lg">
                                                {
                                                    quizzes.map((quiz) => (
                                                        <li className="border mb-2 rounded-xl mx-3" key={quiz.name}>
                                                            <div className= "mx-5 my-2">
                                                                <div className="flex justify-between ">
                                                                    <div>
                                                                        {quiz.name}
                                                                    </div>
                                                                    <div>
                                                                        <CircularProgressWithLabel value={quiz.percentage} />
                                                                        
                                                                    </div>
                                                                    
                                                                </div>
                                                                
                                                                <div className="text-sm text-left">
                                                                    {quiz.description}
                                                                </div>
                                                               
                                                                <div className="flex justify-end mt-3">
                                                                    <button className="text-sm border rounded-xl px-4 py-2">Continue to quiz</button>
                                                                </div>
                                                                
                                                                
                                                            </div>
                                                        </li>

                                                    ))
                                                }

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                
                    </div>
                </li>
      ))}
        </ul>    
    </div>
    
  )
}
