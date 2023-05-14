import mongoose from "mongoose";
import ChatAppModel from "../Model/ChatAppModel";

function updateChats(req, res) {
    let updateChats = mongoose.model("updateChats", ChatAppModel);
    const group = req.body.group;
    const message = req.body.message;
    const sender = req.body.sender;
    const id = req.body.id;

    updateChats.findOneAndUpdate({'group': group}, {$push: {'sender': {'id':id,'message': message, 'name': sender}}})
    .then((result) => res.json(result)).catch((e) => res.send(e));
}

export default updateChats;