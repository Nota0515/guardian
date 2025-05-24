const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const apikeyG = process.env.GEMINI_API
const genAi = new GoogleGenerativeAI(apikeyG);

const generateChat = async (prompt) => {
    try {
        console.log(prompt)
        const model = genAi.getGenerativeModel({ model: 'gemini-2.5-pro-preview-05-06' });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        if(error.status === 429){
            throw new Error ("Quata exceeed . wait and try later.")
        }
        throw error ;   
    }
}

module.exports = generateChat;