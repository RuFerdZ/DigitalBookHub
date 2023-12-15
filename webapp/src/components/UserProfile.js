/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { calculateReadingTime } from "./api/bookReadTime";
import { MdDelete } from "react-icons/md";
import { DeleteBook } from "./api/postApi";

import Modal from "./Modal";
import { getUserByID } from "./api/getApi";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [bookData, setBookData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      // set the loading state to true
      setLoading(true);
      try {
        const data = await getUserByID(id);
        setUser(data);
        setLoading(false);
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
  } else {
    // setBookData(user.profile.books);
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {showModal ? <Modal onModal={setShowModal} /> : null}
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/94.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  alt="User Avatar"
                />
                <h1 className="text-xl font-bold">
                  {`${user.first_name}, ${user.last_name}`}
                </h1>
                <p className="text-gray-700">Software Developer</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <a
                    onClick={() => {
                      setShowModal(true);
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer"
                  >
                    Upload Book
                  </a>
                  <a
                    href="/delete"
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 mb-12 px-4 rounded"
                  >
                    Delete Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Books */}
          <div className="col-span-4 sm:col-span-9">
            <div className="grid grid-cols-1 grid-flow-row md:grid-cols-3 sm:grid-cols-2 gap-10">
              {/* Card 1
               */}
              {user && user.profile && user.profile.books
                ? user.profile.books.map((book) => (
                    <div
                      key={book.id}
                      className="rounded overflow-hidden shadow-lg"
                    >
                      <a href="#"></a>
                      <div className="relative">
                        <a href="#">
                          <img
                            className=""
                            src={
                              book.image ||
                              "https://www.bribooks.com/_next/image?url=https%3A%2F%2Fyoubooks-storage-5fd6173683748-webdev.s3.amazonaws.com%2Fpublic%2FBookCovers%2Fbook_10381_1.png&w=600&q=75"
                            }
                            alt="random book alt"
                          />
                          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                        </a>
                        <a href="#!">
                          <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                            Cover
                          </div>
                        </a>
                        <a>
                          <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-8 w-8 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                            {/* <span className="font-bold">
                          {getMonthAndDate(book.uploaded_date).day}
                        </span>
                        <small>
                          {getMonthAndDate(book.uploaded_date).month}
                        </small> */}
                            <MdDelete
                              onClick={() => {
                                DeleteBook(book.id);
                              }}
                            />
                          </div>
                        </a>
                      </div>
                      <div className="px-6 py-4">
                        <p className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
                          {book.title}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {book.description}
                        </p>
                      </div>
                      <div className="px-6 py-4 flex flex-row items-center">
                        <p className="px-3">Book read time</p>
                        <span
                          href="#"
                          className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
                        >
                          <svg
                            height="13px"
                            width="13px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            style={{ enableBackground: "new 0 0 512 512" }}
                            xmlSpace="preserve"
                          >
                            <g>
                              <g>
                                <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                              </g>
                            </g>
                          </svg>
                          <span className="ml-1">
                            {calculateReadingTime(book.no_of_pages)} mins
                          </span>
                        </span>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
