import moment from "moment";
import React, { useEffect, useState } from "react";
import InputDate from "../../../../../components/input/InputDate";
import Select from "../../../../../components/select/Select";
import "./style.css";
function FiltersTop() {
  const [dateOne, setDateOne] = useState<any>("yyyy-MM-dd");
  const [dateTwo, setDateTwo] = useState<any>("yyyy-MM-dd");
  const [dateSelectOne, setDateSelectOne] = useState<any>("");
  const [dateSelectTwo, setDateSelectTwo] = useState<any>("");
  const [resetDisabled, setDesetDisabled] = useState<any>(true);
  function ResetDate() {
    setDateSelectOne("");
    setDateSelectTwo("");
    setDesetDisabled(true);
  }
  useEffect(() => {
    if (dateSelectOne !== "") {
      setDesetDisabled(false);
    }
  }, [dateSelectOne]);
  return (
    <>
      <div className="filters_bar__">
        <span className="txt__">Enter Information</span>
        <div className="filter_row__">
          <div className="block__1">
            <div className="box__">
              <label htmlFor="one_date__">Pickup From</label>
              <InputDate
                // value={dateOne}
                // onChange={setDateOne}
                id="one_date__"
                className={"input_date__"}
              />
            </div>
            <div className="box__">
              <label htmlFor="two_date__">Pickup To</label>
              <InputDate
                // value={dateTwo}
                // onChange={setDateTwo}
                id="two_date__"
                className={`input_date__  `}
              />
            </div>
            <div className="box__">
              <label htmlFor="three_date__">State From</label>
              <Select
                onChange={setDateSelectOne}
                className="select_data__"
                id="three_date__"
                value={dateSelectOne}
              >
                <option value=""></option>
                <option value="Diyorbek 1">Diyorbek 1</option>
                <option value="Diyorbek 1">Diyorbek 1</option>
                <option value="Diyorbek 1">Diyorbek 1</option>
              </Select>
            </div>
            <div className="box__">
              <label htmlFor="for_date__">State To</label>
              <Select 
                onChange={setDateSelectOne}
                className="select_data__"
                id="for_date__"
                value={dateSelectTwo}
              >
                <option value=""></option>
                <option value="Diyorbek 1">Diyorbek 1</option>
                <option value="Diyorbek 1">Diyorbek 1</option>
                <option value="Diyorbek 1">Diyorbek 1</option>
              </Select>
            </div>
          </div>
          <div className="block__2">
            <button className="btn_one">Apply Filters</button>
            <button
              className={`btn_two ${dateSelectOne === "" ? "" : "active__"}`}
              onClick={ResetDate}
              disabled={resetDisabled}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FiltersTop;
