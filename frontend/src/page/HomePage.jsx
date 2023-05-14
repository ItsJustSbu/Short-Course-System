import Home from "../Home"
import CoursesGrid from '../CoursesGrid';
import { useLocation } from "react-router";

function HomePage() {
  const {state} = useLocation();

  return (
    <div>
    <div>
    <Home />
    </div>
    <div>
    <CoursesGrid state={state}/>
    </div>
    
    </div>
  )
}

export default HomePage;