import { useLocation } from "react-router";
import Home from "../Home";
import CourseInfoHeading from "../components/CourseInfoHeading";
import CourseScroller from "../components/CourseScroller";
import { getAuth, onAuthStateChanged, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import { getDocs, getFirestore, query, collection} from "firebase/firestore";
import app from "../firebase/firebase.js"

//Return the course description page
function CourseInfoPage() {
  
  const {location} = useLocation();
  
  console.log(location);

  // const [data, setData] = useState([]);
  const auth = getAuth(app);
  const db = getFirestore(app);
  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (user) {
        const id = user.uid;
        // console.log(id);
        //fetches the course data from the database
      } else {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
      }

      
      // const querySnapshot = await getDocs(query(collection(db,"courses",state)));
      // setData(querySnapshot.docs);
      // console.log(querySnapshot.docs);
    };

    fetchData();
  }, []);
  

  // console.log(data[0]);
  //navabar + courseinfo heading + course scroller
  return (
    
    <div>
      <Home></Home>
      <CourseInfoHeading state={location}></CourseInfoHeading>
      <CourseScroller></CourseScroller>
    
    </div>
  )
}

export default CourseInfoPage;
