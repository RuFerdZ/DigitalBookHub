import React, { useState } from "react";
import { AddBook, DeleteBook } from "./api/postApi";

const Modal = ({ onModal }) => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    no_of_pages: 0,
    isbn: "",
    description: "",
    published_date: "",
    publisher: "",
    author_name: "",
    language: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Convert no_of_pages to an integer using parseInt
    const parsedValue = name === "no_of_pages" ? parseInt(value, 10) : value;

    setFormData({
      ...formData,
      [name]: parsedValue,
    });
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    setSelectedFiles(files[0]);
  };

  const handleImageChange = (e) => {
    const file = e.target.files;
    if (file) {
      setSelectedImage(file[0]);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    // Create a FormData object to send book data to the server
    const bookFormData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      bookFormData.append(key, value);
    });
    bookFormData.append("image", selectedImage);
    bookFormData.append("file", selectedFiles);

    for (const entry of bookFormData.entries()) {
      console.log(entry[0], entry[1]);
    }

    try {
      // Send the request and get the response
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/books/book/`,
        {
          method: "POST",
          headers: {
            // Remove the content type header
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: bookFormData,
        }
      );

      if (response.ok) {
        // Get the data from the response
        const data = await response.json();
        console.log(data);
        alert("Book uploaded successfully!");
        window.location.reload();
      } else {
        // Handle non-2xx HTTP response
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);

      // Log specific error message if available
      if (error.message) {
        console.error(`Error message: ${error.message}`);
      }

      // Use a more specific error message
      alert("Book upload failed!");
    }
  };

  const handleCloseModal = () => {
    onModal(false);
  };
  return (
    <div className="font-sans bg-gray-100 flex items-center justify-center h-screen">
      <div>
        <div
          className="fixed z-10 inset-0 flex items-center justify-center"
          style={{
            zIndex: 9999,
          }}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="relative p-3 w-full max-w-md max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-2 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Upload New Book
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="crud-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <form className="p-2 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type Book Name"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="No of pages"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      No of pages
                    </label>
                    <input
                      type="number"
                      name="no_of_pages"
                      id="No of pages"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="0"
                      required
                      value={formData.no_of_pages}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="isbn"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      ISBN (ISBN-13 / ISBN-10 )
                    </label>
                    <input
                      type="text"
                      name="isbn"
                      id="isbn"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="978-1-56619-909-4"
                      required
                      value={formData.isbn}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="Date Published"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Date Published
                    </label>
                    <input
                      type="text"
                      name="published_date"
                      id="Date Published"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="YYYY-MM-DD"
                      required
                      value={formData.published_date}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="Publisher"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Publisher
                    </label>
                    <input
                      type="text"
                      name="publisher"
                      id="Publisher"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                      value={formData.publisher}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="Name of Author"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name of Author
                    </label>
                    <input
                      type="text"
                      name="author_name"
                      id="Name of Author"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                      value={formData.author_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="language"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Language
                    </label>
                    <input
                      type="text"
                      name="language"
                      id="language"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                      placeholder="English/French..."
                      value={formData.language}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="Upload"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Upload File
                    </label>
                    <input type="file" onChange={handleFileChange} />

                    <label
                      htmlFor="Upload"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Upload Image
                    </label>
                    <input type="file" onChange={handleImageChange} />
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Book Description
                    </label>
                    <textarea
                      id="description"
                      rows="4"
                      name="description"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write product description here"
                      value={formData.description}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>
                <button
                  onClick={handleUpload}
                  type="submit"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="me-1 -ms-1 w-5 h-5"
                    onClick={handleCloseModal}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Add new Book
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
