const course = {
        name: 'Introduction to Ergonomics',
        author: "Michael Mkhize",
        description: "Become a Python Programmer and learn one of employer's most requested skills of 2023! This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!",
        imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        progress: 50   

    }

function CourseScroller() {
    return (
        
        <div className="flex pt-20 justify-around ">
            <div className="border rounded-lg w-[400px]">
                <h1 className="text-center border-b text-xl py-5">What will you learn?</h1>
                <div c>
                    <ul role="list" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500 px-40 text-gray-100 py-5">
                        <li>Computer Organisation</li>
                        <li>Hardware Aspects</li>
                        <li>Electronic Configuration</li>
                        <li>Computer Organisation</li>
                        <li>Hardware Aspects</li>
                        <li>Electronic Configuration</li>
                        <li>Hardware Aspects</li>
                        <li>Electronic Configuration</li>
                        <li>Computer Organisation</li>
                    </ul>
                </div>
            </div> 
            <div className="border rounded-lg w-[400px]">
                <h1 className="text-center border-b text-xl py-5">Who this course is for</h1>
                <div>
                    <ul role="list" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500 px-40 text-gray-100 py-5">
                        <li>Office workers, students, small/home business workers, and administrators would want to improve their productivity.</li>
                        <li>Aspiring software engineers who want to add skills to their programming toolbelt.</li>
                        <li>Computer users who have heard the "learn to code" message, but want practical reasons to learn programming.</li>
                        
                    </ul>
                </div>
            </div> 
            <div className="border rounded-lg w-[400px]">
                <h1 className="text-center border-b text-xl py-5">Requirements</h1>
                <div>
                    <ul role="list" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500 px-40 text-gray-100 py-5">
                        <li>No programming experience is required</li>
                        <li>Downloading and install Python is covered at the start of the course</li>
                        <li>Basic computer skills: surfing websites, running programs, saving and opening documents, etc</li>
                    </ul>
                </div>
            </div> 
        </div>
    )
}

export default CourseScroller;