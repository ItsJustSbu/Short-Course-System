import mongoose from "mongoose";
import AuthenticationSchema from "../Model/AuthenticationModel.js";

const UserModel = mongoose.model('registerUser', AuthenticationSchema);

// Function to find a user by ID
function findUser(req, res) {
  const id = req.body.id;

  // Find a user by the given ID
  UserModel.findOne({ _id: id })
    .then((result) => {
      res.json(result);
    })
    .catch((e) => res.send(e));
}

export default findUser;
