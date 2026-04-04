import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;

async function getMessages() {
  try {
    const response = await axios.get(`${baseUrl}/messages`, null, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    if (error) throw error;
  }
}

async function createMessage(messageData) {
  const { author, message } = messageData;
  const response = await axios.post(
    `${baseUrl}/messages`,
    {
      author,
      message,
    },
    {
      withCredentials: true,
    },
  );

  return response.data;
}

export default { getMessages, createMessage };
