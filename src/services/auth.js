import axios from '../utils/axios';

async function login(email, password) {
  try {
    const response = await axios.post('/login', { email, password });

    return response.data;
  } catch (error) {
    if (error instanceof Error) throw error;
  }
}

async function logout() {
  try {
    await axios.post('/logout');
  } catch (error) {
    if (error instanceof Error) throw error;
  }
}

async function verifyMember(passphrase) {
  try {
    const response = await axios.post('/verify', {
      passphrase,
    });

    return response.data;
  } catch (error) {
    if (error instanceof Error) throw error;
  }
}

export default { login, logout, verifyMember };
