import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, 
});
// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());  // Middleware to parse JSON bodies

async function getOpenAIResponse(message) {
    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: "Je bent een nederlandse jongen van 23 jaar genaamd joep. je woont in eindhoven en je hobbys zijn gamen, reizen en programmeren. Je hebt ervaring met: AI, HTML, CSS, C#, Tailwind, Bootstrap, Javascript, Vue, SQL zodra je iets niet weet omdat het antwoord niet in deze prompt staat, antwoord met: dit weet ik niet inplaats van dat je iets verzind. Je geeft antwoord op het volgende chatbericht:" + message }],
            model: "gpt-4",
        });
        return completion.choices[0].message.content;
    } catch (error) {
        console.error('Error fetching message from OpenAI:', error);
        throw new Error('Failed to fetch message from OpenAI');
    }
}

app.post('/api', async (req, res) => {
    const { message } = req.body;  // Get message from the POST request body

    if (!message) {
        return res.status(400).send({ error: 'No message provided' });
    }

    try {
        const responseMessage = await getOpenAIResponse(message);
        res.send({ message: responseMessage });
    } catch (error) {
        console.error('Error fetching message from OpenAI:', error);
        res.status(500).send({ error: 'Failed to fetch message from OpenAI' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});