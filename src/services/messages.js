import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;

async function getMessages() {
  const response = await axios.get(`${baseUrl}/messages`);

  return response.data;
}

async function createMessage(messageData) {
  const { author, message } = messageData;
  const response = await axios.post(`${baseUrl}/messages`, {
    author,
    message,
  });

  return response.data;
}

export default { getMessages, createMessage };
