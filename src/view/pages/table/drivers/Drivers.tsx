import React from "react";
import Table from "./table/Table";
import SortingBtn from "./topbar/sortingBtns/SortingBtn";
import "./style.css";
function Drivers() {
  return (
    <div className="drivers__">
      <SortingBtn />
      <Table/>
    </div>
  );
}

export default Drivers;
