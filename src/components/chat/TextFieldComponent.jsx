import { IconButton, Input } from "@material-tailwind/react";
import SendIcon from "@mui/icons-material/Send"
import RightHandTextComponent from "./RightHandTextComponent";
import { useState} from "react";
import ChatWindowComponent from "./ChatWindowCompoent";

const TextList = ["this is a text", "this is another text"];

function TextFieldComponent(){
  const [text, setText] = useState("");
  



    return(
        <div className="relative w-full h-[50vh] bg-[#252e42]">

        <ChatWindowComponent RightHandTextComponent={RightHandTextComponent} TextList={TextList}/>
        

      <div className="absolute mb-[10px] bottom-0 flex ml-[60px] w-5/6 ">
        <Input label="Lets Chat 💬" color="purple" text="placeholder-white" 
        className="text-base text-white" value={text} onChange={(e)=>{setText(e.target.value)}}
        />


        <div className="ml-[15px]">
          <IconButton color="purple" onClick={()=>{
            TextList.push(text);
            // alert(text);
            setText("");
            
            }}>
            <SendIcon/>
          </IconButton >
        </div>
      </div>
      
    </div>
    )
}

export default TextFieldComponent;