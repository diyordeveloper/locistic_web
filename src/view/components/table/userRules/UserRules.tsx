import React from "react";
import Table from "./table/Table";
import Topbar from "./topbar/sortingBtns/SortingBtn";
import "./style.css";
function UserRules() {
  return (
    <div className="user_rules__">
      <Topbar />
      <Table />
    </div>
  );
}

export default UserRules;
