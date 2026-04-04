import axios from 'axios';

async function getMessages() {
  const response = await axios.get('/messages');

  return response.data;
}

async function createMessage(messageData) {
  const { author, message } = messageData;
  const response = await axios.post('/messages', {
    author,
    message,
  });

  return response.data;
}

export default { getMessages, createMessage };
