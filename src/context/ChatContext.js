import React, { createContext, useState, useContext } from 'react';
import { sendMessage } from '../services/openRouterService';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [selectedModel, setSelectedModel] = useState('anthropic/claude-3-haiku');

  const addMessage = async (userMessage) => {
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    try {
      const aiResponse = await sendMessage(updatedMessages, selectedModel);
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Message send failed', error);
    }
  };

  return (
    <ChatContext.Provider value={{ 
      messages, 
      addMessage, 
      selectedModel, 
      setSelectedModel 
    }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => useContext(ChatContext);