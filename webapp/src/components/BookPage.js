import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "./api/getApi";

const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // await for the promise to resolve
        const data = await getBook(id);
        setBook(data);
      } catch (error) {
        // set the error state to the error
        setError(error);
      } finally {
        // set the loading state to false
        setLoading(false);
      }
    }
    // call the async function
    fetchData();
  }, [id]);

  if (loading) {
    // render a loading indicator
    return <div>Loading...</div>;
  } else if (error) {
    // render an error message
    return <div>Error: {error.message}</div>;
  }

  const handleDownload = () => {
    window.location.href = book.file;
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={
                  book.image ||
                  "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                }
                alt="Product"
              />
            </div>
            <div className="flex -mx-2 mb-4 justify-center">
              <div className="w-1/2 px-2">
                <button
                  onClick={handleDownload}
                  className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                >
                  Download Book
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {book.title}
            </h2>
            <div className="flex mb-4 justify-between py-2">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300 px-1">
                  Author(s):
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {book.author}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300 px-1">
                  Publisher:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {book.publisher}
                </span>
              </div>
            </div>
            <div className="flex mb-4 justify-between py-2">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Year:
                </span>
                <span className="text-gray-600 dark:text-gray-300 px-1">
                  {book.published_date.slice(0, 4)}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300 px-1">
                  Language:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  In Stock
                </span>
              </div>
            </div>
            <div className="flex mb-4 justify-between py-2">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300 px-1">
                  No of Pages:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {book.no_of_pages}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300 px-1">
                  ISBN:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {book.isbn}
                </span>
              </div>
            </div>

            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300 px-1">
                Book Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {book.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
