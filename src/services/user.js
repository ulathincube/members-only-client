import axios from 'axios';

const baseUrl = '/api/users';

async function createUser(userData) {
  const { firstName, lastName, email, password } = userData;

  const response = await axios.post(baseUrl, {
    firstName,
    lastName,
    email,
    password,
  });

  return response.data;
}

async function getAllUsers() {
  try {
    const response = await axios.get(baseUrl);

    return response.data;
  } catch (error) {
    if (error) throw error;
  }
}

export default { createUser, getAllUsers };
