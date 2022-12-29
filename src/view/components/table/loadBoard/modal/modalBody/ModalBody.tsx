import React from "react";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
function ModalBody() {
  return (
    <>
      <div className="customer__">
        <div className="tabs_btns">
          <div className="btn_group__">
            <button className="btn_customer__">Customer 1</button>
            <button className="add_customer__">
            <AddIcon className="icon__" />
            </button>
          </div>
        </div>
      </div>
      <div className="shipper__"></div>
      <div className="consignee__"></div>
    </>
  );
}

export default ModalBody;
