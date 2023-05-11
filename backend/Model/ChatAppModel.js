import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let ChatAppModel = new Schema({
    timestamp: {
        type: Date,
        default: Date.now
      },
    //   group: {
    //     id: {
    //       type: String,
    //       required: true
    //     },
    //     name: {
    //       type: String,
    //       required: true
    //     }
    //   },
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