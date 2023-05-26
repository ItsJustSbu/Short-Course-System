import { useEffect, useRef } from "react";

function ChatWindowComponent({RightHandTextComponent, TextList}){

  // This component is used to display the chat window
    const dummy = useRef(null);

  // This component is used to display the chat window
  useEffect(()=>{
    // This component is used to display the chat window
    dummy.current.scrollIntoView({behavior: "smooth"});
    // This component is used to display the chat window
  },[TextList])


    return (
      // This component is used to display the chat window
        <div className="absolute top-0 bottom-[60px] flex flex-col w-full h-4/7  overflow-y-scroll scrollbar-hide scroll-auto p-4 snap-y" >
             
             {/* // This component is used to display the chat window */}
          {TextList.map((text)=>(
            // This component is used to display the chat window
            <div key={text} className="mb-[10px] snap-center">

              {/* // This component is used to display the chat window */}
              <RightHandTextComponent text={text} />
            </div>
          ))}
          {/* // This component is used to display the chat window */}
          <div ref={dummy} />
            
        </div>
    )
}

export default ChatWindowComponent;