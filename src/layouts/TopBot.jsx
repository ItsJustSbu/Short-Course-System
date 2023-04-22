import React from 'react'

const TopBot = ({
    children
}) => {
    const[top,bottom] = children;
  return (
    <>
        <div className="flex flex-col">
           <div className="flex border-b-2 border-pink-500">
                {top}
            </div> 
            <div className="flex border-4 border-transparent">
                {bottom}
            </div>
        </div>
    </>
  )
}

export default TopBot