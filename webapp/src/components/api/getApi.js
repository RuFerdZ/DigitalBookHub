const SearchBooks = async (searchterm) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/books/book/?search=${searchterm}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`Get failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error during search:", error);
    throw error;
  }
};

const getUser = async (username) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/accounts/users/?search=${username}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`Get failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    // console.log(data);

    return data;
  } catch (error) {
    console.error("Error during get:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};

const getUserByID = async (ID) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/accounts/users/${ID}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`Get failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    // console.log(data);

    return data;
  } catch (error) {
    console.error("Error during get:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};

const getAllBooks = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/books/book/`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`Get failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    // console.log(data);

    return data;
  } catch (error) {
    console.error("Error during get:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};

const getBook = async (id) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/books/book/${id}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`Get failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    // console.log(data);

    return data;
  } catch (error) {
    console.error("Error during get:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};

// Function to fetch multiple books by an array of IDs
const fetchBooksByIds = async (bookIds) => {
  try {
    // Use Promise.all to fetch all books concurrently
    const books = await Promise.all(bookIds.map((bookId) => getBook(bookId)));
    // Filter out any null values (failed requests)
    return books.filter((book) => book !== null);
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of a global error
  }
};

export {
  SearchBooks,
  getUser,
  getUserByID,
  getAllBooks,
  getBook,
  fetchBooksByIds,
};
