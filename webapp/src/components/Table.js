import React, { useEffect, useState } from "react";
import { getAllBooks } from "./api/getApi";
import { useNavigate } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "ISBN", headerName: "ISBN", width: 130 },
  { field: "Title", headerName: "Title", width: 130 },
  {
    field: "Publisher",
    headerName: "Publisher",
    width: 90,
  },
  {
    field: "Date published",
    headerName: "Date published",
    width: 90,
  },
  {
    field: "No of pages",
    headerName: "No of pages",
    width: 160,
  },
  {
    field: "Language",
    headerName: "Language",
    width: 160,
  },
];

// const rows = [
//   {
//     id: 1,
//     Authors: ["Author1", "Author2"],
//     Title: "Book Title 1",
//     Publisher: "Publisher1",
//     Year: 2022,
//     Pages: 300,
//     Language: "English",
//   },
//   {
//     id: 2,
//     Authors: ["Author3", "Author4"],
//     Title: "Book Title 2",
//     Publisher: "Publisher2",
//     Year: 2020,
//     Pages: 250,
//     Language: "Spanish",
//   },
//   {
//     id: 3,
//     Authors: ["Author5", "Author6", "Author7"],
//     Title: "Book Title 3",
//     Publisher: "Publisher3",
//     Year: 2018,
//     Pages: 400,
//     Language: "French",
//   },
//   {
//     id: 4,
//     Authors: ["Author8"],
//     Title: "Book Title 4",
//     Publisher: "Publisher4",
//     Year: 2015,
//     Pages: 200,
//     Language: "German",
//   },
//   {
//     id: 5,
//     Authors: ["Author9", "Author10"],
//     Title: "Book Title 5",
//     Publisher: "Publisher5",
//     Year: 2021,
//     Pages: 350,
//     Language: "Japanese",
//   },
//   {
//     id: 1,
//     Authors: ["Author1", "Author2"],
//     Title: "Book Title 1",
//     Publisher: "Publisher1",
//     Year: 2022,
//     Pages: 300,
//     Language: "English",
//   },
//   {
//     id: 2,
//     Authors: ["Author3", "Author4"],
//     Title: "Book Title 2",
//     Publisher: "Publisher2",
//     Year: 2020,
//     Pages: 250,
//     Language: "Spanish",
//   },
//   {
//     id: 3,
//     Authors: ["Author5", "Author6", "Author7"],
//     Title: "Book Title 3",
//     Publisher: "Publisher3",
//     Year: 2018,
//     Pages: 400,
//     Language: "French",
//   },
//   {
//     id: 4,
//     Authors: ["Author8"],
//     Title: "Book Title 4",
//     Publisher: "Publisher4",
//     Year: 2015,
//     Pages: 200,
//     Language: "German",
//   },
//   {
//     id: 5,
//     Authors: ["Author9", "Author10"],
//     Title: "Book Title 5",
//     Publisher: "Publisher5",
//     Year: 2021,
//     Pages: 350,
//     Language: "Japanese",
//   },
//   {
//     id: 1,
//     Authors: ["Author1", "Author2"],
//     Title: "Book Title 1",
//     Publisher: "Publisher1",
//     Year: 2022,
//     Pages: 300,
//     Language: "English",
//   },
//   {
//     id: 2,
//     Authors: ["Author3", "Author4"],
//     Title: "Book Title 2",
//     Publisher: "Publisher2",
//     Year: 2020,
//     Pages: 250,
//     Language: "Spanish",
//   },
//   {
//     id: 3,
//     Authors: ["Author5", "Author6", "Author7"],
//     Title: "Book Title 3",
//     Publisher: "Publisher3",
//     Year: 2018,
//     Pages: 400,
//     Language: "French",
//   },
//   {
//     id: 4,
//     Authors: ["Author8"],
//     Title: "Book Title 4",
//     Publisher: "Publisher4",
//     Year: 2015,
//     Pages: 200,
//     Language: "German",
//   },
//   {
//     id: 5,
//     Authors: ["Author9", "Author10"],
//     Title: "Book Title 5",
//     Publisher: "Publisher5",
//     Year: 2021,
//     Pages: 350,
//     Language: "Japanese",
//   },
// ];

export default function Table({ filteredData }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // declare an async function
    async function fetchData() {
      // set the loading state to true
      setLoading(true);

      try {
        // await for the promise to resolve
        const data = await getAllBooks();
        // set the books state to the data
        setBooks(data);
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
  }, []);

  if (loading) {
    // render a loading indicator
    return <div>Loading...</div>;
  } else if (error) {
    // render an error message
    return <div>Error: {error.message}</div>;
  }

  const handleClick = (id) => {
    navigate(`book/${id}`);
  };
  return (
    <div className=" mt-4 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-black dark:text-gray-400">
        <thead className="text-xs text-black uppercase bg-[#C0C0C0]">
          <tr>
            {columns.map((data, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {data.headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0
            ? books.map((data, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    handleClick(data.id);
                  }}
                  className={
                    index % 2 !== 0
                      ? "bg-white border-b border-gray-700 text-black cursor-pointer"
                      : "bg-[#C6DEFF] border-b border-gray-700 text-black cursor-pointer"
                  }
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap"
                  >
                    {data.id}
                  </th>
                  <td className="px-6 py-4">{data.isbn}</td>
                  <td className="px-6 py-4">{data.title}</td>
                  <td className="px-6 py-4">{data.publisher}</td>
                  <td className="px-6 py-4">{data.published_date}</td>
                  <td className="px-6 py-4">{data.no_of_pages}</td>
                  <td className="px-6 py-4">{data.language}</td>
                </tr>
              ))
            : filteredData.map((filteredData, index) => (
                <tr
                  key={filteredData.id}
                  className={
                    index % 2 !== 0
                      ? "bg-white border-b border-gray-700 text-black"
                      : "bg-[#C6DEFF] border-b border-gray-700 text-black"
                  }
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap"
                  >
                    {filteredData.id}
                  </th>
                  <td className="px-6 py-4">{filteredData.author_name}</td>
                  <td className="px-6 py-4">{filteredData.title}</td>
                  <td className="px-6 py-4">{filteredData.publisher}</td>
                  <td className="px-6 py-4">{filteredData.published_date}</td>
                  <td className="px-6 py-4">{filteredData.no_of_pages}</td>
                  <td className="px-6 py-4">{filteredData.language}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}
