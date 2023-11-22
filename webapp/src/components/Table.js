import React from "react";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Author(s)", headerName: "Author(s)", width: 130 },
  { field: "Title", headerName: "Title", width: 130 },
  {
    field: "Year",
    headerName: "Year",
    type: "number",
    width: 90,
  },
  {
    field: "Pages",
    headerName: "Pages",
    type: "number",
    width: 90,
  },
  {
    field: "Publisher",
    headerName: "Publisher",
    width: 160,
  },
  {
    field: "Language",
    headerName: "Language",
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    Authors: ["Author1", "Author2"],
    Title: "Book Title 1",
    Publisher: "Publisher1",
    Year: 2022,
    Pages: 300,
    Language: "English",
  },
  {
    id: 2,
    Authors: ["Author3", "Author4"],
    Title: "Book Title 2",
    Publisher: "Publisher2",
    Year: 2020,
    Pages: 250,
    Language: "Spanish",
  },
  {
    id: 3,
    Authors: ["Author5", "Author6", "Author7"],
    Title: "Book Title 3",
    Publisher: "Publisher3",
    Year: 2018,
    Pages: 400,
    Language: "French",
  },
  {
    id: 4,
    Authors: ["Author8"],
    Title: "Book Title 4",
    Publisher: "Publisher4",
    Year: 2015,
    Pages: 200,
    Language: "German",
  },
  {
    id: 5,
    Authors: ["Author9", "Author10"],
    Title: "Book Title 5",
    Publisher: "Publisher5",
    Year: 2021,
    Pages: 350,
    Language: "Japanese",
  },
];

export default function Table() {
  return (
    <div class=" mt-4 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-black dark:text-gray-400">
        <thead class="text-xs text-black uppercase bg-[#C0C0C0]">
          <tr>
            {columns.map((data) => (
              <th scope="col" class="px-6 py-3">
                {data.headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((data, index) => (
            <tr
              key={data.id}
              class={
                index % 2 !== 0
                  ? "bg-white border-b border-gray-700 text-black"
                  : "bg-[#C6DEFF] border-b border-gray-700 text-black"
              }
            >
              <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap">
                {data.id}
              </th>
              <td class="px-6 py-4">{data.Authors.join(", ")}</td>
              <td class="px-6 py-4">{data.Title}</td>
              <td class="px-6 py-4">{data.Publisher}</td>
              <td class="px-6 py-4">{data.Year}</td>
              <td class="px-6 py-4">{data.Pages}</td>
              <td class="px-6 py-4">{data.Language}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
