import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//This is a chat schema for the chat app
let ChatAppModel = new Schema({
    timestamp: {
        type: Date, 
        default: Date.now
      },
      
      //this is the group that the message is being sent to
      group: {
        id: {
          type: String,
          required: true
        },
        name: {
          type: String,
          required: true
        }
      },

    //this is the sender of the message as well as the message
      sender: {
        id: {
          type: String,
          required: true
        },
        name: {
          type: String,
          required: true
        }
      },
      message: {
        type: String,
        required: true
      }
});

export default ChatAppModel;