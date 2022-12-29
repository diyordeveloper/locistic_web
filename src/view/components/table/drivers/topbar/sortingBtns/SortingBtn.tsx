import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Search from "../../../../../assets/icons/Search.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./style.css";
function SortingBtn() {
  return (
    <>
      <div className="top_bar__">
        <div className="block__1">
          <span className="txt__">Drivers</span>
          <div className="box__">
            <button className="add_btn__">
              <AddIcon className="icon__" />
              Add filters
            </button>
            <div className="search__">
              <img src={Search} alt="Error..." />
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
        <div className="add_btn__">
            <span className="add_btn_txt__">New driver</span>
            <div className="add_btn_icon__">
              <AddIcon className="icon__" />
            </div>
          </div>
      </div>
    </>
  );
}

export default SortingBtn;
