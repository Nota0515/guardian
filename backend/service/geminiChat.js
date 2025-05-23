const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAi = new GoogleGenerativeAI(process.env.GEMINI_API);

const generateChat = async (prompt) => {
    const model = genAi.getGenerativeModel({model:'gemini-2.0-flash'});
    const result = await model.generateContent(prompt);
    const response = await result.response ; 
    return response.text();
}

module.exports = generateChat ; 