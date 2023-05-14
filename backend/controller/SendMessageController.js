import mongoose from 'mongoose';
import ChatAppModel from '../Model/ChatAppModel.js';

//This is a chat schema for the chat app
const sendMessage = mongoose.model('sendMessage', ChatAppModel);

//This is the function that sends the message to the database
function SendMessage(req, res){
    //creates a new message object from the request body
    let newMessage = new sendMessage(req.body);
    //saves the message to the database and returns the result as a json object to the client
    newMessage.save().then((result)=>res.json(result)).catch((e)=>res.send(e));
}

export default SendMessage;