import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import "./style.css";
function Table() {
  const dataTable = [
    {
      check: false,
      id: Math.random(),
      wo: "1142V4P8S",
      driver: "Patel Hiteshkumar",
      ship_date: "2022-11-05",
      del_date: "2022-11-05",
      custimer: "Amazon",
      origin: "LIT1 / Little Rock, AR",
      destination: "LIT1 / Little Rock, AR",
      bol: true,
      pod: false,
      select: [
        { option: "Open" },
        { option: "Diyorbek" },
        { option: "Developer" },
      ],
    },
    {
      check: false,
      id: Math.random(),
      wo: "1142V4P8S",
      driver: "Patel Hiteshkumar",
      ship_date: "2022-11-05",
      del_date: "2022-11-05",
      custimer: "Amazon",
      origin: "LIT1 / Little Rock, AR",
      destination: "LIT1 / Little Rock, AR",
      bol: true,
      pod: false,
      select: [
        { option: "Open" },
        { option: "Diyorbek" },
        { option: "Developer" },
      ],
    },
    {
      check: false,
      id: Math.random(),
      wo: "1142V4P8S",
      driver: "Patel Hiteshkumar",
      ship_date: "2022-11-05",
      del_date: "2022-11-05",
      custimer: "Amazon",
      origin: "LIT1 / Little Rock, AR",
      destination: "LIT1 / Little Rock, AR",
      bol: true,
      pod: false,
      select: [
        { option: "Open" },
        { option: "Diyorbek" },
        { option: "Developer" },
      ],
    },
    {
      check: false,
      id: Math.random(),
      wo: "1142V4P8S",
      driver: "Patel Hiteshkumar",
      ship_date: "2022-11-05",
      del_date: "2022-11-05",
      custimer: "Amazon",
      origin: "LIT1 / Little Rock, AR",
      destination: "LIT1 / Little Rock, AR",
      bol: true,
      pod: false,
      select: [
        { option: "Open" },
        { option: "Diyorbek" },
        { option: "Developer" },
      ],
    },
    {
      check: false,
      id: Math.random(),
      wo: "1142V4P8S",
      driver: "Patel Hiteshkumar",
      ship_date: "2022-11-05",
      del_date: "2022-11-05",
      custimer: "Amazon",
      origin: "LIT1 / Little Rock, AR",
      destination: "LIT1 / Little Rock, AR",
      bol: true,
      pod: false,
      select: [
        { option: "Open" },
        { option: "Diyorbek" },
        { option: "Developer" },
      ],
    },
    {
      check: false,
      id: Math.random(),
      wo: "1142V4P8S",
      driver: "Patel Hiteshkumar",
      ship_date: "2022-11-05",
      del_date: "2022-11-05",
      custimer: "Amazon",
      origin: "LIT1 / Little Rock, AR",
      destination: "LIT1 / Little Rock, AR",
      bol: true,
      pod: false,
      select: [
        { option: "Open" },
        { option: "Diyorbek" },
        { option: "Developer" },
      ],
    },
    {
      check: false,
      id: Math.random(),
      wo: "1142V4P8S",
      driver: "Patel Hiteshkumar",
      ship_date: "2022-11-05",
      del_date: "2022-11-05",
      custimer: "Amazon",
      origin: "LIT1 / Little Rock, AR",
      destination: "LIT1 / Little Rock, AR",
      bol: true,
      pod: false,
      select: [
        { option: "Open" },
        { option: "Diyorbek" },
        { option: "Developer" },
      ],
    },
    {
      check: false,
      id: Math.random(),
      wo: "1142V4P8S",
      driver: "Patel Hiteshkumar",
      ship_date: "2022-11-05",
      del_date: "2022-11-05",
      custimer: "Amazon",
      origin: "LIT1 / Little Rock, AR",
      destination: "LIT1 / Little Rock, AR",
      bol: true,
      pod: false,
      select: [
        { option: "Open" },
        { option: "Diyorbek" },
        { option: "Developer" },
      ],
    },
    {
      check: false,
      id: Math.random(),
      wo: "1142V4P8S",
      driver: "Patel Hiteshkumar",
      ship_date: "2022-11-05",
      del_date: "2022-11-05",
      custimer: "Amazon",
      origin: "LIT1 / Little Rock, AR",
      destination: "LIT1 / Little Rock, AR",
      bol: true,
      pod: false,
      select: [
        { option: "Open" },
        { option: "Diyorbek" },
        { option: "Developer" },
      ],
    },
    {
      check: false,
      id: Math.random(),
      wo: "1142V4P8S",
      driver: "Patel Hiteshkumar",
      ship_date: "2022-11-05",
      del_date: "2022-11-05",
      custimer: "Amazon",
      origin: "LIT1 / Little Rock, AR",
      destination: "LIT1 / Little Rock, AR",
      bol: true,
      pod: false,
      select: [
        { option: "Open" },
        { option: "Diyorbek" },
        { option: "Developer" },
      ],
    },
    {
      check: false,
      id: Math.random(),
      wo: "1142V4P8S",
      driver: "Patel Hiteshkumar",
      ship_date: "2022-11-05",
      del_date: "2022-11-05",
      custimer: "Amazon",
      origin: "LIT1 / Little Rock, AR",
      destination: "LIT1 / Little Rock, AR",
      bol: true,
      pod: false,
      select: [
        { option: "Open" },
        { option: "Diyorbek" },
        { option: "Developer" },
      ],
    },
    {
      check: false,
      id: Math.random(),
      wo: "1142V4P8S",
      driver: "Patel Hiteshkumar",
      ship_date: "2022-11-05",
      del_date: "2022-11-05",
      custimer: "Amazon",
      origin: "LIT1 / Little Rock, AR",
      destination: "LIT1 / Little Rock, AR",
      bol: true,
      pod: false,
      select: [
        { option: "Open" },
        { option: "Diyorbek" },
        { option: "Developer" },
      ],
    },
  ];

  const [data, setData] = useState<any>(dataTable);
  const [currentPage, setCurrentPage] = useState<any>(1);
  const [postsPerPage] = useState<any>(8);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const [paginateData, setPaginateData] = useState<any>(currentPosts);

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
              <th>
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  onChange={(e) => {
                    let checked = e.target.checked;
                    setPaginateData(
                      paginateData.map((d: any) => {
                        d.check = checked;
                        console.log(d.check);
                        return d;
                      })
                    );
                  }}
                  className="mt-1 cursor-pointer w-4 h-4 text-blue-600 bg-gray-100   border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </th>
              <th>Load#</th>
              <th>W/O #</th>
              <th>Driver/Carrier</th>
              <th>Ship Date</th>
              <th>Del Date</th>
              <th>Custimer</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>BOL</th>
              <th>POD</th>
              <th>Load Status</th>
            </tr>
            <div className="br_h"></div>
          </thead>
          <tbody>
            {paginateData.map((item: any, idx: number) => (
              <>
                <tr key={idx}>
                  <td>
                    <input
                      id="checkbox-table-search-3"
                      type="checkbox"
                      className="mt-1 cursor-pointer w-4 h-4 text-blue-600 bg-gray-100   border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={(event) => {
                        let checked = event.target.checked;
                        setPaginateData(
                          paginateData.map((data: any) => {
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
                  <td>{item.wo}</td>
                  <td>{item.driver}</td>
                  <td>{item.ship_date}</td>
                  <td>{item.del_date}</td>
                  <td>{item.custimer}</td>
                  <td>{item.origin}</td>
                  <td>{item.destination}</td>
                  <td>
                    <div
                      className={`${item.bol ? "success__" : "danger__"}`}
                    ></div>
                  </td>
                  <td>
                    <div
                      className={`${item.pod ? "success__" : "danger__"}`}
                    ></div>
                  </td>
                  <td>
                    <select
                      // onChange={(e: any) => setDateSelectOne(e.target.value)}
                      className="select_data__"
                      id="three_date__"
                      // value={dateSelectOne}
                    >
                      {item.select.map((select: any, idx: any) => (
                        <option value={select.option}>{select.option}</option>
                      ))}
                    </select>
                  </td>
                </tr>
                <div className="br_b"></div>
              </>
            ))}
          </tbody>
        </table>
      </div>
      <div className="paginate__">
        {/* {pageNumbers.map((itm: any) => (
          <>
            <button
              key={itm}
              className={`btn_paginate ${
                itm == currentPage ? "active__" : ""
              } `}
              onClick={() => paginate(itm)}
            >
              {itm}
            </button>
          </>
        ))} */}
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
