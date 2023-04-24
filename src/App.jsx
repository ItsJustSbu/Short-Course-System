
import {Routes, Route} from "react-router-dom"
import HomePage from './page/HomePage';
import RegistrationPage from './page/RegistrationPage';
import LoginPage from './page/LoginPage';
import VideoPage from './page/VideoPage';
import MyLearning from './page/MyLearning';import CourseInfoPage from "./page/CourseInfoPage";


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegistrationPage />}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/watch" element={<VideoPage />} />
      <Route path="/list" element={<MyLearning />} />
      
      <Route path="/course-info" element={<CourseInfoPage/>} />
    </Routes>
    </>
    
  )
}

export default App


