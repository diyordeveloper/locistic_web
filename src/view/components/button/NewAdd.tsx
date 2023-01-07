import React from "react";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
interface NewAddProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  id?: string;
  text?: string;
}
function NewAdd({ onClick, disabled, className, id, text }: NewAddProps) {
  return (
    <>
      <div className={`${className} added_btn__`} onClick={onClick}>
        <span className="add_btn_txt__">{text}</span>
        <div className="add_btn_icon__">
          <AddIcon className="icon__" />
        </div>
      </div>
    </>
  );
}

export default NewAdd;
