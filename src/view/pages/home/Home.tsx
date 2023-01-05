import React from "react";
import Navbar from "../navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import MenuBar from "../tabPageMenu/MenuBar";
const Home: React.FC<{}> = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Navbar />
        </div>
      </div>
      <div className="row">
        <div className="col-2 ">
          <MenuBar />
        </div>
        <div className="col-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
