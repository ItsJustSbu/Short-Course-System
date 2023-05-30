import React from 'react';

const course = {
    name: 'Intro to Ergonomics',
    author: "Michael Mkhize",
    description: "Become a Python Programmer and learn one of employer's most requested skills of 2023! This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!",
    imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    progress: 50   
}

const quiz = {
    name: 'Quiz 1',
    points: 30,
    time_allocation: 60,
    description: "A quiz is a fun and interactive way to test your knowledge on a particular topic. OpenMP (Open Multi-Processing) is an application programming interface (API) that enables parallel programming on shared memory multiprocessing architectures",
    instructions: "The class attribute in the div element has been changed to className, which is the correct syntax for JSX. The keys for the inner map function have been changed to use the index of the map function, ensuring a unique key for each element. The htmlFor attribute has been added to associate each label with its corresponding checkbox. It uses a unique identifier generated using the question number and answer index to ensure uniqueness. The indentation has been adjusted for better code readability. With these changes, the code should work correctly, rendering the quiz questions and their potential answers as checkboxes."
}

const quiz_questions = [
    {
        question_number: 1,
        question: "What is the point of ergonomics?",
        poetential_answers: ['Fauntling', 'Because we smart', 'Improved comfort and well-being', 'Africa needs computers'],
        correct_answers: ['Improved comfort and well-being']
    },
    {
        question_number: 2,
        question: "What is the point of ergonomics?",
        poetential_answers: ['Fauntling', 'Because we smart', 'Improved comfort and well-being', 'Africa needs computers'],
        correct_answers: ['Improved comfort and well-being']
    },
    {
        question_number: 3,
        question: "What is the point of ergonomics?",
        poetential_answers: ['Fauntling', 'Because we smart', 'Improved comfort and well-being', 'Africa needs computers'],
        correct_answers: ['Improved comfort and well-being']
    },
    {
        question_number: 4,
        question: "What is the point of ergonomics?",
        poetential_answers: ['Fauntling', 'Because we smart', 'Improved comfort and well-being', 'Africa needs computers'],
        correct_answers: ['Improved comfort and well-being']
    },
    {
        question_number: 5,
        question: "What is the point of ergonomics?",
        poetential_answers: ['Fauntling', 'Because we smart', 'Improved comfort and well-being', 'Africa needs computers'],
        correct_answers: ['Improved comfort and well-being']
    },
    {
        question_number: 6,
        question: "What is the point of ergonomics?",
        poetential_answers: ['Fauntling', 'Because we smart', 'Improved comfort and well-being', 'Africa needs computers'],
        correct_answers: ['Improved comfort and well-being']
    },
]


function Questions() {
    return (
        <div className="pb-32">
            <div className="flex items-center flex-col">
                
                <input placeholder={course.name} className="text-center text-4xl mt-9 bg-transparent placeholder-light-purple hover:border "/>
                <h2 className="text-center text-2xl mt-4">{quiz.name} : Instructions</h2>
                <input placeholder="Enter your course description" className="text-center w-4/5 italic text-sm mt-9 bg-transparent rounded-md placeholder-light-purple hover:border "/>
                
            </div>

            <div class="flex justify-center pt-9 ">
            <ul role="list" className="w-11/12 place-content-center bg-transparent border-2 border-blue-gray-200 rounded-lg">
                {quiz_questions.map((question) => (
                    // This component is used to display the text on the coourses in a grid
                    <li key={question.question_number} className="gap-x-6 py-5 pb-6 mb-7  content-center " >
                        <div>
                            <input placeholder="Enter your question" className="text-center italic text-sm mt-9 rounded-md bg-transparent  ml-5 placeholder-light-purple hover:border "/>
                            
                            {question.poetential_answers.map((answer, index) => (
                                <div className="ml-10 mb-1  " key={index}>
                                    <input placeholder="Add Answer Option" className="text-center italic rounded-md text-sm mt-9 bg-transparent border ml-5 placeholder-light-purple hover:border "/>
                                    
                                </div>
                            ))}
                        </div>

                    </li>
                ))}
            </ul>  
            
            
            
        </div>
        <div className="flex justify-end w-11/12 pt-6 ">
            <button className="border px-8 py-2 rounded-md">
                Save
            </button>
        </div>

        </div>
        
  )
}

export default Questions;
