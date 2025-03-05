import React, { useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const MessageList = ({ messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="space-y-4">
      {messages.map((msg, index) => (
        <div 
          key={index} 
          className={`flex ${
            msg.role === 'user' 
              ? 'justify-end' 
              : 'justify-start'
          }`}
        >
          <div 
            className={`max-w-[75%] p-3 rounded-lg ${
              msg.role === 'user' 
                ? 'bg-custom-olive text-white' 
                : 'bg-custom-light text-custom-dark'
            }`}
          >
            <ReactMarkdown>{msg.content}</ReactMarkdown>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;