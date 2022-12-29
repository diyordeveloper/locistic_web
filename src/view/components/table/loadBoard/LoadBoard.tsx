import React, { useState } from "react";
import FiltersTop from "./topbar/filtersTop/FiltersTop";
import SortingBtn from "./topbar/sortingBtns/SortingBtn";
import Table from "./table/Table";
import Modal from "./modal/Modal";
import "./style.css";

const LoadBoard = () => {
  const [modalOpen, setModalOpen] = useState<any>(true);
  return (
    <>
      <div className="loadboard__">
        {/* <FiltersTop /> */}
        <SortingBtn
          // @ts-ignore
          setModalOpen={setModalOpen}
        />
        <Table />
      </div>
      {modalOpen && (
        <Modal
          // @ts-ignore
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default LoadBoard;
