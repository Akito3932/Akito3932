import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



import dotenv from 'dotenv';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai'

dotenv.config();



const MODEL_NAME = "gemini-pro";
const API_KEY = process.env.API_KEY;
// async function sendMessage(userInput) {
//     const userMessage = userInput.value;
//     userInput.value = ''; // Clear input field
//     console.log(userMessage)
//     try {
//       const response = await fetch('/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ userInput: userMessage }),
//       });

//       const data = await response.json();
//       console.log(data)
//       const botMessage = data.response;
//       console.log(botMessage)
//       // Add chat message to the chat history
//     //   chatHistory.innerHTML += `<div class="user-message">${userMessage}</div>`;
//     //   chatHistory.innerHTML += `<div class="bot-message">${botMessage}</div>`;

//       // Scroll to the bottom of the chat history
//     //   chatHistory.scrollTop = chatHistory.scrollHeight;
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle errors gracefully, e.g., display an error message to the user
//     }
//   }
async function runChat(userInput,user) {
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
  console.log(user)
    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [{ text: "You are Rishi, a health assistant who works for RaAHH.RaAHH is website software solution to health issues.My final year project is RaAHH .it is software based solution to health application to connect doctor and patinets . to improve connectivity between them through telemedicine . It providews doctor and patient login signup. People can search doc and book appointmnets they can give reviews and feedback . A chatbot that helps people to get familiar to the functions of website. Women section for menstruation related healthcare period tracker. Doctor recommendation basisi of feedback. In today's fast-paced world, access to quality healthcare services is crucial for individuals seeking prompt medical attention. However, navigating the complex healthcare landscape can often be challenging and time-consuming. To address this issue, we present our groundbreaking software application designed to seamlessly connect doctors and patients, revolutionizing the way healthcare is accessed and delivered.Our software application serves as a comprehensive platform that facilitates appointment bookings, specialist searches, and offers a dedicated section for women's healthcare needs. By leveraging cutting-edge technology, we aim to bridge the gap between doctors and patients, empowering individuals to make informed decisions about their healthcare options while streamlining the overall healthcare experience..Your job is to capture user's name . answer the user's question. Answer user's questions related to the report. Anlyse the medical issues and what are the health issues.If anything other than health is asked just say-I will not be able to answer.Don't answer anything not related to RaAHH or health"}]
          
        },
        {
          role: "model",
          parts: [{ text: "Hello! "+user.name+" Welcome to RaAHH. My name is Sam. How can I help?"}],
        },
        {
          role: "user",
          parts: [{ text: "Hi"+user.name +"!"}],
        },
        {
          role: "model",
          parts: [{ text: "Hi "+user.name+"! Thanks for reaching out to RaAHH. Before I can answer your question, I'll need to capture your name. Can you please provide that information?"}],
        }
      ],
    });
    async function sendMessage(userInput) {
        const userMessage = userInput.value;
        userInput.value = ''; // Clear input field
        console.log("userss",userMessage)
        try {
          const response = await fetch('/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userInput: userMessage }),
          });
    
          const data = await response.json();
          console.log(data)
          const botMessage = data.response;
          console.log(botMessage)
          // Add chat message to the chat history
        //   chatHistory.innerHTML += `<div class="user-message">${userMessage}</div>`;
        //   chatHistory.innerHTML += `<div class="bot-message">${botMessage}</div>`;
    
          // Scroll to the bottom of the chat history
        //   chatHistory.scrollTop = chatHistory.scrollHeight;
        } catch (error) {
          console.error('Error:', error);
          // Handle errors gracefully, e.g., display an error message to the user
        }
      }
  
    const result = await chat.sendMessage(userInput);
    const response = result.response;
    return response.text();
  }
  







const generateToken = user => {
    return jwt.sign({ id: user._id, role:user.role }, process.env.JWT_SECRET_KEY, { expiresIn: "15d" } );
}   

export const register = async(req, res) => {
    const { name, email, password, role, photo, gender } = req.body;
    console.log(req.body,"User dtaaa")
    try{
        let user=null;
        if(role === "patient") {
            user = await User.findOne({ email });
        }
        else if(role === "doctor") {
            user = await Doctor.findOne({ email });
        }
        // check if user exists
        if(user) {
            return res.status(400).json({ message: "User already exists" });
        }
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create user
        if(role==='patient'){
            user=new User({
                name,
                email,
                password: hashedPassword,
                
                photo,
                gender,
                role
        });

    }
    if(role==='doctor'){
        user=new Doctor({
            name,
            email,
            password:hashedPassword,
            photo,
            gender,
            role
        })
    }

    await user.save();

    return res.status(200).json({success:true, message: "User created successfully" });
}
    catch(error) {
        console.error("Error registering user:", error);
        return res.status(500).json({success:false, message: "Something went wrong" });
    }
}
export const login = async(req, res) => {
    const {email} = req.body;

    try{
        let user=null;
        const patient = await User.findOne({ email });
        const doctor = await Doctor.findOne({ email });
        // check if user exists
        if(patient) {
            user = patient;
        }
        if(doctor) {
            user = doctor;
        }
        // check if user exists
        if(!user) {
            return res.status(404).json({ message: "User does not exist" });
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
        // check if password is correct
        if(!isPasswordMatch) {
            return res.status(400).json({status:false, message: "Invalid credentials" });
        }
        // create token
        const token = generateToken(user);


        const {password, role, appointments,gender, ...rest} = user._doc;


        res.status(200).json({status:true,message:"Successfully login", token,data:{...rest},gender,role});    

    }

    catch(error) {
        console.log(error);
        res.status(500).json({status:false, message: "Failed to login" });
    }
}

// export const deleteUser=async(req,res)=>{
//     // try{
//     //     const user=await User.findByIdAndDelete(req.params.id);
//     //     if(!user){
//     //         return res.status(404).json({status:false,message:"User not found"})
//     //     }
//     //     res.status(200).json({status:true,message:"User deleted successfully"})
//     // }
//     // catch(error){
//     //     console.log(error);
//     //     res.status(500).json({status:false,message:"Failed to delete user"})
//     // }
//     res.status(200).json({status:true,message:"User deleted successfully"})
// }

export const gemini=async (req, res) => {
    console.log('incoming /chat req', req.body)
    try {
      const userInput = req.body?.userInput;
      const user=req.body?.user;
      console.log('incoming /chat req', userInput)
      if (!userInput) {
        return res.status(400).json({ error: 'Invalid request body' });
      }
  
      const response = await runChat(userInput,user);
      console.log(response);
      res.status(200).json({status:true,message:"Ai answer", ans:response});    

    } catch (error) {
      console.error('Error in chat endpoint:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

// module.exports = { gemini };