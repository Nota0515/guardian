const generateChat = require('../service/geminiChat')

const handleChat = async(req , res) => {
    const {prompt} = req.body ;
    try {
        const response = await generateChat(prompt) ; 
        res.status(200).json({ message : response})
    } catch (error) {
        res.status(500).json({ error : "failed in the controller ig"})
    } 
}; 

module.exports = {handleChat} ;