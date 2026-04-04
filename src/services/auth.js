import axios from 'axios';
const baseUrl = import.meta.env.VITE_API_URL;

async function login(email, password) {
  try {
    const response = await axios.post(
      `${baseUrl}/auth/login`,
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
    await axios.post(`${baseUrl}/auth/logout`, null, {
      withCredentials: true,
    });
  } catch (error) {
    if (error instanceof Error) throw error;
  }
}

async function verifyMember(passphrase) {
  try {
    const response = await axios.post(
      `${baseUrl}/auth/verify`,
      {
        passphrase,
      },
      {
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error) {
    if (error instanceof Error) throw error;
  }
}

export default { login, logout, verifyMember };
