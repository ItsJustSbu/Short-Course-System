import mongoose from "mongoose";

const Schema = mongoose.Schema;


const CoursesSchema = new Schema({

         course_name: {
            type: String,
            required: true,
          },

          course_author: {
            type: String,
            required: true,
          },

          image: String,

          classes: {
            type: [{
              class: String,
              image: String,
            }],
            default: []
          },

    create_date : { type: Date, default: Date.now }
});

export default CoursesSchema;