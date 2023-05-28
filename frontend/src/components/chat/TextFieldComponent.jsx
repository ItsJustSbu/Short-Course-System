import { IconButton, Input } from "@material-tailwind/react";
import SendIcon from "@mui/icons-material/Send"
import RightHandTextComponent from "./RightHandTextComponent";
import { useState} from "react";
import ChatWindowComponent from "./ChatWindowCompoent";
import app from "../../firebase/firebase.js";
import { getAuth, onAuthStateChanged, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import {doc, setDoc, collection,getFirestore, Timestamp} from "firebase/firestore";
import LeftHandComponent from "./LeftHandTextComponent";



function TextFieldComponent(){
  const [text, setText] = useState("");
  const [uid, setUid] = useState("");

  //Google Authentication

  const querydb = async () => {
    const auth = getAuth(app);
  await onAuthStateChanged(auth, (user)=>{
    if (user){
      const id = user.uid;
      alert(id);
    const db = getFirestore(app);
      const newRef = collection(db, "messages");
   const docRef = doc(newRef);
     setDoc(docRef,{
    text: text,
    UID: id,
    createdAt: Timestamp.fromDate(new Date())
  });
      
    }
    else{
      const provider = new GoogleAuthProvider();
      signInWithRedirect(auth, provider);
    }
  });

  
  
}




    return(
      // This component is used to display the text field
        <div className="relative w-full h-[50vh] bg-[#252e42]">

          {/* // This component is used to display the text field */}
        <ChatWindowComponent RightHandTextComponent={RightHandTextComponent} LeftHandTextComponent={LeftHandComponent}/>
        

      {/* // This component is used to display the text field */}
      <div className="absolute mb-[10px] bottom-0 flex ml-[60px] w-5/6 ">

        {/* // This component is used to display the text field */}
        <Input label="Lets Chat 💬" color="purple" text="placeholder-white" 
        className="text-base text-white" value={text} onChange={(e)=>{setText(e.target.value)}}
        />

    
        <div className="ml-[15px]">
          <IconButton color="purple" onClick={()=>{
            // This component is used to display the text field
            querydb();
            // alert(text);
            setText(""); // This component is used to display the text field
            
            }}>
            <SendIcon/>
          </IconButton >
        </div>
      </div>
      
    </div>
    )
}

export default TextFieldComponent;