import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SendMessageSchema = new Schema({
    username: String,
    message: String,
    created_date: { type: Date, default: Date.now }
});

export default SendMessageSchema;

