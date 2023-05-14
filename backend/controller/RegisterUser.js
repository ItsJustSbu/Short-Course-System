import mongoose from "mongoose";
import AuthenticationSchema from "../Model/AuthenticationModel.js";

const registerUserModel = mongoose.model('registerUser', AuthenticationSchema);

function registerUser(req,res){
    let RegisterUser = new registerUserModel(req.body);

    RegisterUser.save().then((result)=>res.json(result)).catch((e)=>res.send(e));
}

export default registerUser;