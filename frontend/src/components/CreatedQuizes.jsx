const quizzes = [
    {
        courseName: 'Intro to Ergonomics',
        name: 'Quiz 1',
        description: 'A quiz is a fun and interactive way to test your knowledge on a particular topic. OpenMP (Open Multi-Processing) is an application programming interface (API) that enables parallel programming on shared memory multiprocessing architectures.',
        percentage: 50,
        status: 'Completed'
    },
    {
        courseName: 'Intro to Ergonomics',
        name: 'Quiz 2',
        description: 'A quiz is a fun and interactive way to test your knowledge on a particular topic. OpenMP (Open Multi-Processing) is an application programming interface (API) that enables parallel programming on shared memory multiprocessing architectures.',
        percentage: 20,
        pass: false,
        
    },
 
    
]

export default function CreatedQuiz() {
    return (
        <div className="flex flex-col flex-1 text-center text-blue-gray-200 border-2 border-blue-gray-200 text-3xl rounded-xl">
            Quizzes
            <div className="mt-7 ">
                <ul role="list" className="text-lg">
                    {
                        quizzes.map((quiz) => (
                            <li className="border mb-2 rounded-xl mx-3" key={quiz.name}>
                                <div className= "mx-5 my-2">
                                    <div className="flex justify-between ">
                                        <div>
                                            {quiz.name}
                                        </div>
                                        
                                        
                                    </div>
                                    
                                    <div className="text-sm text-left">
                                        {quiz.description}
                                    </div>
                                    
                                    <div className="flex justify-end mt-3">
                                        <button className="text-sm border rounded-xl px-4 py-2" >Continue to quiz</button>
                                    </div>
                                    
                                    
                                </div>
                            </li>

                        ))
                    }

                </ul>
            </div>
        </div>
    )
}