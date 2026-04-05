const baseUrl = import.meta.env.VITE_API_URL;

async function getMessages() {
  try {
    const response = await fetch(`${baseUrl}/messages`, {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) throw new Error('Failed to get all messages!');

    return await response.json();
  } catch (error) {
    if (error) throw error;
  }
}

async function createMessage(messageData) {
  const { author, message } = messageData;
  try {
    const response = await fetch(`${baseUrl}/messages`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ author, message }),
    });

    if (!response.ok) throw new Error('Failed to create a message!');

    return await response.json();
  } catch (error) {
    if (error) throw error;
  }
}

export default { getMessages, createMessage };
