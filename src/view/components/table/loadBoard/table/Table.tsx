import React from "react";
import "./style.css";
function Table() {
  return (
    <>
      <div className="table__">
        <table>
          <thead>
            <tr>
              <th>chek</th>
              <th>Load#</th>
              <th>W/O #</th>
              <th>Driver/Carrier</th>
              <th>  Ship Date</th>
              <th>Del Date</th>
              <th>Custimer</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>BOL</th>
              <th>POD</th>
              <th>Load Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type={"checkbox"} />
              </td>
              <td>3072</td>
              <td>1142V4P8S</td>
              <td>Patel Hiteshkumar</td>
              <td>2022-11-05</td>
              <td>2022-11-05</td>
              <td>Amazon</td>
              <td>LIT1 / Little Rock, </td>
              <td>LIT1 / Little Rock, </td>
              <td>qizil</td>
              <td>yangl</td>
              <td>Select</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
