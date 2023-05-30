import { useNavigate} from "react-router";
import { getDocs, getFirestore, query, collection} from "firebase/firestore";



const course = {
        name: 'Introduction to Ergonomics',
        author: "Michael Mkhize",
        description: "Become a Python Programmer and learn one of employer's most requested skills of 2023! This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!",
        imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        progress: 50   

    }

function CourseInfoHeading({state}) {
      // React Router hook for getting state from previous page
      const navigate = useNavigate();
    // const [data, setData] = useState([]);
    // const [user, setUser] = useState("");
    

      const handleClick = (courseId) => {

        //we need to enrol the student into the course
        
            // const id = user.uid;
            // const userRef = doc(db, "users", id);
            // updateDoc(userRef, {
            // coursesEnrolled: arrayUnion(courseId),
            // });
            // console.log(data);
            
            
        
        

        navigate("/course-info", { state: courseId });
    
        };

    return (
        <>
        <div className="h-72 bg-course-background bg-no-repeat bg-right bg-contain pl-5 mt-[50px] border-top mb-[150px]" >
            
                <div>
                <h1 className="text-7xl pt-[20px] ">{course.name}</h1>
                <h3 className="mb-[70px] w-4/5">{course.author}</h3> 
                <h4 className="mb-[70px] w-4/5">{course.description}</h4> 
                </div>

            
            <button className="border px-9 py-2 border-gray-blue-100 text-gray-100 rounded-xl" onClick={handleClick(state)}>Enroll</button>


        </div>
        </>
    )
}

export default CourseInfoHeading;