import React from 'react';
import { MessageSquare, Settings } from 'lucide-react';
import { useChatContext } from '../context/ChatContext';
import ModelSelector from './ModelSelector';
import MessageList from './MessageList';
import InputArea from './InputArea';

const ChatInterface = () => {
  const { messages, addMessage } = useChatContext();

  const handleSendMessage = async (userInput) => {
    if (userInput.trim() === '') return;

    const userMessage = {
      role: 'user',
      content: userInput
    };

    await addMessage(userMessage);
  };

  return (
    <div className="flex min-h-screen bg-custom-light">
      <div className="w-full max-w-2xl mx-auto bg-custom-cream shadow-lg rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-custom-olive text-custom-dark p-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <MessageSquare className="w-8 h-8" />
            <h1 className="text-2xl font-semibold">OpenRouter Chat</h1>
          </div>
          <div className="flex items-center space-x-3">
            <ModelSelector />
            <button className="hover:bg-custom-dark/10 rounded-full p-2">
              <Settings className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Message List */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          <MessageList messages={messages} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-custom-olive">
          <InputArea onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;