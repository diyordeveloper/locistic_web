import React from "react";
import Select from "../../../../../../../components/select/Select";
import InputText from "../../../../../../../components/input/InputText";
import InputDate from "../../../../../../../components/input/InputDate";
function Consignee() {
  return (
    <>
      <div className="forms__">
        <div className="row__">
          <div className="box__">
            <label htmlFor="one__1aaaaaaaa">Shipper</label>
            <InputText className="txt_input__" id="one__1aaaaaaaa" />
          </div>
          <div className="box__">
            <label htmlFor="one__1aaaaaa1a">Location</label>
            <InputText className="txt_input__" id="one__1aaaaaa1a" />
          </div>
          <div className="box__">
            <label htmlFor="one__1aaaaaasaa">Date</label>
            <InputDate className="txt_input__" id="one__1aaaaaasaa" />
          </div>
          <div className="box__">
            <div className="radio_check__2">
              <div className="check_row__">
                <input
                  type="radio"
                  value={""}
                  name="default_radiooooo_1"
                  checked
                  id="default_radio_1"
                  className="radio__"
                />
                <label htmlFor="rate_1">Show time</label>
              </div>
            </div>
            <InputText className="txt_input__" id="one__aassaas12a" />
          </div>
        </div>
        <div className="row__">
          <div className="box__">
            <label htmlFor="Descriptiona">Description</label>
            <InputText className="txt_input__" id="Descriptiona" />
          </div>
          <div className="box__">
            <label htmlFor="etca">
              Type {"("} TL, LTL, Pallets, etc.{")"}
            </label>
            <InputText className="txt_input__" id="etca" />
          </div>
          <div className="box__">
            <label htmlFor="Qtya">Qty</label>
            <InputText className="txt_input__" id="Qtya" />
          </div>
          <div className="box__">
            <label htmlFor="lbsa">
              Weight {"("} lbs {")"}
            </label>
            <InputText className="txt_input__" id="lbsa" />
          </div>
          <div className="box__">
            <label htmlFor="Valueaaa">
              Value {"("}${")"}
            </label>
            <InputText className="txt_input__" id="Valueaaa" />
          </div>
        </div>
        <div className="row__">
          <div className="box__">
            <label htmlFor="Notesasas">Delivery Notes</label>
            <InputText className="txt_input__" id="Notesasas" />
          </div>{" "}
          <div className="box__">
            <label htmlFor="Numbersaa">P.O.Numbers</label>
            <InputText className="txt_input__" id="Numbersaa" />
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Consignee;
