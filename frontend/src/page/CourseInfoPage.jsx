import { useLocation } from "react-router";
import Home from "../Home";
import CourseInfoHeading from "../components/CourseInfoHeading";
import CourseScroller from "../components/CourseScroller";

//Return the course description page
function CourseInfoPage() {
  const {state} = useLocation();
  console.log(state);

  //navabar + courseinfo heading + course scroller
  return (
    <div>
      <Home></Home>
      <CourseInfoHeading state={state}></CourseInfoHeading>
      <CourseScroller></CourseScroller>
    
    </div>
  )
}

export default CourseInfoPage;
