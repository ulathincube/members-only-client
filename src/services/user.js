const baseUrl = import.meta.env.VITE_API_URL;
// const apiUrl = '/api/users';

async function createUser(userData) {
  const { firstName, lastName, email, password } = userData;

  try {
    const response = await fetch(`${baseUrl}/users`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    });

    if (!response.ok) throw new Error('Failed to create a new user!');

    return await response.json();
  } catch (error) {
    if (error) throw error;
  }
}

async function getAllUsers() {
  try {
    const response = await fetch(`${baseUrl}/users`, {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) throw new Error('Failed to get all users!');

    return await response.json();
  } catch (error) {
    if (error) throw error;
  }
}

export default { createUser, getAllUsers };
