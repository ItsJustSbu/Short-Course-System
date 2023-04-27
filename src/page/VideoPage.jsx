
import VideoSplitScreen from "../layouts/VideoSplitSCreenLayout";
import TopBot from "../layouts/TopBot";
import ChatApp from "./ChatApp";
import ChatWindowComponent from "../components/chat/ChatWindowCompoent";
import TextFieldComponent from "../components/chat/TextFieldComponent";




function VideoPage(){

    return(
        <>
            <form className="ml-[100px] mt-[50px] mr-[100px] md-[50px]">
                <VideoSplitScreen>
                    <iframe title="This is a video" className="responsive-video" height="700" width='100%' src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
                    <TopBot>
                        <div>
                            <TextFieldComponent />
                        </div>
                        <div className="flex flex-col gap-1 h-full place-items-center">
                            <div className="grow-0">
                                <label className="flex-none block mb-2 text-sm font-medium text-gray-400 dark:text-white">Your Notes</label>
                            </div>
                            <div className="grow w-full h-full">
                                <textarea rows="8" className="resize-none hover:resize block p-2.5 w-full h-full max-h-[570px] max-w-[700px] rounded-md border-8 bg-gray-900 border-gray-900 text-slate-200" placeholder="Write your notes here...">
                               
                                </textarea>
                            </div>
                            
                            <div className="grow-0">
                                <button className="flex-none bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                                    Save
                                </button>
                            </div>
                            
                        </div>
                        
                    </TopBot>  

                </VideoSplitScreen>
            </form>
            
              
             
        </>
    )
}

export default VideoPage;