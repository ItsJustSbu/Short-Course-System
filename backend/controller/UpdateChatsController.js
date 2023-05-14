import mongoose from "mongoose";
import ChatAppModel from "../Model/ChatAppModel.js";

async function updateChats(req, res) {
  const updateChats = mongoose.model("updateChats", ChatAppModel);
  const { group, message, sender, id } = req.body;

  try {
    const result = await updateChats.findOneAndUpdate(
      { "group": {name:group}},
      { $push: { sender: { id: id, message: message, name: sender } } },// Return updated document
    );
    const items = await updateChats.find({"group":{name:group}});
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default updateChats;