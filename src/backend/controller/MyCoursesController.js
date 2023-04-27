import mongoose from "mongoose";
import MyCoursesSchema from "../Model/MyCourses.js";

const mycoursesModel = mongoose.model('MyCourses', MyCoursesSchema);

export function AddMyCourses(req,res){
    let addcourse = new mycoursesModel(req.body);

    addcourse.save().then((result)=>res.json(result)).catch((e)=>res.send(e));
}

export function UpdateMyCourses(req,res){

    mycoursesModel.updateOne({email: req.body.email}, {$set: {mycourses: req.body.mycourses}}).then((result)=>res.json(result)).catch((e)=>res.send(e));
}

