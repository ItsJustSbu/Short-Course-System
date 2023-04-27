import mongoose from "mongoose";
import CoursesSchema from "../Model/Courses.js";

const CourseModel = mongoose.model('Courses', CoursesSchema);

export function AddCourse(req,res){
    let addclass = new CourseModel(req.body);

    addclass.save().then((result)=>res.json(result)).catch((e)=>res.send(e));
}


export function UpdateClasses(req,res){

    CourseModel.updateOne({course_name: req.body.course_name}, {$set: {classes: req.body.classes}}).then((result)=>res.json(result)).catch((e)=>res.send(e));
}



