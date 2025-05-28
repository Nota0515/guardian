const express = require('express');
const router = express.Router();
const { handleChat } = require('../controller/chatController')
const { protect } = require('../middleware/authmiddleware')



// /api/chat

router.post('/chat' ,  protect , handleChat );

module.exports = router ; 