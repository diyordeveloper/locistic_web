import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Search from "../../../../../assets/icons/Search.svg";
import "./style.css";
function SortingBtn() {
  return (
    <>
      <div className="top_bar__">
        <div className="block__1">
          <span className="txt__">Accounting</span>
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
      </div>
      <div className="btn_block__">
        <button className="btn_one">Completed</button>
        <button className="btn_two">Pending</button>
        <button className="btn_two">Paid</button>
      </div>
    </>
  );
}

export default SortingBtn;
