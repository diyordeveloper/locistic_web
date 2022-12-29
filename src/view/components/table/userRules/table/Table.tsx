import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./style.css";
function Table() {
  const dataTable = [
    {
      check: false,
      id: Math.random(),
      newUser: "Rafael",
      username: "John",
      role: "Dispatcher",
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
              <th>New user</th>
              <th>Username</th>
              <th>Role</th>
              <th></th>
              <th></th>
              <th></th>
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
                  <td> {item.newUser}</td>
                  <td>{item.username}</td>
                  <td>{item.role}</td>
                  <td></td> 
                  <td></td> 
                  <td>
                    <button className="btn_views">View statistics</button>
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
