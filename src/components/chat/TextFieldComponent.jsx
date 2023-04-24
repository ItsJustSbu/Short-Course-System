import { IconButton, Input } from "@material-tailwind/react";
import SendIcon from "@mui/icons-material/Send"
import LeftHandComponent from "./LeftHandTextComponent";
import RightHandTextComponent from "./RightHandTextComponent";

function TextFieldComponent(){
    return(
        <div className="relative w-full h-[50vh] bg-[#252e42]">
        <div className="absolute top-0 bottom-[60px] flex flex-col w-full h-4/7 overflow-y-scroll scrollbar-hide p-4">
            <LeftHandComponent text="This is a text" />
            <RightHandTextComponent text={"This is another text"} />
            
        </div>

      <div className="absolute mb-[10px] bottom-0 flex ml-[60px] w-5/6 ">
        <Input label="Lets Chat 💬" color="purple" text="placeholder-white" 
        className="text-base text-white"
        />
        <div className="ml-[15px]">
          <IconButton color="purple" onClick={()=>{alert("button has been clicked")}}>
            <SendIcon/>
          </IconButton >
        </div>
      </div>
      
    </div>
    )
}

export default TextFieldComponent;