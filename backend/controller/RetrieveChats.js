import mongoose from "mongoose";
import ChatAppModel from "../Model/ChatAppModel.js";

// Function to retrieve chats for a specific group
function RetrieveChats(req, res) {
  // Create a new instance of the ChatAppModel with the collection name "updatechats"
  let retrieveChats = mongoose.model("updatechats", ChatAppModel);

  // Retrieve chats from the database for the specified group
  retrieveChats
    .find({ "group": { name: req.body.group } })
    .then((result) => res.json(result))
    .catch((e) => res.send(e));
}

export default RetrieveChats;
