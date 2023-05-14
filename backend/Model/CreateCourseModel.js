import mongoose from "mongoose";

const Schema = mongoose.Schema;


//This is a Create Courses schema for creating courses
const CreateCourses = new Schema({
    // Creator details
    creator: {
        type: String,
        required: true,
        unique: true
      },
        // Course details
      mycourses: {
        //stores information about the course
        type: {
          courseTitle: String,
          CourseDescription: String,
          CourseCreator : String,
          Why: String,
          link: String,
          image: String,
          // stores information about the lessons
          lessons: {
            lessonTitle: String, 
            lessonDescription: String,
            lessonVideo: String,
            lessonQuiz: String,
            lessonQuizAnswer: String,
          }
        },
        default: []
      },

    create_date : { type: Date, default: Date.now }
});

export default CreateCourses;