import mongoose from "mongoose";
import CreateCourses from "../Model/CreateCourseModel.js";

const createCourse = mongoose.model("createCourse", CreateCourses);

function CreateCourseController(req, res) {
    let CreateCourse = new createCourse(req.body);

    CreateCourse.save().then((result) => res.json(result)).catch((e) => res.send(e));
}

export default CreateCourseController;