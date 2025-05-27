const express = require('express');
const router = express.Router();
const handleChat = require('../controller/chatController')

//post /api/chat

router.post('/chat' , handleChat );

module.exports = router ; 