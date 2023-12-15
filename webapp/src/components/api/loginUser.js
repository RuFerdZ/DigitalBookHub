const loginUser = async ({ username, password }) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/token/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
          grant_type: process.env.REACT_APP_GRANT_TYPE,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Login failed: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    return { token: data.access_token };
  } catch (error) {
    console.error("Error during login:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};

export default loginUser;
