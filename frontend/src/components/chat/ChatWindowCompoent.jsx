import { useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import app from "../../firebase/firebase.js";
import RightHandTextComponent from "./RightHandTextComponent.jsx";
import LeftHandComponent from "./LeftHandTextComponent.jsx";
import { useState } from "react";

function ChatWindowComponent({ TextList}){

  // This component is used to display the chat window
    const dummy = useRef(null);
    //collects the uid so that we can use it to display the chat window

    const [uid, setUid] = useState("");

  // This component is used to display the chat window
  useEffect(()=>{
    // This component is used to display the chat window
    dummy.current.scrollIntoView({behavior: "smooth"});
    // This component is used to display the chat window
  },[TextList]);
  
  //Google Authentication
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user)=>{
    if (user){
      const uid = user.uid;
      setUid(uid);
    }
    else{
      const provider = new GoogleAuthProvider();
      signInWithRedirect(auth, provider);
    }
  });


    return (

        <div className="absolute top-0 bottom-[60px] flex flex-col w-full h-4/7  overflow-y-scroll scrollbar-hide scroll-auto p-4 snap-y" >
             
             
          {TextList.map((text)=>(
            
            <div key={text} className="mb-[10px] snap-center">

              {/* // This component is used to display the chat window */}
              {/* if (uid == text.uid){ */}
                <RightHandTextComponent text={text} />
              {/* // } */}
              {/* else{
                <LeftHandComponent text={text} />
              } */}
  
            </div>
          ))}
          {/* // This component is used to display the chat window */}
          <div ref={dummy} />
            
        </div>
    )
}

export default ChatWindowComponent;