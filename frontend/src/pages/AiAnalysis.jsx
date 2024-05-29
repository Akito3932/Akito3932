
// import React, { useState, useContext,useRef ,useEffect} from 'react';
// import Loader from './loader.gif'; // Assuming you have loader.gif in your project directory
// import { toast } from 'react-toastify';
// import { BASE_URL } from '../config';
// import '../aiCSS.css'
// import DotLoader from 'react-spinners/DotLoader.js'

// import {authContext} from '../context/AuthContext.jsx'
// import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";

// const AiAnalysis = () => {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [userInput, setUserInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const chatHistoryRef=useRef(null)
//   const sendMessage = async () => {
//     setIsLoading(true); // Show loader

//     try {
        
//                     const res= await fetch(`${BASE_URL}/auth/chat`,{
//                       method:'post',
//                       headers:{
//                         "Content-Type":"application/json"
//                       },
//                       body:JSON.stringify({user,userInput})
//                     })
//                     const data= await res.json()
//                     if(!res.ok){
//                       throw new Error(data?.message)
//                     }
//                     console.log(data?.message)
//                     const botMessage = data?.ans;
//                     setIsLoading(false)
//                     // toast.success(data?.ans)
//       // Update chat history with user message and bot response
//       setChatHistory(prevChatHistory => [
//         ...prevChatHistory,
//         { type: 'user', message: userInput },
//         { type: 'Rishi', message: botMessage }
//       ]);
//       setUserInput(''); 
      
//      // Clear input field

//     } catch (error) {
//       console.error('Error:', error);
//       // Handle errors gracefully
//     } finally {
//       setIsLoading(false); // Hide loader
//     }
//   };
  


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     sendMessage();
//   };
//   useEffect(() => {
//     if (chatHistoryRef.current) {
//       chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
//     }
//   }, [chatHistory]);
// const {user,gender}=useContext(authContext);
//   return (
//     <div className="flex justify-center items-center bot-container p-0">
//     <div className="h-1/3 w-2/3 px-2 mt-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
//       <h1 className="text-2xl ai-h1 font-bold mb-4 text-center">RaAHH Health Analysis</h1>
//       <div id="chat-history" className="mb-4 overflow-auto">
//         {chatHistory.map((chat, index) => (

//           <div className=""><div key={index} className={`message ${chat.type === 'user' ? 'user-message' : 'bot-message'}` }>
            
//             <p className="flex justify-end">{(chat.type === 'user' && gender==='male') && (<><FcBusinessman size={25} /></>)}</p>
//             <p className="flex justify-end">{(chat.type === 'user' && gender==='female') && (<><FcBusinesswoman size={25} /></>)}</p>
//             <p className="flex justify-start">{(chat.type === 'Rishi') && (<h1 className="ai-h1"><b>Rishi</b> 👨‍⚕️</h1>)}</p>
//             {chat.message.split('*').map((line, idx) => (
//                     <div key={idx}>
//                         {idx > 0 && <br />} {/* Add line break if not the first line */}
//                         {line}
//                     </div>
//                 ))}
//           </div>
//           </div>
          
//         ))}

//       </div>
//       {/* {isLoading && (
//         <div id="loader" className="text-center align-center p-20">
          
//           <DotLoader color="#24bb9c" size={30}/>
//         </div>
       
//       )} 
//       */}
//       <div>
//         <form id="chat-form" onSubmit={handleSubmit} className="ai-form flex mb-4">
//         <input 
//           type="text" 
//           value={userInput} 
//           onChange={(e) => setUserInput(e.target.value)} 
//           placeholder="Enter your message" 
//           className="flex-grow ai-input border p-2 mr-2" 
//         />{isLoading && (
//           // <div id="loader" className="text-center align-center p-20">
//           //   {/* <img src={Loader} width="50px" alt="Loading..." /> */}
//           //   <DotLoader color="#24bb9c" size={30}/>
//           // </div>
//           <DotLoader color="#24bb9c" size={30}/>
         
//         )}
//         {!isLoading && (
        
         
//           <button type="submit" className="ai-button bg-blue-500 text-white px-4 py-2 rounded">Send</button>
     
       
//       )}
        
//       </form>
//       </div>
      
//     </div>
//     </div>
//   );
// };



// export default AiAnalysis



// import React, { useState, useContext, useRef, useEffect } from "react";
// import { BASE_URL } from "../config";
// import "../aiCSS.css";
// import PerfectScrollbar from "react-perfect-scrollbar";
// import { authContext } from "../context/AuthContext.jsx";
// import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
// import DotLoader from 'react-spinners/DotLoader.js'
// const AiAnalysis = () => {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [userInput, setUserInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const chatHistoryRef = useRef(null);

//   useEffect(() => {
//     chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
//   }, [chatHistory]);

//   const sendMessage = async () => {
//     setIsLoading(true);

//     try {
//       const res = await fetch(`${BASE_URL}/auth/chat`, {
//         method: "post",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ user, userInput }),
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         throw new Error(data?.message);
//       }
//       console.log(data?.message);
//       const botMessage = data?.ans;
//       setIsLoading(false);
//       setChatHistory((prevChatHistory) => [
//         ...prevChatHistory,
//         { type: "user", message: userInput },
//         { type: "Rishi", message: botMessage },
//       ]);
//       setUserInput("");
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     sendMessage();
//   };

//   const { user, gender } = useContext(authContext);

