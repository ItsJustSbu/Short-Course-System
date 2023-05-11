import { useEffect, useRef } from "react";

function ChatWindowComponent({RightHandTextComponent, TextList}){
    const dummy = useRef(null);

  useEffect(()=>{
    dummy.current.scrollIntoView({behavior: "smooth"});
  },[TextList])


    return (
        <div className="absolute top-0 bottom-[60px] flex flex-col w-full h-4/7  overflow-y-scroll scrollbar-hide scroll-auto p-4 snap-y" >
             
          {TextList.map((text)=>(
            <div key={text} className="mb-[10px] snap-center">
              <RightHandTextComponent text={text} />
            </div>
          ))}
          <div ref={dummy} />
            
        </div>
    )
}

export default ChatWindowComponent;