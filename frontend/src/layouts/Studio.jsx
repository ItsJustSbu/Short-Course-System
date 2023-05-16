import { Outlet, Link } from "react-router-dom";
import { MdOutlineDashboard, MdOutlinePlayLesson} from "react-icons/md";
import { CgProfile} from "react-icons/cg";
import { TbWriting} from "react-icons/tb";

export default function Root() {
    return (
      <div className='inline-flex flex-col w-screen h-full'>
        <div id="sidebar"className="fixed top-0 left-0 h-screen w-64 flex flex-col items-center bg-pink-600 text-black" >
            <div>
                <div>
                    <form id="search-form" role="search">
                    <div className="flex flex-col mt-2 mb-32 items-center">
                        <CgProfile className="text-9xl rounded-full mr-2 " />
                        <h1 className="text-black font-semibold text-4xl ">Slim</h1>
                    </div>
                    </form>
                </div>
                <nav className="border-t-2 border-black w-full">
                    <ul>
                    <li>
                        <Link to={`/studio/Dashboard`} className='inline-flex mb-8 mt-4 rounded-md hover:bg-pink-800'>
                            <div className="inline-flex">    
                                <MdOutlineDashboard className='bg-purple-300 text-4xl rounded-md mr-2' />
                                <h2 className='text-white origin-left font-medium text-2xl'>Dashboard</h2>
                            </div>
                        
                        </Link>
                    </li>
                    <li>
                        <Link to={`/studio/Courses`}>
                            <div className='inline-flex mb-8 rounded-md hover:bg-pink-800'>
                                <MdOutlinePlayLesson className='bg-purple-300 text-4xl rounded-md mr-2' />
                                <h2 className='text-white origin-left font-medium text-2xl'>Courses</h2>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/studio/Quizzes`}>
                            <div className='inline-flex rounded-md hover:bg-pink-800'>
                                <TbWriting className='bg-purple-300 text-4xl rounded-md mr-2' />
                                <h2 className='text-white origin-left font-medium text-2xl'>Quizzes</h2>
                            </div>
                        </Link>
                    </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                
            </div>
        </div>
        <div className=' absolute left-64'>
            <Outlet />
        </div>
      </div>
    );
  }