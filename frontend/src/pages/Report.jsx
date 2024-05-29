// import React from 'react'
// import { useState } from 'react'
// import pdfToText from 'react-pdftotext'

// // function extractText(event) {
// //     const [pdfText, setPdfText] = useState("")
// //     // let txt = ""
// //     const file = event.target.files[0]
// //     pdfToText(file)
// //         .then(text => {
// //             // txt=text
// //             setPdfText(text)
// //             console.log(pdfText)
// //         }
// //         )
// //         .catch(error => console.error("Failed to extract text from pdf"))
    
// // }

// const Report=()=> {
//     const [pdfText, setPdfText] = useState('');

//     const extractText = (event) => {
//         const file = event.target.files[0];
//         pdfToText(file)
//             .then(text => {
//                 setPdfText(text); // Save the extracted text in pdfText state
//                 // console.log(text);
//             })
//             .catch(error => console.error("Failed to extract text from pdf"));
//     }
//     // console.log(pdfText)
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <input type="file" accept="application/pdf" onChange={extractText}/>
//             </header>
//         </div>
//     );
// }

// export default Report



import React, { useState, useContext,useRef ,useEffect} from 'react';
import Loader from './loader.gif'; // Assuming you have loader.gif in your project directory
import { toast } from 'react-toastify';
import { BASE_URL } from '../config';
import '../aiCSS.css'
import DotLoader from 'react-spinners/DotLoader.js'
import pdfToText from 'react-pdftotext'
import {authContext} from '../context/AuthContext.jsx'
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
// import { BookLoader } from "react-awesome-loaders";
// import { set } from 'mongoose';

const Report = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatHistoryRef=useRef(null)
  const [pdfText, setPdfText] = useState('');

const extractText = (e) => {
    setIsLoading(true); // Show loader
    const file = e.target.files[0];
    pdfToText(file)
        .then(text => {
            // let txt=toString(text).slice(0,10000)
            setPdfText("Analyse the following health report and give suggestions."+text); // Save the extracted text in pdfText state
            console.log(pdfText);
           toast.success("Text extracted successfully from pdf")
           setIsLoading(false);
        })
        .catch(err => toast.error("Failed to extract text from pdf"));
        setIsLoading(false);
}




const sendMessage = async () => {
    setIsLoading(true); // Show loader

    try {
        
                    const res= await fetch(`${BASE_URL}/auth/chat`,{
                      method:'post',
                      headers:{
                        "Content-Type":"application/json"
                      },
                      body:JSON.stringify({user,userInput:pdfText})
                    })
                    const data= await res.json()
                    if(!res.ok){
                      throw new Error(data?.message)
                    }
                    console.log(data?.message)
                    const botMessage = data?.ans;
                    setIsLoading(false)
                    // toast.success(data?.ans)
      // Update chat history with user message and bot response
      setChatHistory(prevChatHistory => [
        ...prevChatHistory,
        { type: 'user', message: userInput },
        { type: 'Rishi', message: botMessage }
      ]);
      setUserInput(''); 
      
     // Clear input field

    } catch (error) {
      console.error('Error:', error);
      // Handle errors gracefully
    } finally {
      setIsLoading(false); // Hide loader
    }
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };
  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);
const {user,gender}=useContext(authContext);
  return (
    <div className="flex justify-center items-center bot-container p-0">
    <div className="h-1/3 w-2/3 px-2 mt-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <h1 className="text-2xl ai-h1 font-bold mb-4 text-center">RaAHH Health Analysis</h1>
      <div id="chat-history" className="mb-4 overflow-auto">
        {chatHistory.map((chat, index) => (

          <div className=""><div key={index} className={`message ${chat.type === 'user' ? 'user-message' : 'bot-message'}` }>
            
            <p className="flex justify-end">{(chat.type === 'user' && gender==='male') && (<><FcBusinessman size={25} /></>)}</p>
            <p className="flex justify-end">{(chat.type === 'user' && gender==='female') && (<><FcBusinesswoman size={25} /></>)}</p>
            <p className="flex justify-start">{(chat.type === 'Rishi') && (<h1 className="ai-h1"><b>Rishi</b> 👨‍⚕️</h1>)}</p>
            {chat.message.split('*').map((line, idx) => (
                    <div key={idx}>
                        {idx > 0 && <br />} {/* Add line break if not the first line */}
                        {line}
                    </div>
                ))}
          </div>
          </div>
          
        ))}

      </div>
      {/* {isLoading && (
        <div id="loader" className="text-center align-center p-20">
          
          <DotLoader color="#24bb9c" size={30}/>
        </div>
       
      )} 
      */}
      <div>
        <form id="chat-form" onSubmit={handleSubmit} className="ai-form flex mb-4">
        <input 
          type="file" 
          value={userInput} 
          onChange={(e)=>extractText(e)} 
          placeholder="Enter your message" 
          className="flex-grow ai-input border p-2 mr-2" 
        />{isLoading && (
          // <div id="loader" className="text-center align-center p-20">
          //   {/* <img src={Loader} width="50px" alt="Loading..." /> */}
            <DotLoader color="#24bb9c" size={30}/>
          // </div>
        //   <BookLoader
        //   background={"linear-gradient(135deg, #6066FA, #4645F6)"}
        //   desktopSize={"100px"}
        //   mobileSize={"80px"}
        //   textColor={"#4645F6"}
        // />
         
        )}
        {!isLoading && (
        
         
          <button type="submit" className="ai-button bg-blue-500 text-white px-4 py-2 rounded">Send</button>
     
       
      )}
        
      </form>
      </div>
      
    </div>
    </div>
  );
};



export default Report;