import React, { useState } from "react";
import Table from "./Table";
import SearchBar from "./SearchBar";
import { SearchBooks } from "./api/getApi";

export default function Home() {
  const [data, setData] = useState([]);
  // const [filteredData, setFilteredData] = useState(data);

  //

  const handleSearch = async (searchTerm) => {
    setData([]);
    const books = await SearchBooks(searchTerm);
    setData(books);
    // const newData = data.filter(
    //   (item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())
    //   // Adjust the condition based on your data structure and the properties you want to search
    // );

    // // Update the filtered data state
    // setFilteredData(newData);
  };
  return (
    <div className="mt-6 mx-auto" style={{ height: 400, width: "98%" }}>
      <SearchBar
        onSearch={handleSearch}
        onCancel={() => {
          setData([]);
        }}
        filteredData={data}
      />
      <Table filteredData={data} click />
    </div>
  );
}
