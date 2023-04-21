//this layout is used to split the screen into 2 parts merely for design window purposes
//we are going to use the CSVComponent and the Textfield component that will make a functional 

function VideoSplitScreen({children}){
    const [left, right] = children; 
    return(
        <>
            <div className="flex flex-row">
                <div className="basis-3/4">
                    {left}
                </div>

                <div className="basis-1/4">
                    {right}
                </div>
                    
                    
            </div>
        </>
    );
}

export default VideoSplitScreen;