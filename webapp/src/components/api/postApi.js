const AddBook = async (formData) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/books/book/`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          // Add the Content-Type header for FormData
          // Note: It's usually not necessary, but some servers might require it
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      }
    );

    if (response.ok) {
      // Get the data from the response
      const data = await response.json();

      // Log the data
      console.log(data);

      // Display a success message
      alert("Book uploaded successfully!");
    } else {
      // Throw an error
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    // Log the error
    console.error(error);

    // Display an error message
    alert("Something went wrong!");
  }
};

const DeleteBook = async (id) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/books/book/${id}/`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          // Add the Content-Type header for FormData
          // Note: It's usually not necessary, but some servers might require it
        },
      }
    );

    if (response.ok) {
      // Get the data from the response
      const data = await response.status;

      // Log the data
      if (data.status === 204) {
        // Display a success message
        alert("Book deleted successfully!");
        window.location.reload();
      }
    } else {
      // Throw an error
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    // Log the error
    console.error(error);

    // Display an error message
    alert("Something went wrong!");
  }
};

export { AddBook, DeleteBook };
