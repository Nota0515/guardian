const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const apikeyG = process.env.MODEL_API;
const systemPrompt = fs.readFileSync(path.join(__dirname, '../config/systemPrompt.txt'), 'utf8');

const generateChat = async (prompt) => {
    try {

        const allmessageForLLM = [
            {
                role: `system`,
                content: `${systemPrompt}`
}, ...prompt]
        const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                //models aur prompt
                model: 'openrouter/sonoma-sky-alpha',
                messages: allmessageForLLM,
                max_tokens: 700,
            },
            {
                //req ke sath req.header
                headers: {
                    "Authorization": `Bearer ${apikeyG}`,
                    "Content-Type": 'application/json',
                }
            }
        );

        return response.data.choices[0].message.content;
    } catch (error) {
        console.log(error);
        throw error;
        return "error occur in genration"
    }
}

module.exports = generateChat;