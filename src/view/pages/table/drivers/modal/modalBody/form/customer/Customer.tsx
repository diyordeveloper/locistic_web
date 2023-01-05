import React from "react";
import Select from "../../../../../../../components/select/Select";
import InputText from "../../../../../../../components/input/InputText";
function Customer() {
  return (
    <>
      <div className="forms__">
        <div className="row__">
          <div className="box__">
            <label htmlFor="one__1">Load #</label>
            <InputText className="txt_input__" id="one__1" />
          </div>
          <div className="box__">
            <label htmlFor="one__2">Bill To</label>
            <InputText className="txt_input__" id="one__2" />
          </div>
          <div className="box__">
            <label htmlFor="one__3">Dispatcher</label>
            <Select className="select_data__" id="one__3">
              <option value=""></option>
              <option value="">Diyorbek 1</option>
            </Select>
          </div>
          <div className="box__">
            <div className="radio_check__">
              <div className="check_row__">
                <input
                  type="radio"
                  checked
                  value={""}
                  name="default-radio"
                  id="radio_1"
                  className="radio__"
                />
                <label htmlFor="radio_1">Sales Rep 1</label>
              </div>
              <div className="check_row__">
                <input
                  type="radio"
                  value={""}
                  name="default-radio"
                  id="radio_2"
                  className="radio__"
                />
                <label htmlFor="radio_2">Sales Rep 2</label>
              </div>
            </div>
            <Select className="select_data__">
              <option value="Please Select Rep 1">Please Select Rep 1</option>
              <option value="Please Select Rep 2">Please Select Rep 2</option>
            </Select>
          </div>
          <div className="box__">
            <label htmlFor="one__4">Status</label>
            <Select className="select_data__" id="one__4">
              <option value="On Route">On Route</option>
              <option value="Diyorbek 2">Diyorbek 2</option>
            </Select>
          </div>
          <div className="box__">
            <label htmlFor="one__5">W/O</label>
            <InputText className="txt_input__" id="one__5" />
          </div>
        </div>
        <div className="row__">
          <div className="box__">
            <label htmlFor="one__4">Type</label>
            <Select className="select_data__" id="one__4">
              <option value=""></option>
              <option value="Diyorbek 2">Diyorbek 2</option>
            </Select>
          </div>
          <div className="box__">
            <label htmlFor="one__aassaas">Rate</label>
            <InputText className="txt_input__" id="one__aassaas" />
          </div>
          <div className="box__">
            <label htmlFor="one__aassaas12">P/Ds</label>
            <InputText className="txt_input__" id="one__aassaas12" />
          </div>
          <div className="box__">
            <div className="radio_check__2">
              <div className="check_row__">
                <label htmlFor="rate_1">P/Ds</label>
              </div>
              <div className="check_row__">
                <input
                  type="radio"
                  value={""}
                  name="default_radio_1"
                  checked
                  id="default_radio_1"
                  className="radio__"
                />
                <label htmlFor="rate_1">Rate %</label>
              </div>
            </div>
            <InputText className="txt_input__" id="one__aassaas12" />
          </div>
          <div className="box__">
            <label htmlFor="one__aassaas12">Other Charges</label>
            <InputText className="txt_input__" id="one__aassaas12" />
          </div>
          <div className="box__">
            <label htmlFor="one__aassaas12">Rate</label>
            <InputText
              defaultValue={"0.00"}
              className="txt_input__"
              id="one__aassaas12"
            />
          </div>
        </div>
        <div className="row__">
          <div className="box__">
            <div className="radio_check__">
              <div className="check_row__">
                <input
                  type="radio"
                  checked
                  value={""}
                  name="default-radiooo"
                  id="radio_1"
                  className="radio__"
                />
                <label htmlFor="radio_1">Carrier</label>
              </div>
              <div className="check_row__">
                <input
                  type="radio"
                  value={""}
                  name="default-radiooo"
                  id="radio_2"
                  className="radio__"
                />
                <label htmlFor="radio_2">Driver</label>
              </div>
            </div>
            <Select className="select_data__">
              <option value="Please Select Rep 1">Please Select Rep 1</option>
              <option value="Please Select Rep 2">Please Select Rep 2</option>
            </Select>
          </div>
          <div className="box__">
            <label htmlFor="one__3">Equipment Type</label>
            <Select className="select_data__" id="one__3">
              <option value=""></option>
              <option value="">Equipment Type</option>
            </Select>
          </div>
          <div className="box__">
            <label htmlFor="one__3asdasdasd">Truck</label>
            <Select className="select_data__" id="one__3asdasdasd">
              <option value=""></option>
              <option value="">Equipment Type Truck</option>
            </Select>
          </div>
          <div className="box__">
            <label htmlFor="one__3asdasdasd">Trailer</label>
            <Select className="select_data__" id="one__3asdasdasd">
              <option value=""></option>
              <option value="">Equipment Type Trailer</option>
            </Select>
          </div>
          <div className="box__">
            <label htmlFor="one__5">Flat Rate</label>
            <InputText className="txt_input__" id="one__5" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Customer;
