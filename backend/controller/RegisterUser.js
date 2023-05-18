import mongoose from "mongoose";
import AuthenticationSchema from "../Model/AuthenticationModel.js";

const registerUserModel = mongoose.model('registerUser', AuthenticationSchema);

// Function to register a new user
function registerUser(req, res) {
  // Create a new instance of the registerUserModel with the request body
  let RegisterUser = new registerUserModel(req.body);

  // Save the new user to the database
  RegisterUser.save()
    .then((result) => res.json(result))
    .catch((e) => res.send(e));
}

export default registerUser;
