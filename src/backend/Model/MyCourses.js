import mongoose from "mongoose";

const Schema = mongoose.Schema;


const MyCoursesSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
      },
      mycourses: {
        type: [{
          course: String,
          progress: Number,
          image: String
        }],
        default: []
      },

    create_date : { type: Date, default: Date.now }
});

export default MyCoursesSchema;