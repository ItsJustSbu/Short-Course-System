import mongoose from "mongoose";
import CreateCourses from "../Model/CreateCourseModel.js";

const createCourse = mongoose.model("createCourse", CreateCourses);

// Controller function to create a new course
function CreateCourseController(req, res) {
  // Create a new instance of the createCourse model with the request body
  let CreateCourse = new createCourse(req.body);

  // Save the new course to the database
  CreateCourse.save()
    .then((result) => res.json(result))
    .catch((e) => res.send(e));
}

export default CreateCourseController;
