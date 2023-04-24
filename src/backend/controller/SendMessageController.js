import mongoose from 'mongoose';
import ChatAppModel from '../Model/ChatAppModel.js';

const sendMessage = mongoose.model('sendMessage', ChatAppModel);

function SendMessage(req, res){
    let newMessage = new sendMessage(req.body);

    newMessage.save().then((result)=>res.json(result)).catch((e)=>res.send(e));
}

export default SendMessage;