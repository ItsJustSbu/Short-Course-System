import mongoose from "mongoose";
import CoursesSchema from "../Model/Courses.js";

const CourseModel = mongoose.model('Courses', CoursesSchema);

// Function to create a new course
export function CreateCourse(req, res) {
  // Create a new instance of the CourseModel with the request body
  let addclass = new CourseModel(req.body);

  // Save the new course to the database
  addclass.save()
    .then((result) => res.json(result))
    .catch((e) => res.send(e));
}

// Function to update the classes of a course
export function UpdateClasses(req, res) {
  // Find the course with the given course_name and update its classes field with the request body
  CourseModel.updateOne({ course_name: req.body.course_name }, { $set: { classes: req.body.classes } })
    .then((result) => res.json(result))
    .catch((e) => res.send(e));
}

// Function to get the classes of a course
export function GetClasses(req, res) {
  // Find the course with the given course_name and return its classes
  CourseModel.find({ course_name: req.params.course_name })
    .then((result) => res.json(result))
    .catch((e) => res.send(e));
}
