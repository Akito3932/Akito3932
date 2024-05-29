import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai'
import authRoute from './Routes/auth.js';

import userRoute from './Routes/user.js';
import doctorRoute from './Routes/doctor.js';
import reviewRoute from './Routes/review.js';
import bookingRoute from './Routes/booking.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// const dotenv = require('dotenv').config()

// const app = express();
// const port = process.env.PORT || 3000;
app.use(express.json());
const MODEL_NAME = "gemini-pro";
const API_KEY = process.env.API_KEY;
const corsOptions = {
    origin: true
}

async function runChat(userInput) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 1000,
    };
  
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      // ... other safety settings
    ];
  
    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [{ text: "You are Sam, a health assistant who works for RaAHH.RaAHH is website software solution to health issues.My final year project is RaAHH .it is software based solution to health application to connect doctor and patinets . to improve connectivity between them through telemedicine . It providews doctor and patient login signup. People can search doc and book appointmnets they can give reviews and feedback . A chatbot that helps people to get familiar to the functions of website. Women section for menstruation related healthcare period tracker. Doctor recommendation basisi of feedback. In today's fast-paced world, access to quality healthcare services is crucial for individuals seeking prompt medical attention. However, navigating the complex healthcare landscape can often be challenging and time-consuming. To address this issue, we present our groundbreaking software application designed to seamlessly connect doctors and patients, revolutionizing the way healthcare is accessed and delivered.Our software application serves as a comprehensive platform that facilitates appointment bookings, specialist searches, and offers a dedicated section for women's healthcare needs. By leveraging cutting-edge technology, we aim to bridge the gap between doctors and patients, empowering individuals to make informed decisions about their healthcare options while streamlining the overall healthcare experience..Your job is to capture user's name . answer the user's question. Answer user's questions related to the report. Anlyse the medical issues and what are the health issues."}]
          
        },
        {
          role: "model",
          parts: [{ text: "Hello! Welcome to RaAHH. My name is Sam. What's your name?"}],
        },
        {
          role: "user",
          parts: [{ text: "Hi"}],
        },
        {
          role: "model",
          parts: [{ text: "Hi there! Thanks for reaching out to RaAHH. Before I can answer your question, I'll need to capture your name. Can you please provide that information?"}],
        },
      ],
    });
  
    const result = await chat.sendMessage(userInput);
    const response = result.response;
    return response.text();
  }
  


app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

// app.post('/chat', async (req, res) => {
//     console.log('incoming /chat req', req.body)
//     try {
//       const userInput = req.body?.userInput;
//       console.log('incoming /chat req', userInput)
//       if (!userInput) {
//         return res.status(400).json({ error: 'Invalid request body' });
//       }
  
//       const response = await runChat(userInput);
//       res.json({ response });
//     } catch (error) {
//       console.error('Error in chat endpoint:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });


mongoose.set('strictQuery', false);
const connectDB= async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL
            // ,{
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        // }
        );
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error)
        console.log("MongoDB connection failed");
        
    }
};
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute); 
app.use('/api/v1/users', userRoute);
app.use('/api/v1/doctors', doctorRoute);
app.use('/api/v1/reviews', reviewRoute);
app.use('/api/v1/bookings', bookingRoute);


app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
}  );