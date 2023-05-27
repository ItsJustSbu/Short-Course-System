import { CgProfile } from "react-icons/cg";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";

export const data = [
  [
    "",
    "",
    "",
    "",
  ],
  [1, 37.8, 80.8, 41.8],
  [2, 30.9, 69.5, 32.4],
  [3, 25.4, 57, 25.7],
  [4, 11.7, 18.8, 10.5],
  [5, 11.9, 17.6, 10.4],
  [6, 8.8, 13.6, 7.7],
  [7, 7.6, 12.3, 9.6],
  [8, 12.3, 29.2, 10.6],
  [9, 16.9, 42.9, 14.8],
  [10, 12.8, 30.9, 11.6],
  [11, 5.3, 7.9, 4.7],
  [12, 6.6, 8.4, 5.2],
  [13, 4.8, 6.3, 3.6],
  [14, 4.2, 6.2, 3.4],
];

export const options = {
  chart: {
    title: "",
    subtitle: "",
    backgroundColor: '#2C354A', 
  },
};



const courses = [
    {
        name: 'Intro to Ergonomics',
        author: "Michael Mkhize",
        description: "Become a Python Programmer and learn one of employer's most requested skills of 2023! This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!",
        imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        progress: 50 ,
        views: 100,
        subscriptions: 50,
        color: "border-orange-500"

    },
    {
        name: 'Intro to Ergonomics',
        author: "Michael Mkhize",
        imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        progress: 50,  
        views: 100,
        subscriptions: 50,
        color: "border-blue-500"
    },
    {
        name: 'Intro to Ergonomics',
        author: "Michael Mkhize",
        imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        progress: 50,
        views: 100,
        subscriptions: 50,
        color: "border-rose-600",
    },
   
]

function StudioBody() {
    const navigate = useNavigate();
    const goToAddCourse = () => {
        navigate('/AddCourse')
    }
    const goToMyCourses = () => {
        navigate('/Courses')
    }


    return (
        
        <div className="flex justify-evenly  mt-12 mb-10" >
            <div className="border w-80 flex flex-col items-center justify-center rounded-md">
                <AiOutlineVideoCameraAdd className="text-9xl"></AiOutlineVideoCameraAdd>
                <button className="border rounded-md mt-16 w-36 h-12 border-light-purple" onClick={goToAddCourse}>Add Course</button>

            </div>
            <div className=" relative flex flex-col justify-center items-center border w-[350px] rounded-md text-center pt-10 font-bold text-xl ">
                <div className="absolute mb-12 top-10">
                    My Courses  
                </div>
                
                {courses.map((course) => (
                    <div key={course.name } className="border w-11/12 rounded-md mb-2 text-left pl-3">
                        <h1 className="font-normal ">{course.name}</h1>
                        <h1 className="font-light text-sm">{course.subscriptions} subscribers</h1>
                        <h1 className="font-light text-sm">{course.views} views</h1>
                    </div>
                ))}
                <div className=" absolute bottom-10 flex justify-end content-end mb-3 ">
                    <button className="text-sm font-normal border w-36 h-12 rounded-md border-light-purple mt-10" onClick={goToMyCourses}>
                        View All Courses
                    </button>
                </div>

            </div>
            <div className="border w-[750px] rounded-md text-center pt-10 font-bold text-xl flex flex-col justify-center items-center">
                Creater Analytics
    
                <div className="w-4/5 mt-5">
                    <Chart
                    chartType="Line"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                    className="bg-transparent"
                    />

                </div>
                <div>
                    <button className="text-sm font-normal border w-36 h-12 rounded-md my-10 border-light-purple">
                        View Analytics
                    </button>
                </div>
                
            </div>

            
        </div>
    )
}

export default StudioBody