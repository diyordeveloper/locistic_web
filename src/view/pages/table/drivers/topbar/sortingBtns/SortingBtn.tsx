import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Search from "../../../../../assets/icons/Search.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddFilters from "../../../../../components/button/AddFilters";
import SearchInput from "../../../../../components/input/SearchInput";
import NewAdd from "../../../../../components/button/NewAdd";
import "./style.css";
function SortingBtn() {
  return (
    <>
      <div className="top_bar__">
        <div className="block__1">
          <span className="txt__">Drivers</span>
          <div className="box__">
            <AddFilters text="Add filters" />
            <SearchInput placeholder="Search" />
          </div>
        </div>
        <NewAdd className="add_btn__" text="New driver" />
      </div>
    </>
  );
}

export default SortingBtn;
