import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NewAdd from "../../../../../components/button/NewAdd";
import AddFilters from "../../../../../components/button/AddFilters";
import "./style.css";
import SearchInput from "../../../../../components/input/SearchInput";

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
            <AddFilters text="Add filters" />
            <SearchInput placeholder="Search" />
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
          <NewAdd
            // @ts-ignore
            onClick={() => setModalOpen((p: any) => !p)}
            text={"New Active Load"}
          />
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
