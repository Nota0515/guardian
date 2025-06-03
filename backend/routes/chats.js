const express = require('express');
const router = express.Router();
const Chats = require('../models/Chats');
const protect = require('../middleware/authmiddleware');

router.post('/api/chats' , protect , async (req , res )=>{
        const userID = req.user._id;
        const {content} = req.body ; 
        if (!content || !content.trim()){
            res.status(404).json({error : "message content is require"})
        };

        try {
            const snippet = content.length > 15 ? content.slice(0,15) + "..." : content;
            const newChat = new Chats({
                title : snippet , 
                user : userID , 
                messages : [{role:"user" , content}]
            });

            newChat.save();

            return res.status(201).json({
                _id: newChat._id,
                title : newChat.title , 
                messages: newChat.messages,
                updatedAt : newChat.updatedAt
            });
        } catch (error) {
            res.status(500).json({error : `cannot create cause ${error}` })
        }
});
