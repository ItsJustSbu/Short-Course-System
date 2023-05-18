import mongoose from "mongoose";
import MyCoursesSchema from "../Model/MyCourses.js";

const mycoursesModel = mongoose.model('MyCourses', MyCoursesSchema);

// Function to add a new course to a user's enrolled courses
export function AddMyCourses(req, res) {
  // Create a new instance of the mycoursesModel with the request body
  let addcourse = new mycoursesModel(req.body);

  // Save the new course to the database
  addcourse.save()
    .then((result) => res.json(result))
    .catch((e) => res.send(e));
}

// Function to update a user's enrolled courses
export function UpdateMyCourses(req, res) {
  // Find the user with the given email and update their enrolled courses with the request body
  mycoursesModel.updateOne({ email: req.body.email }, { $set: { mycourses: req.body.mycourses } })
    .then((result) => res.json(result))
    .catch((e) => res.send(e));
}

// Function to get a user's enrolled courses
export function GetMyCourses(req, res) {
  // Find the user with the given email and return their enrolled courses
  mycoursesModel.find({ email: req.params.email })
    .then((result) => res.json(result))
    .catch((e) => res.send(e));
}
