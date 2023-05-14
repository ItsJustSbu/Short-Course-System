import mongoose from "mongoose";
import ChatAppModel from "../Model/ChatAppModel.js";

function RetrieveChats(req, res) {
    let retrieveChats = mongoose.model("updatechats", ChatAppModel);
    // const group = req.body.group;
  retrieveChats
    .find({ "group": {name:req.body.group}})
    .then((result) => res.json(result))
    .catch((e) => res.send(e));
}

export default RetrieveChats