import axios from 'axios';

const baseUrl = '/api/auth';

async function login(email, password) {
  try {
    console.log('hello!');
    const response = await axios.post(`${baseUrl}/login`, { email, password });

    return response.data;
  } catch (error) {
    if (error instanceof Error) throw error;
  }
}

async function logout() {
  try {
    await axios.post(`${baseUrl}/logout`);
  } catch (error) {
    if (error instanceof Error) throw error;
  }
}

async function verifyMember(passphrase) {
  try {
    const response = await axios.post(`${baseUrl}/verify`, {
      passphrase,
    });

    return response.data;
  } catch (error) {
    if (error instanceof Error) throw error;
  }
}

export default { login, logout, verifyMember };
