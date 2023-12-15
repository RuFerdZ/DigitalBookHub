import React, { useState, useEffect } from "react";
import { FiDelete } from "react-icons/fi";

export default function SearchBar({ onSearch, onCancel }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Call the onSearch callback with the current search term
    onSearch(searchTerm);
  };

  const handleCancel = async (e) => {
    // Clear the search term and hide the cancel icon
    setSearchTerm("");
    onCancel(searchTerm);
  };

  return (
    <>
      <div className="flex flex-row justify-around">
        <form className="flex-1">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          {/* <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div>
              <FiDelete
                onClick={handleCancel}
                className={`${searchTerm ? "visible" : "invisible"}`}
              />
              <button
                onClick={handleSearch}
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2"
              >
                Search!
              </button>
            </div>
          </div> */}
          <div className="relative">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Books..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 end-0 flex items-center pr-36">
                <FiDelete
                  onClick={handleCancel}
                  className={`cursor-pointer ${
                    searchTerm ? "visible" : "invisible"
                  }`}
                />
              </div>
            </div>
            <button
              onClick={handleSearch}
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2"
            >
              Search!
            </button>
          </div>
        </form>
        <div className="flex-1 text-center">
          <div className="">
            <p>
              DigitalBookHub: Unleashing the World of Knowledge – Your Gateway
              to the Public E-Library Experience!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
