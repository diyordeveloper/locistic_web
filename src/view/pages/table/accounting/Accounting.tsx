import React from "react";
import SortingBtn from "./topbar/sortingBtns/SortingBtn";
import Table from "./table/Table";

function Accounting() {
  return (
    <div className="accounting__">
      <SortingBtn />
      <Table />
    </div>
  );
}

export default Accounting;
