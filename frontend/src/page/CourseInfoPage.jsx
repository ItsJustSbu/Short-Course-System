import { useLocation } from "react-router";
import Home from "../Home";
import CourseInfoHeading from "../components/CourseInfoHeading";
import CourseScroller from "../components/CourseScroller";


function CourseInfoPage() {
  const {state} = useLocation();
  console.log(state);

  return (
    <div>
      <Home></Home>
      <CourseInfoHeading state={state}></CourseInfoHeading>
      <CourseScroller></CourseScroller>
    
    </div>
  )
}

export default CourseInfoPage;