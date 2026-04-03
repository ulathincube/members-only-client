import axios from 'axios';

const baseUrl = '/api/messages';

async function getMessages() {
  const response = await axios.get(baseUrl);

  return response.data;
}

async function createMessage(messageData) {
  const { author, message } = messageData;
  const response = await axios.post(baseUrl, {
    author,
    message,
  });

  return response.data;
}

async function getMessagesByUser(userId) {
  const response = await axios.get(`${baseUrl}/users/${userId}`);

  return response.data;
}

export default { getMessages, createMessage, getMessagesByUser };
