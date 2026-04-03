import axios from '../utils/axios';

async function createUser(userData) {
  const { firstName, lastName, email, password } = userData;

  const response = await axios.post('/users', {
    firstName,
    lastName,
    email,
    password,
  });

  return response.data;
}

async function getAllUsers() {
  try {
    const response = await axios.get('/users');

    return response.data;
  } catch (error) {
    if (error) throw error;
  }
}

export default { createUser, getAllUsers };
