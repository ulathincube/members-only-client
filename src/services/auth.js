import axios from 'axios';

async function login(email, password) {
  try {
    const response = await axios.post(
      '/auth/login',
      { email, password },
      { withCredentials: true },
    );

    return response.data;
  } catch (error) {
    if (error instanceof Error) throw error;
  }
}

async function logout() {
  try {
    await axios.post('/auth/logout');
  } catch (error) {
    if (error instanceof Error) throw error;
  }
}

async function verifyMember(passphrase) {
  try {
    const response = await axios.post('/auth/verify', {
      passphrase,
    });

    return response.data;
  } catch (error) {
    if (error instanceof Error) throw error;
  }
}

export default { login, logout, verifyMember };
