
const SendMessageSchema  = require("../Model/SendMessageModel");
const mongoose = require('mongoose');

const sendMessage = mongoose.model('sendMessage', SendMessageSchema);

function addNewMessage(req, res){
    let newMessage = new sendMessage(req.body);

    newMessage.save().then((result)=>res.json(result)).catch((e)=>res.send(e));
}

