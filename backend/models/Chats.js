const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    role : { type:String , required:true},
    content : {type:String , required: true},
    timeStamp : { type: Date , default:Date.now}
})


const chatSchema = new mongoose.Schema({
    user : { type:mongoose.Schema.Types.ObjectId , ref: 'User' , required: true },
    title : {type: String , required: true, default: "new problem"},
    messages : [MessageSchema],
    updatedAt : {type: Date , default: Date.now}
});

chatSchema.index({user: 1});

module.exports = mongoose.model('Chats' , chatSchema );  