const express = require('express');
const router = express.Router();
const Chats = require('../models/Chats');
const { protect } = require('../middleware/authmiddleware');

//toh basically hmlog isme ak route level middleware ke sath api end point bena rehe hai
//in which when the client creates it's first request then 2 calls hits honge 1st is /conversation for getting response and the 2nd one is the /chats api through which we will store this info into database
// via the request we will just grab the content and userID after authrisation , 
//then we will check if the content is really available here or not (i mean we can't store empty value r ? 😅)
//if yes then we will proceed otherwise we will send bad request info that hte content wasn't available 
//the procedure take place in two differnt parts 1st the creation of object 2nd the saving of that document into the backend database
//at first we use the Chats schema to create a schema of userid  and content (we grap from client req both) 
//for title we will use the starting 15 letter words for now (leter we will use sumurixer) of the content i/e the message first itself 


//1st we creat an object of chat schema then use .save() method to save the document into the database 
//after saving we return the title , message from the database along with the userID of the client 
//note : .save validate the new insertion / updation into the document

router.post('/chats', protect, async (req, res) => {
    const userID = req.user._id;
    const { content } = req.body;
    if (!content || !content.trim()) {
        res.status(404).json({ error: "message content is require" })
    };

    try {
        const snippet = content.length > 15 ? content.slice(0, 15) + "..." : content;
        const newChat = new Chats({
            title: snippet,
            user: userID,
            messages: [{ role: "user", content }]
        });

        await newChat.save();

        return res.status(200).json({
            _id: newChat._id,
            title: newChat.title,
            messages: newChat.messages,
            updatedAt: newChat.updatedAt
        });
    } catch (error) {
        res.status(500).json({ error: `cannot create cause ${error}` })
    }
});


router.get('/chats', protect, async (req, res) => {
    const userID = req.user._id;
    try {
        const chatSummary = await Chats.find(
            { user: userID },
            {
                title: 1,
                updatedAt: 1
            }
        ).sort({ updatedAt: -1 }); //this will sort them for most recent first
        return res.status(200).json({ chatSummary });
    } catch (error) {
        res.status(500).json({ error: 'error fetching the chat details' })
    }

});


router.get('/chats/:chatId', protect, async (req, res) => {
    try {
        const chat = await Chats.findById(req.params.chatId);
        if (!chat || !chat.user._id.equals(req.user._id)) {
            return res.status(404).json({ error: 'chat not found' })
        }
        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json({error : "Cannot fetch full chat"})
    }
});


module.exports = router;