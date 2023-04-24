import mongoose from "mongoose";
import AuthenticationSchema from "../Model/AuthenticationModel.js";

const UserModel = mongoose.model('registerUser', AuthenticationSchema);

function RetrieveUser(req,res){
    const email = req.body.email;
    const password = req.body.password;
    
    UserModel.findOne({'email':email, 'password':password}).then((result)=>{
        res.json(result);
    }
    ).catch((e)=>res.send(e));
    
}

export default RetrieveUser;