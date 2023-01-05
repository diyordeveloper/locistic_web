import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

function TabBtnConsignee() {
  const [customer, setCustomer] = useState<any>([
    {
      id: 1,
    },
  ]);
  const [tabBtnActive, setTabBtnActive] = useState<any>(1);
  function AddCustomer() {
    console.log("Customer +++...");
    const arr = customer;
    const a: any = [...arr, { id: customer.length + 1 }];
    setCustomer(a);
    setTabBtnActive(customer.length + 1);
  }
  function DeteleCustomer(id: any) {
    const arr = customer;
    setCustomer(arr.filter((item: any) => item.id !== id));
  }
  function ActiveTabBtn(id: any) {
    setTabBtnActive(id);
  }
  return (
    <>
      <div className="tabs_btns">
        <div className="btn_group__">
          {customer.map((itm: any, idx: any) => (
            <button
              onClick={() => ActiveTabBtn(itm.id)}
              className={`btn_customer__ 
                ${customer.length === 1 ? "active__" : ""}
                ${tabBtnActive === itm.id ? "active__" : ""} 
                ${customer.length > 1 ? "pdng__minus" : "pdng__plus"} `}
            >
              <span>Consignee {idx + 1}</span>
              <span
                className={`${
                  customer.length > 1 ? "d-block pdng__" : "d-none"
                }`}
              >
                <ClearIcon
                  onClick={() => DeteleCustomer(itm.id)}
                  className="icon__"
                />
              </span>
            </button>
          ))}
          <button onClick={AddCustomer} className="add_customer__">
            <AddIcon className="icon__" />
          </button>
        </div>
      </div>
    </>
  );
}

export default TabBtnConsignee;
