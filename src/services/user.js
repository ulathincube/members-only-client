import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;

async function createUser(userData) {
  const { firstName, lastName, email, password } = userData;

  const response = await axios.post(
    `${baseUrl}/users`,
    {
      firstName,
      lastName,
      email,
      password,
    },
    {
      withCredentials: true,
    },
  );

  return response.data;
}

async function getAllUsers() {
  try {
    const response = await axios.get(`${baseUrl}/users`, null, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    if (error) throw error;
  }
}

export default { createUser, getAllUsers };
