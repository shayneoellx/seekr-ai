import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useChatContext } from '../context/ChatContext';

const MODELS = [
  { 
    id: 'anthropic/claude-3-haiku', 
    name: 'Claude 3 Haiku' 
  },
  { 
    id: 'anthropic/claude-3-sonnet', 
    name: 'Claude 3 Sonnet' 
  },
  { 
    id: 'openai/gpt-3.5-turbo', 
    name: 'GPT-3.5 Turbo' 
  },
  { 
    id: 'google/gemini-pro', 
    name: 'Google Gemini Pro' 
  }
];

const ModelSelector = () => {
  const { selectedModel, setSelectedModel } = useChatContext();

  return (
    <div className="relative">
      <select 
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
        className="appearance-none w-full bg-custom-light text-custom-dark 
        px-3 py-2 rounded-md border border-custom-olive 
        focus:outline-none focus:ring-2 focus:ring-custom-olive 
        pr-8 text-sm"
      >
        {MODELS.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>
      <ChevronDown 
        className="absolute right-2 top-1/2 -translate-y-1/2 
        pointer-events-none text-custom-dark w-5 h-5"
      />
    </div>
  );
};

export default ModelSelector;