import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define the MyCoursesSchema
const MyCoursesSchema = new Schema({
  // User email field
  email: {
    type: String,
    required: true,
    unique: true,
  },
  
  // User's enrolled courses field (array of objects)
  mycourses: {
    type: [{
      course: String,     // Course name
      progress: Number,   // Course progress (e.g., percentage)
      image: String       // Course image
    }],
    default: []           // Default value as an empty array
  },

  // Creation date field (automatically set to the current date and time)
  create_date: { 
    type: Date,
    default: Date.now
  }
});

export default MyCoursesSchema;
