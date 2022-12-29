import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "./style.css";
function Table() {
  const dataTable = [
    {
      check: false,
      id: 1231,
      trilerType: "Crane Truck",
      licence: "DF2141241GF",
      plate: "01.09.2002",
      enspection: "01.09.2002",
    },
    {
      check: false,
      id: 1231,
      trilerType: "Crane Truck",
      licence: "DF2141241GF",
      plate: "01.09.2002",
      enspection: "01.09.2002",
    },
    {
      check: false,
      id: 1231,
      trilerType: "Crane Truck",
      licence: "DF2141241GF",
      plate: "01.09.2002",
      enspection: "01.09.2002",
    },
    {
      check: false,
      id: 1231,
      trilerType: "Crane Truck",
      licence: "DF2141241GF",
      plate: "01.09.2002",
      enspection: "01.09.2002",
    },
    {
      check: false,
      id: 1231,
      trilerType: "Crane Truck",
      licence: "DF2141241GF",
      plate: "01.09.2002",
      enspection: "01.09.2002",
    },
    {
      check: false,
      id: 1231,
      trilerType: "Crane Truck",
      licence: "DF2141241GF",
      plate: "01.09.2002",
      enspection: "01.09.2002",
    },
    {
      check: false,
      id: 1231,
      trilerType: "Crane Truck",
      licence: "DF2141241GF",
      plate: "01.09.2002",
      enspection: "01.09.2002",
    },
    {
      check: false,
      id: 1231,
      trilerType: "Crane Truck",
      licence: "DF2141241GF",
      plate: "01.09.2002",
      enspection: "01.09.2002",
    },
    {
      check: false,
      id: 1231,
      trilerType: "Crane Truck",
      licence: "DF2141241GF",
      plate: "01.09.2002",
      enspection: "01.09.2002",
    },
    {
      check: false,
      id: 1231,
      trilerType: "Crane Truck",
      licence: "DF2141241GF",
      plate: "01.09.2002",
      enspection: "01.09.2002",
    },
    {
      check: false,
      id: 1231,
      trilerType: "Crane Truck",
      licence: "DF2141241GF",
      plate: "01.09.2002",
      enspection: "01.09.2002",
    },
    {
      check: false,
      id: 1231,
      trilerType: "Crane Truck",
      licence: "DF2141241GF",
      plate: "01.09.2002",
      enspection: "01.09.2002",
    },
    {
      check: false,
      id: 1231,
      trilerType: "Crane Truck",
      licence: "DF2141241GF",
      plate: "01.09.2002",
      enspection: "01.09.2002",
    },
    {
      check: false,
      id: 1231,
      trilerType: "Crane Truck",
      licence: "DF2141241GF",
      plate: "01.09.2002",
      enspection: "01.09.2002",
    },
    {
      check: false,
      id: 1231,
      trilerType: "Crane Truck",
      licence: "DF2141241GF",
      plate: "01.09.2002",
      enspection: "01.09.2002",
    },
    {
      check: false,
      id: 1231,
      trilerType: "Crane Truck",
      licence: "DF2141241GF",
      plate: "01.09.2002",
      enspection: "01.09.2002",
    },
    {
      check: false,
      id: 1231,
      trilerType: "Crane Truck",
      licence: "DF2141241GF",
      plate: "01.09.2002",
      enspection: "01.09.2002",
    },
    {
      check: false,
      id: 1231,
      trilerType: "Crane Truck",
      licence: "DF2141241GF",
      plate: "01.09.2002",
      enspection: "01.09.2002",
    },
    {
      check: false,
      id: 1231,
      trilerType: "Crane Truck",
      licence: "DF2141241GF",
      plate: "01.09.2002",
      enspection: "01.09.2002",
    },
  ];

  const [data, setData] = useState<any>(dataTable);
  const [currentPage, setCurrentPage] = useState<any>(1);
  const [postsPerPage] = useState<any>(8);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  const pageNumbers: any = [];

  for (let i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  function handleChange(e: any, indx: any) {
    paginate(indx);
  }
  return (
    <>
      <div className="tables">
        <table className="table__  table_rounded">
          <thead>
            <tr>
              <th></th>
              <th>ID </th>
              <th>Trailer type</th>
              <th>License plate</th>
              <th>Plate Expiry</th>
              <th>Inspection expiration</th>
              <th>Status</th>
              <th></th>
            </tr>
            <tr>
              <th></th>
              <th>
                <input type="text" className="input__" />{" "}
              </th>
              <th>
                <select
                  // onChange={(e: any) => setDateSelectOne(e.target.value)}
                  className="select_data__"
                  id="three_date__"
                  // value={dateSelectOne}
                >
                  <option value="Diyorbek 1">Crane Truck</option>
                  <option value="Diyorbek 1">Diyorbek 2</option>
                  <option value="Diyorbek 1">Diyorbek 3</option>
                </select>
              </th>
              <th>
                <input type="text" className="input__" />
              </th>
              <th>
                <input type="text" className="input__" />
              </th>
              <th>
                <input type="text" className="input__" />
              </th>
              <th>
                <input type="text" className="input__" />
              </th>
              <th></th>
            </tr>
            <div className="br_h"></div>
          </thead>
          <tbody>
            {currentPosts.map((item: any, idx: number) => (
              <>
                <tr key={idx}>
                  <td>
                    <input
                      id="checkbox-table-search-3"
                      type="checkbox"
                      className="mt-1 cursor-pointer w-4 h-4 text-blue-600 bg-gray-100   border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={(event) => {
                        let checked = event.target.checked;
                        setData(
                          data.map((data: any) => {
                            if (item.id === data.id) {
                              data.check = checked;
                            }
                            return data;
                          })
                        );
                      }}
                      checked={item.check}
                    />
                  </td>
                  <td> {item.id}</td>
                  <td>{item.trilerType}</td>
                  <td>{item.licence}</td>
                  <td>{item.plate}</td>
                  <td>{item.enspection}</td>
                  <td>
                    <div className="select__">
                      <div className="select_head">
                        <span>Empty</span>
                        <KeyboardArrowDownOutlinedIcon className="icon__" />
                      </div>
                      <div className="select_body">
                        <div className="text_box__">
                          <strong>С 17:00</strong> 
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="icons__">
                      <button className="btn__">
                        <CreateOutlinedIcon className="iocn__" />
                      </button>
                      <button className="btn__">
                        <DeleteOutlineOutlinedIcon className="iocn__" />
                      </button>
                    </div>
                  </td>
                </tr>
                <div className="br_b"></div>
              </>
            ))}
          </tbody>
        </table>
      </div>
      <div className="paginate__">
        <Pagination
          count={pageNumbers.length}
          onChange={handleChange}
          color={"primary"}
          hidePrevButton
          hideNextButton
        />
      </div>
    </>
  );
}

export default Table;
