import { IconButton, Input } from "@material-tailwind/react";
import SendIcon from "@mui/icons-material/Send"
import RightHandTextComponent from "./RightHandTextComponent";
import { useState} from "react";
import ChatWindowComponent from "./ChatWindowCompoent";

const TextList = ["this is a text", "this is another text"];

function TextFieldComponent(){
  const [text, setText] = useState("");
  



    return(
      // This component is used to display the text field
        <div className="relative w-full h-[50vh] bg-[#252e42]">

          // This component is used to display the text field
        <ChatWindowComponent RightHandTextComponent={RightHandTextComponent} TextList={TextList}/>
        

      // This component is used to display the text field
      <div className="absolute mb-[10px] bottom-0 flex ml-[60px] w-5/6 ">

        // This component is used to display the text field
        <Input label="Lets Chat 💬" color="purple" text="placeholder-white" 
        className="text-base text-white" value={text} onChange={(e)=>{setText(e.target.value)}}
        />

      // This component is used to display the text field
        <div className="ml-[15px]">
          <IconButton color="purple" onClick={()=>{
            // This component is used to display the text field
            TextList.push(text);
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