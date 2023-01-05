import React from "react";
import Select from "../../../../../../../components/select/Select";
import InputText from "../../../../../../../components/input/InputText";
import InputDate from "../../../../../../../components/input/InputDate";
function Shipper() {
  return (
    <>
      <div className="forms__">
        <div className="row__">
          <div className="box__">
            <label htmlFor="one__1aaaaaa">Shipper</label>
            <InputText className="txt_input__" id="one__1aaaaaa" />
          </div>
          <div className="box__">
            <label htmlFor="one__1aaaaaa1">Location</label>
            <InputText className="txt_input__" id="one__1aaaaaa1" />
          </div>
          <div className="box__">
            <label htmlFor="one__1aaaaaasa">Date</label>
            <InputDate className="txt_input__" id="one__1aaaaaasa" />
          </div>
          <div className="box__">
            <div className="radio_check__2">
              <div className="check_row__">
                <input
                  type="radio"
                  value={""}
                  name="default_radiooooo_1aaaa"
                  checked
                  id="default_radio_1"
                  className="radio__"
                />
                <label htmlFor="rate_1">Show time</label>
              </div>
            </div>
            <InputText className="txt_input__" id="one__aassaas12" />
          </div>
        </div>
        <div className="row__">
          <div className="box__">
            <label htmlFor="Description">Description</label>
            <InputText className="txt_input__" id="Description" />
          </div>
          <div className="box__">
            <label htmlFor="etc">
              Type {"("} TL, LTL, Pallets, etc.{")"}
            </label>
            <InputText className="txt_input__" id="etc" />
          </div>
          <div className="box__">
            <label htmlFor="Qty">Qty</label>
            <InputText className="txt_input__" id="Qty" />
          </div>
          <div className="box__">
            <label htmlFor="lbs">
              Weight {"("} lbs {")"}
            </label>
            <InputText className="txt_input__" id="lbs" />
          </div>
          <div className="box__">
            <label htmlFor="Value">
              Value {"("}${")"}
            </label>
            <InputText className="txt_input__" id="Value" />
          </div>
        </div>
        <div className="row__">
          <div className="box__">
            <label htmlFor="Notes">Shipping Notes</label>
            <InputText className="txt_input__" id="Notes" />
          </div>{" "}
          <div className="box__">
            <label htmlFor="Numbers">P.O.Numbers</label>
            <InputText className="txt_input__" id="Numbers" />
          </div>{" "}
          <div className="box__">
            <label htmlFor="1123123123">Customs Broker</label>
            <InputText className="txt_input__" id="1123123123" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Shipper;
