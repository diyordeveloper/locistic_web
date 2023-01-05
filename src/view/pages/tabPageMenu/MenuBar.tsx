import React from "react";
import Navbar from "../navbar/Navbar";
import GridViewIcon from "@mui/icons-material/GridView";
import { Routes, Route, NavLink } from "react-router-dom";
import "./style.css";
const Menu: React.FC<{}> = () => {
  return (
    <>
      <div className="menu_bar__">
        <NavLink to="/dashboard" className={"link_btn__"}>
          <GridViewIcon className="icon__" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/loadboard" className={"link_btn__"}>
          <GridViewIcon className="icon__" />
          <span>Load Board</span>
        </NavLink>
        <NavLink to="/drivers" className={"link_btn__"}>
          <GridViewIcon className="icon__" />
          <span>Drivers</span>
        </NavLink>
        <NavLink to="/accounting" className={"link_btn__"}>
          <GridViewIcon className="icon__" />
          <span>Accounting</span>
        </NavLink>
        <NavLink to="/trailers" className={"link_btn__"}>
          <GridViewIcon className="icon__" />
          <span>Trailers</span>
        </NavLink>
        <NavLink to="/userrules" className={"link_btn__"}>
          <GridViewIcon className="icon__" />
          <span>User rules</span>
        </NavLink>
      </div>
    </>
  );
};

export default Menu;
