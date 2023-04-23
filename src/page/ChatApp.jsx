import SplitscreenLayout from "../layouts/SplitScreenLayout";
import { Input } from "@material-tailwind/react";
import SendIcon from "@mui/icons-material/Send"

function ChatApp(){

  return(
    <div className="w-full h-full">
      <SplitscreenLayout>
    <h1>This is the first part</h1>
    <div className="flex w-full h-[50vh] bg-gray-50">
      <div className="justify-center w-5/6">
        <Input label=" Input with Icon" icon={<SendIcon />} />
      </div>
    </div>
  </SplitscreenLayout>

    </div>
    
  )
  

}

export default ChatApp;