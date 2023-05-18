import mongoose from "mongoose";
import ChatAppModel from "../Model/ChatAppModel.js";

// Function to update chats in the database
async function updateChats(req, res) {
  // Retrieve the ChatAppModel
  const updateChats = mongoose.model("updateChats", ChatAppModel);
  // Retrieve the necessary data from the request body
  const { group, message, sender, id } = req.body;

  try {
    // Find the document with the matching group and update the sender array
    const result = await updateChats.findOneAndUpdate(
      { "group": { name: group } },
      { $push: { sender: { id: id, message: message, name: sender } } },
      { new: true } // Return the updated document
    );
    // Retrieve all the items for the given group
    const items = await updateChats.find({ "group": { name: group } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default updateChats;
