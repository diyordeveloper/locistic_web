import React, { useRef } from "react";
import "./style.css";
import OoopsSvg from "../../../../../assets/icons/Ooops.svg";
interface Props {
  setOoopsModal: () => void;
}
function OopsModal({ setOoopsModal }: Props) {
  const inputFileRef = useRef(null);
  const onBtnClick = () => {
    // @ts-ignore
    inputFileRef.current.click();
    // @ts-ignore
    setOoopsModal((p: any) => !p);
  };
  return (
    <div className="modal_ooops__">
      <div className="modal_ooops_mini__">
        <div className="block__">
          <img src={OoopsSvg} className="ops__" alt="Error..." />
          <span className="txt__">You didn't upload Rate confirmation</span>
          <input hidden type="file" ref={inputFileRef} />
          <button
            className="btn__"
            // @ts-ignore
            onClick={onBtnClick}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default OopsModal;
