import React, { useState } from 'react';
import { Send } from 'lucide-react';

const InputArea = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="flex-grow px-4 py-2 rounded-lg 
        bg-white border border-custom-olive 
        focus:outline-none focus:ring-2 focus:ring-custom-olive 
        text-custom-dark"
      />
      <button 
        type="submit" 
        className="bg-custom-olive text-white p-2 rounded-lg 
        hover:bg-custom-dark transition-colors 
        flex items-center justify-center"
      >
        <Send className="w-6 h-6" />
      </button>
    </form>
  );
};

export default InputArea;