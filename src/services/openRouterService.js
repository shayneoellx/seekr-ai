import axios from 'axios';

const OPENROUTER_API_URL = process.env.REACT_APP_OPENROUTER_BASE_URL;
const API_KEY = process.env.REACT_APP_OPENROUTER_API_KEY;

export const sendMessage = async (messages, model) => {
  try {
    const response = await axios.post(
      `${OPENROUTER_API_URL}/chat/completions`, 
      {
        model: model,
        messages: messages
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data.choices[0].message;
  } catch (error) {
    console.error('OpenRouter API Error:', error);
    throw error;
  }
};