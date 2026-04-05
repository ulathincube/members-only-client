const baseUrl = import.meta.env.VITE_API_URL;

async function login(email, password) {
  try {
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error('Failed to send loginData');

    return await response.json();
  } catch (error) {
    if (error instanceof Error) throw error;
  }
}

async function logout() {
  try {
    const response = await fetch(`${baseUrl}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error('Failed to log out!');

    return await response.json();
  } catch (error) {
    if (error instanceof Error) throw error;
  }
}

async function verifyMember(passphrase) {
  try {
    const response = await fetch(`${baseUrl}/auth/verify`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ passphrase }),
    });

    if (!response.ok) throw new Error('Failed to post verify password');

    return await response.json();
  } catch (error) {
    if (error instanceof Error) throw error;
  }
}

export default { login, logout, verifyMember };
