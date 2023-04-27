import mongoose from "mongoose";
import CoursesSchema from "../Model/Courses.js";

const CourseModel = mongoose.model('Courses', CoursesSchema);

export function CreateCourse(req,res){  // from studio
    let addclass = new CourseModel(req.body);

    addclass.save().then((result)=>res.json(result)).catch((e)=>res.send(e));
}


export function UpdateClasses(req,res){

    CourseModel.updateOne({course_name: req.body.course_name}, {$set: {classes: req.body.classes}}).then((result)=>res.json(result)).catch((e)=>res.send(e));
}

export function GetClasses(req,res){ 

    CourseModel.find({course_name: req.params.course_name}).then((result)=>res.json(result)).catch((e)=>res.send(e));
}


