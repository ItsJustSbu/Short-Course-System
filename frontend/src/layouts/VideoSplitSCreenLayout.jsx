//this layout is used to split the screen into 2 parts merely for design window purposes
//we are going to use the CSVComponent and the Textfield component that will make a functional 

function VideoSplitScreen({children}){
    const [left, right] = children; 
    return(
        <>
            <div className="resize-none flex flex-col border-2 border-white rounded-lg">
                {/* <header className=" text-center bg-gradient-to-r from-cyan-500 to-blue-700">Head</header> */}
                <div className="flex">
                    <div className="flex-1 border-2 border-pink">
                        {left}
                    </div>
                    <div className="flex-1 border-l-2 border-azure-950">
                        {right}
                    </div>
                </div>
                {/* <footer className="text-center bg-gradient-to-r from-blue-500 to-red-500">Foot</footer> */}
            </div>
        </>
    );
}

export default VideoSplitScreen;