import mongoose from "mongoose";

const Schema = mongoose.Schema;


const AuthenticationSchema = new Schema({
    name : String,
    email : String,
    password : String,
    create_date : { type: Date, default: Date.now }
});

export default AuthenticationSchema;