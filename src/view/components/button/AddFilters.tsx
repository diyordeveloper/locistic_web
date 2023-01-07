import React from "react";
import AddIcon from "@mui/icons-material/Add";
interface FilterProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  id?: string;
  text?: string;
}
function AddFilters({ onClick, disabled, className, id, text }: FilterProps) {
  return (
    <>
      <button className="add_btn_filters__" onClick={onClick}>
        <AddIcon className="icon__" />
        {text}
      </button>
    </>
  );
}

export default AddFilters;
