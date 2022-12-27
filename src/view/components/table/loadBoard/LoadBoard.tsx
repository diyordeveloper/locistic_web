import React, { useState } from "react";
import FiltersTop from "./topbar/filtersTop/FiltersTop";
import SortingBtn from "./topbar/sortingBtns/SortingBtn";
import "./style.css";
import Table from "./table/Table";
function LoadBoard() {
  return (
    <>
      <div className="loadboard__">
        <FiltersTop />
        <SortingBtn />
        <Table />
      </div>
    </>
  );
}

export default LoadBoard;
