import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define the CreateCourses schema
const CreateCourses = new Schema({
  // Creator details
  creator: {
    type: String,
    required: true,
    unique: true,
  },

  // Course details
  mycourses: {
    // Information about the course
    type: {
      courseTitle: String,          // Course title
      CourseDescription: String,    // Course description
      CourseCreator: String,        // Course creator
      Why: String,                  // Reason for creating the course
      link: String,                 // Course link
      image: String,                // Course image
      lessons: {
        // Information about the lessons
        lessonTitle: String,          // Lesson title
        lessonDescription: String,    // Lesson description
        lessonVideo: String,          // Lesson video
        lessonQuiz: String,           // Lesson quiz
        lessonQuizAnswer: String,     // Lesson quiz answer
      },
    },
    default: [],                     // Default value as an empty array
  },

  // Creation date field (automatically set to the current date and time)
  create_date: {
    type: Date,
    default: Date.now,
  },
});

export default CreateCourses;
