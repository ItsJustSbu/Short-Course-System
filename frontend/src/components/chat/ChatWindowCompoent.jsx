import { useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import app from "../../firebase/firebase.js";
import RightHandTextComponent from "./RightHandTextComponent.jsx";
import LeftHandComponent from "./LeftHandTextComponent.jsx";
import { useState } from "react";
import { getDocs, getFirestore,query,collection, orderBy } from "firebase/firestore";

function ChatWindowComponent(){

  // This component is used to display the chat window
    const dummy = useRef(null);
    const [uid, setUid] = useState("");
    const [data, setData] = useState([]);
    //collects the uid so that we can use it to display the chat window

  

  // This component is used to display the chat window
  useEffect(()=>{
    // This component is used to display the chat window
    // dummy.current.scrollIntoView({behavior: "smooth"});
    querydb();
    
    // This component is used to display the chat window
  },[data]);
  
  //Google Authentication
  const auth = getAuth(app);
  const db = getFirestore(app);

  const querydb = async ()=>{
     await onAuthStateChanged(auth, (user)=>{
      if (user){
        const id = user.uid;
        setUid(id);
      }
      else{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
      }
    });

    const querySnapshot = await getDocs(query(collection(db,"messages"),orderBy("createdAt","asc")));
    setData(querySnapshot.docs);
      
    
  }
  
  
  
  
  
  


    return (

        <div className="absolute top-0 bottom-[60px] flex flex-col w-full h-4/7  overflow-y-scroll scrollbar-hide scroll-auto p-4 snap-y" >
          
             
          {data.map((d)=>(

            
            
            <div key={d.data()["UID"]} className="mb-[10px] snap-center">

              

              {/* // This component is used to display the chat window */}
              {d.data()["UID"]===uid ? <RightHandTextComponent text={d.data()["text"]} /> : <LeftHandComponent text={d.data()["text"]} />}
              
            
  
            </div>
          ))}
          {/* // This component is used to display the chat window */}
          
            
        </div>
    )
}

export default ChatWindowComponent;