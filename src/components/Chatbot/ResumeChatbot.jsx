import React, { useState } from "react";
import "./Chatbot.css";

const ResumeChatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! Ask me anything about Namrata's portfolio.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Controls chatbot visibility

  const responses = {
    skills: "JavaScript, Python, C++, SQL, HTML, CSS, React, Node.js, Flask, Express.js, Chart.js, Bootstrap",
    experience: "Developed multiple projects like Myntra Designer Connect, Cryptoverse App, and Blog Application.",
    education: "B.Tech in Chemical Engineering from MNIT Jaipur (CGPA: 7.52).",
    projects: "Myntra Designer Connect, Cryptoverse App, Blog Application, Investment Recommendation Platform.",
    contact: "Email: goyalnamrata87@gmail.com, Phone: +91-8619312358."
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    
    const lowercaseInput = input.toLowerCase();
    const matchedKey = Object.keys(responses).find(key => lowercaseInput.includes(key));
    
    setTimeout(() => {
      if (matchedKey) {
        setMessages(prev => [...prev, { text: responses[matchedKey], sender: "bot" }]);
      } else {
        setMessages(prev => [...prev, { text: "Sorry, I didn't understand. Ask about skills, experience, education, projects, or contact.", sender: "bot" }]);
      }
    }, 1000);

    setInput("");
  };

  return (
    <>
      {/* Floating Button to Open Chatbot */}
      <button className="chatbot-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "💬 Chat"}
      </button>

      {/* Chatbot Window (Hidden by Default) */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chat-header">
            Resume Chatbot
            <span className="chat-close" onClick={() => setIsOpen(false)}>✖</span>
          </div>
          <div className="chat-window">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>{msg.text}</div>
            ))}
          </div>
          <div className="chat-input">
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Ask about skills, experience, etc..." 
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeChatbot;
