const generateChat = require('../service/geminiChat')

const handleChat = async(req , res) => {
    const {messages} = req.body ;
    try {
        const response = await generateChat(messages) ; 
        res.status(200).json({ response })
    } catch (error) {
        res.status(500).json({ error : "failed in the controller ig"})
    } 
}; 

module.exports = {handleChat} ;