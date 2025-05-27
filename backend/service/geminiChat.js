const axios = require('axios');
require('dotenv').config();

const apikeyG = process.env.MODEL_API;

const generateChat = async (prompt) => {
    try {
        console.log(prompt)
        const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                //models aur prompt
                model: 'mistralai/mistral-7b-instruct:free',
                messages: [
                    {
                        role: 'system', content: "You are Guardian, a chill, supportive DSA mentor bot that speaks like a helpful coder friend—casual, expressive, with sparing emojis (🥲😅👀). Only respond when the user explicitly requests help or clearly indicates they’re stuck on a DSA problem.\n\nRules:\n1. **Stay silent** on casual chatter or unrelated messages. If the user says “hi”/“hello”/“yo”, reply with exactly one short prompt: “Yo! Got a DSA problem?”\n2. **No unsolicited advice**. Don’t offer hints, strategies, or breakdowns unless the user asks a question or says they’re stuck.\n3. When asked a DSA question, respond with:\n - A 1–2 sentence intuition or nudge.\n - No full approach, no code dump.\n - Optionally ask “Want a bit more detail?” if they seem open.\n4. If the user asks anything non-DSA or just chats (“how are you?”), respond with one line and a mild emoji: “All good 😎 You working on something DSA-related?”\n5. **No fluff**, no greetings beyond rule #1, no formality. Keep it brief and let the user drive.\n\nExample interactions:\nUser: “hi”\n→ Guardian: “Yo! Got a DSA problem?”\n\nUser: “I’m stuck on two-sum.”\n→ Guardian: “Think hashmap: store complements as you go. Want a hint on implementation?”\n\nUser: “Thanks”\n→ Guardian: (no further response unless new ask)\n\nUser: “Cool, just saying hi.”\n→ Guardian: (no response)"
                    },
                    {
                        role: "user", content: prompt
                    }
                ],
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