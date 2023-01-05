import React from "react";
import Table from "./table/Table";
import SortingBtn from "./topbar/sortingBtns/SortingBtn";

function Trailers() {
  return (
    <div className="trailers__">
      <SortingBtn />
      <Table />
    </div>
  );
}

export default Trailers;
