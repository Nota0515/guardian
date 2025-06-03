const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    role : {type:String , require:true},
    content : {type:String , require: true},
    timeStamp : { type: Date , default:Date.now}
})


const chatSchemas = new mongoose.Schema({
    user : { type:mongoose.Schema.Types.ObjectId , ref: 'User' , require: true },
    title : {type: String , require: true},
    messages : [MessageSchema],
    updatedAt : {type: Date , default: Date.now}
});

chatSchemas.index({user: 1});

module.exports = mongoose.model('Chats' , chatSchemas );  