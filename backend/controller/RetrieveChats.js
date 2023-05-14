import mongoose from "mongoose";
import ChatAppModel from "../Model/ChatAppModel";

function RetrieveChats(req, res) {
    let retrieveChats = mongoose.model("retrieveChats", ChatAppModel);
    const group = req.body.group;
  retrieveChats
    .findOne({'group': group})
    .then((result) => res.json(result))
    .catch((e) => res.send(e));
}