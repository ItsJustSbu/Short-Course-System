import { useState } from "react";
import {Routes, Route, Navigate} from "react-router-dom"
import HomePage from './page/HomePage';
import RegistrationPage from './page/RegistrationPage';
import LoginPage from './page/LoginPage';
import ChatApp from './page/ChatApp';
import VideoPage from './page/VideoPage';
import MyLearning from './page/MyLearning';
import CourseInfoPage from "./page/CourseInfoPage";
import Lessons from "./page/Lessons";
import MyContext from "./MyContext";
import PortfolioPage from "./page/PortfolioPage";

import Studio from "./layouts/Studio";
import Dashboard from "./page/Dashboard";
import Courses from "./page/Courses";
import Quizzes from "./page/Quizzes";
import AddCourse from "./page/AddCourse";


import ProfilePage from "./page/ProfilePage"
import QuizPage from "./page/QuizPage"


function App() {
  const [user, setUser] = useState("");

  return (
    <>
    <MyContext.Provider value={{user, setUser}}>
    <Routes>
      {/*These are the routes for the main app */}
      <Route path="/" element={<Navigate to ="/login" />} />
      <Route path="/register" element={<RegistrationPage />}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/watch" element={<VideoPage />} />
      <Route path="/list" element={<MyLearning />} />
      <Route path="*" element={<h1>404: Not Found</h1>} />
      <Route path="/chat" element={<ChatApp />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/lesson" element={<Lessons />} />
      <Route path="/course-info" element={<CourseInfoPage />} />
      <Route path="/quiz-page" element={<QuizPage/>} />

            
      
      <Route path="/portfolio" element={<PortfolioPage/>} />
      {/* These are routes for the studio page nested 
      inside the studio layout
      */}
      <Route path="/studio" element={<Studio/>}>
        <Route path="Dashboard/" element={<Dashboard />}/>
        <Route path="Courses/" element={<Courses />}/>
        <Route path="Quizzes/" element={<Quizzes />}/>
        <Route path="AddCourse/" element={<AddCourse />}/> 
      </Route>
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/profile" element={<ProfilePage/>} />

    </Routes>
    </MyContext.Provider>
    </>
    
  )
}

export default App




