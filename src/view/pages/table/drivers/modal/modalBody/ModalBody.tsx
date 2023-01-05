import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import InputText from "../../../../../components/input/InputText";
import Select from "../../../../../components/select/Select";
import Customer from "./form/customer/Customer";
import TabBtnCustomer from "./form/customer/TabBtnCustomer";
import TabBtnConsignee from "./form/consignee/TabBtnConsignee";
import TabBtnShipper from "./form/shipper/TabBtnShipper";
import "./style.css";
import Shipper from "./form/shipper/Shipper";
import Consignee from "./form/consignee/Consignee";
import UploadRc from "./form/uploadRc/UploadRc";
function ModalBody() {
  return (
    <>
      <div className="customer__">
        <TabBtnCustomer />
        <Customer />
      </div>
      <div className="shipper__">
        <TabBtnShipper />
        <Shipper />
      </div>
      <div className="consignee__">
        <TabBtnConsignee />
        <Consignee />
      </div>
      <div className="uploadrc__">
        <UploadRc />
      </div>
    </>
  );
}

export default ModalBody;
