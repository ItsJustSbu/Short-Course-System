import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define the CoursesSchema
const CoursesSchema = new Schema({
  // Course name field
  course_name: {
    type: String,
    required: true,
  },
  
  // Course author field
  course_author: {
    type: String,
    required: true,
  },
 
  // Image field (optional)
  image: String,

  // Classes field (array of objects)
  classes: {
    type: [{
      class: String,  // Class name
      image: String,  // Class image (optional)
    }],
    default: []  // Default value as an empty array
  },

  // Creation date field (automatically set to the current date and time)
  create_date: { 
    type: Date,
    default: Date.now
  }
});

export default CoursesSchema;
