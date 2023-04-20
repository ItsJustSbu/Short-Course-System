//this layout is used to split the screen into 2 parts merely for design window purposes
//we are going to use the CSVComponent and the Textfield component that will make a functional 

function SplitscreenLayout({children}){
    const [left, right] = children; 
    return(
        <>
            <div className="flex">
                <div className="flex-1">
                    {left}
                </div>
                <div className="flex-1">
                    {right}
                </div>
                    
                    
            </div>
        </>
    );
}

export default SplitscreenLayout;