import React from 'react'

const TopBot = ({
    children
}) => {
    const[top,bottom] = children;
  return (
    <>
        <div className="flex flex-col h-full">
           <div className="shrink border-b-2 border-pink-500">
                {top}
            </div> 
            <div className="grow border-4 border-transparent ">
                {bottom}
            </div>
        </div>
    </>
  )
}

export default TopBot