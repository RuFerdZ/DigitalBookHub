import React from "react";
import Table from "./Table";
import SearchBar from "./SearchBar";

export default function Home() {
  return (
    <div className="mt-6 mx-auto" style={{ height: 400, width: "98%" }}>
      <SearchBar />
      <Table />
    </div>
  );
}
