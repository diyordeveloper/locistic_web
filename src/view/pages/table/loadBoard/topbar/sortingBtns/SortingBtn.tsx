import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Search from "../../../../../assets/icons/Search.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./style.css";

interface Props {
  setModalOpen: () => void;
}
function SortingBtn({ setModalOpen }: Props) {
  return (
    <>
      <div className="top_bar__">
        <div className="block__1">
          <span className="txt__">Available Loads</span>
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
        <div className="block__2">
          <div className="select__">
            <span className="select_txt__">
              <span>Sort </span> by date
            </span>
            <div className="select_icon__">
              <KeyboardArrowDownIcon className="icon__" />
            </div>
          </div>
          <div
            className="add_btn__"
            // @ts-ignore
            onClick={() => setModalOpen((p: any) => !p)}
          >
            <span className="add_btn_txt__">New Active Load</span>
            <div className="add_btn_icon__">
              <AddIcon className="icon__" />
            </div>
          </div>
        </div>
      </div>
      <div className="btn_block__">
        <button className="btn_one">Open Loads</button>
        <button className="btn_two">Delivered/Completed Loads</button>
      </div>
    </>
  );
}

export default SortingBtn;
