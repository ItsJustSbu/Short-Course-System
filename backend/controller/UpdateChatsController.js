import mongoose from "mongoose";
import ChatAppModel from "../Model/ChatAppModel";

function updateChats(req, res) {
    let updateChats = mongoose.model("updateChats", ChatAppModel);
    const group = req.body.group;
    const message = req.body.message;
    const sender = req.body.sender;
    const id = req.body.id;

    // updates the chats collection with the new message and returns the result as a json object to the client
    updateChats.findOneAndUpdate({'group': group}, {$push: {'sender': {'id':id,'message': message, 'name': sender}}})
    .then((result) => res.json(result)).catch((e) => res.send(e));
}

export default updateChats;