import React from "react";

export default function SearchBar() {
  return (
    <>
      <div class="flex flex-row justify-around">
        <form class="flex-1">
          <label
            htmlFor="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Books..."
              required
            />
            <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2"
            >
              Search!
            </button>
          </div>
        </form>
        <div class="flex-1 text-center">
          <div class="">
            <p>
              Current alias domains are libgen.rs, libgen.is, libgen.st. Update
              your bookmarks! Get involved to help the project! A guide to
              effective catalog searching Try Libgen Desktop application! Now
              with IPFS downloads!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
