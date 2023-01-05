import React, { useRef } from "react";
import InputText from "../../../../../../../components/input/InputText";
import FileUploadSkripka from "../../../../../../../assets/icons/SkripkaFileUpload.svg";
function UploadRc() {
  const inputFileRef = useRef(null);
  const onBtnClick = () => {
    // @ts-ignore
    inputFileRef.current.click();
  };
  return (
    <>
      <div className="row__">
        <div className="box__">
          <label htmlFor="ProMiles">ProMiles Miles</label>
          <InputText className="txt_input__" id="ProMiles" />
        </div>
        <div className="box__">
          <label htmlFor="Emptys">Empty</label>
          <InputText className="txt_input__" id="Emptys" />
        </div>
        <div className="box__">
          <label htmlFor="Driver">Driver Miles</label>
          <InputText className="txt_input__" id="Driver" />
        </div>
        <div className="box__">
          <label htmlFor="ProMilesEmpty">Empty</label>
          <InputText className="txt_input__" id="ProMilesEmpty" />
        </div>
        <div className="box__">
          <label htmlFor="Hourly">Hourly</label>
          <InputText className="txt_input__" id="Hourly" />
        </div>
      </div>
      <div className="row__">
        <div className="block__">
          <span className="txt__upload__">Upload RC</span>
          <input
            hidden
            type="file"
            // onChange={(e: any) => e.target.value}
            ref={inputFileRef}
          />
          <div className="fileUpload__" onClick={onBtnClick}>
            <img src={FileUploadSkripka} className="img-fluid" alt="Error..." />
            <span className="txt__">Upload file</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadRc;
