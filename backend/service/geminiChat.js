const axios = require('axios');
require('dotenv').config();

const apikeyG = process.env.MODEL_API ;

const generateChat = async (prompt) => {
    try {
        console.log(prompt)
        const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                //models aur prompt
                model: 'mistralai/mistral-7b-instruct:free',
                message: [{role:"" , content: prompt}],
            } , 
            {
                //req ke sath req.header
                headers : {
                    "Authorization" : `Bearer ${apikeyG}`,
                    "Content-Type" : 'application/json',
                } 
            }
        );

        return response.data.choices[0].message.content;
    } catch (error) {
        console.log(error);
        throw error ;
        return "error occur in genration"
    }
}

module.exports = generateChat;