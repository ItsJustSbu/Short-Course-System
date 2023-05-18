import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define the AuthenticationSchema
const AuthenticationSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
    email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
    create_date : { type: Date, default: Date.now }
});

export default AuthenticationSchema;