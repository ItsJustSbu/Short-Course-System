import TextFieldComponent from "../components/chat/TextFieldComponent";
import SplitscreenLayout from "../layouts/SplitScreenLayout";


function ChatApp(){

  return(
    <div className="w-full h-full">
      <SplitscreenLayout>
    <h1>This is the first part</h1>
    <div>
    <TextFieldComponent />
    </div>
    
  </SplitscreenLayout>

    </div>
    
  )
  

}

export default ChatApp;