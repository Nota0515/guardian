const redisClient = require('../config/redisClient');
const Chats = require('../models/Chats')

const chatMessage = async (req, res) => {
    const chatId = req.params.chatId;
    const userId = req.user._id.toString();
    if (!chatId || !userId ) {
        return res.status(404).json({ message: "chat not found" })
    };
    const chacheKey = `chat:${userId}:${chatId}`;

    try {

        //first check the redis layer
        const chached = await redisClient.get(chacheKey);
        if(chached) return res.status(200).json(chached) 


        //then go to the DB 
        const chat = await Chats.findById(chatId).lean();
        if(!chat || chat.user.toString() !== userId ){
            return res.status(404).json({meesage: "chat not found"});
        }


        //now will set it to chache layer
        await redisClient.set(
            chacheKey ,
            JSON.stringify(chat),
            {ex : 100} //expiry for second in chache layer
        )


        res.status(200).json(chat);

        
    } catch (error) {
        console.error("error", error.message)
        res.status(500).json("server error")
    }
};

module.exports = chatMessage;