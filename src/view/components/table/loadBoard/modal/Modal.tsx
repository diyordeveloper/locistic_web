import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import "./style.css";
import OopsModal from "./oopsModal/OopsModal";
import ModalBody from "./modalBody/ModalBody";
interface Props {
  setModalOpen: () => void;
}
function Modal({ setModalOpen }: Props) {
  const [ooopsModal, setOoopsModal] = useState<any>(false);
  return (
    <div className="modals__">
      <div className="modal__">
        <div className="modal_header__">
          <span className="txt__">New Active Load</span>
          <ClearIcon // @ts-ignore
            onClick={() => setModalOpen((p: any) => !p)}
            className="icon__"
          />
        </div>
        <div className="modal_body">
          <ModalBody />
        </div>
        <div className="modal_footer__">
          <div className="btns__">
            <button
              className="btn_cancel" // @ts-ignore
              onClick={() => setModalOpen((p: any) => !p)}
            >
              Cancel
            </button>
            <button
              className="btn_save"
              // @ts-ignore
              onClick={() => setOoopsModal((p: any) => !p)}
            >
              Save
            </button>
          </div>
        </div>
        {ooopsModal && (
          <OopsModal
            // @ts-ignore
            setOoopsModal={setOoopsModal}
          />
        )}
      </div>
    </div>
  );
}

export default Modal;