//   return (
//     <section className="section">
//       <div className="chat">
//         <div className="chat-title">
//           <h1>RaAHH Health Analysis</h1>
//           <h2>Rishi</h2>
//           <figure className="avatar mr-2">
//             <img src="https://png.pngtree.com/png-vector/20231227/ourmid/pngtree-male-doctor-3d-icon-emoji-png-image_11384081.png" />
//           </figure>
//         </div>
//         <PerfectScrollbar>
//           <div
//             id="chat-history"
//             className="messages"
//             ref={chatHistoryRef}
//             style={{ maxHeight: "50vh", overflowY: "auto" }}
//           >
//             {chatHistory.map((chat, index) => (
//               <div className="m-4" key={index}>
//                 <div
//                   className={`message ${
//                     chat.type === "user" ? "user-message" : "bot-message"
//                   }`}
//                 >
//                   <p className="flex justify-end">
//                     {chat.type === "user" && gender === "male" && (
//                       <FcBusinessman size={25} />
//                     )}
//                   </p>
//                   <p className="flex justify-end">
//                     {chat.type === "user" && gender === "female" && (
//                       <FcBusinesswoman size={25} />
//                     )}
//                   </p>
//                   <p className="flex justify-start">
//                     {chat.type === "Rishi" && (
//                         <h1 className="text-lg">👨‍⚕️</h1>
//                       ) && (
//                         <figure class="avatar">
//                           <img src="https://png.pngtree.com/png-vector/20231227/ourmid/pngtree-male-doctor-3d-icon-emoji-png-image_11384081.png" />
//                         </figure>
//                       )}
//                   </p>
//                   {chat.message.split('*').map((line, idx) => (
//                     <div key={idx}>
//                         {idx > 0 && <br />} {/* Add line break if not the first line */}
//                         {line}
//                     </div>
//                 ))}
//                 </div>
//               </div>
//             ))}
            
//           </div>
//         </PerfectScrollbar>
//         <div className="message-box">
//           <form
//             id="chat-form"
//             onSubmit={handleSubmit}
//             className="ai-form flex mb-4"
//           >
//             <input
//               type="text"
//               value={userInput}
//               onChange={(e) => setUserInput(e.target.value)}
//               placeholder="Enter your message"
//               className="message-input"
//             />
//             {/* {isLoading && <DotLoader color="#24bb9c" size={30}/>}
//             {!isLoading && <button type="submit" className="ai-button message-submit">
//               Send
//             </button>} */}
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AiAnalysis;
import React, { useState, useContext, useRef, useEffect } from "react";
import { BASE_URL } from "../config";
import "../aiCSS.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { authContext } from "../context/AuthContext.jsx";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import Loading from "../components/Loader/Loading.jsx";
import DotLoader from 'react-spinners/DotLoader.js'
import { DNA } from 'react-loader-spinner';
const AiAnalysis = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatHistoryRef = useRef(null);

  useEffect(() => {
    chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
  }, [chatHistory]);

  const sendMessage = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/chat`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, userInput }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message);
      }
      console.log(data?.message);
      const botMessage = data?.ans;
      setIsLoading(false);
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { type: "user", message: userInput },
        { type: "Rishi", message: botMessage },
      ]);
      setUserInput("");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const { user, gender } = useContext(authContext);

  return (
    <section className="section">
      <div className="chat">
        <div className="chat-title">
          <h1>RaAHH Health Analysis</h1>
          <h2>Rishi</h2>
          <figure class="avatar">
            <img src="https://png.pngtree.com/png-vector/20231227/ourmid/pngtree-male-doctor-3d-icon-emoji-png-image_11384081.png" />
          </figure>
        </div>
        <PerfectScrollbar>
          <div
            id="chat-history"
            className="messages"
            ref={chatHistoryRef}
            style={{ maxHeight: "50vh", overflowY: "auto" }}
          >
            {chatHistory.map((chat, index) => (
              <div className="" key={index}>
                <div
                  className={`message ${
                    chat.type === "user" ? "user-message" : "bot-message"
                  }`}
                >
                  <p className="flex justify-end">
                    {chat.type === "user" && gender === "male" && (
                      <FcBusinessman size={25} />
                    )}
                  </p>
                  <p className="flex justify-end">
                    {chat.type === "user" && gender === "female" && (
                      <FcBusinesswoman size={25} />
                    )}
                  </p>
                  <p className="flex justify-start">
                    {chat.type === "Rishi" && (
                        <h1 className="text-lg">👨‍⚕️</h1>
                      ) && (
                        <figure class="avatar">
                          <img src="https://png.pngtree.com/png-vector/20231227/ourmid/pngtree-male-doctor-3d-icon-emoji-png-image_11384081.png" />
                        </figure>
                      )}
                  </p>
                  {chat.message.split('*').map((line, idx) => (
                    <div key={idx}>
                        {idx > 0 && <br />} {/* Add line break if not the first line */}
                        {line}
                    </div>
                ))}
                </div>
              </div>
            ))}
            {isLoading && <div id="loader" className="loading"></div>}
          </div>
        </PerfectScrollbar>
        <div className="message-box">
          <form
            id="chat-form"
            onSubmit={handleSubmit}
            className="ai-form flex mb-4 mt-0"
          >
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Enter your message"
              className="message-input"
            />
            {/* {isLoading && <DotLoader color="#24bb9c" size={30}/>} */}
            {isLoading && <DNA
  visible={true}
  size={10}

  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />}
            {!isLoading &&(<button type="submit" className="ai-button message-submit">
              Send
            </button>)}
          </form>
        </div>
      </div>
    </section>
  );
};

export default AiAnalysis;
