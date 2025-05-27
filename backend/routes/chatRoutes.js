const  generateChat  = require('../service/geminiChat');
const express = require('express');
const router = express.Router();

//post /api/chat

router.post('/chat' , async(req , res)=>{
    const { prompt } = req.body;
    try {
        const reply = await generateChat(prompt);
        res.json({response : reply});
    } catch (error) {
        res.status(500).json({message : "genration error or " , error})
        console.log(error);
    }
});

module.exports = router ; 