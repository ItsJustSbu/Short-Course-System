import mongoose from "mongoose";
import AuthenticationSchema from "../Model/AuthenticationModel.js";

const UserModel = mongoose.model('registerUser', AuthenticationSchema);

// Function to retrieve a user based on email and password
function RetrieveUser(req, res) {
  // Retrieve the email and password from the request body
  const email = req.body.email;
  const password = req.body.password;
  
  // Find a user with the matching email and password in the UserModel
  UserModel.findOne({ 'email': email, 'password': password })
    .then((result) => {
      res.json(result);
    })
    .catch((e) => res.send(e));
}

export default RetrieveUser;
