import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.css";
import LOGO from "../../assets/icons/LOGO.svg";
import Search from "../../assets/icons/Search.svg";
import Email from "../../assets/icons/Email.svg";
import Notification from "../../assets/icons/Notification.svg";
import Avatarka from "../../assets/images/Avatarka.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Navbar: React.FC<{}> = () => {
  return (
    <>
      <div className="navbar__">
        <a href="#" className="logo__">
          <img src={LOGO} className="logo__svg" alt="Error..." />
        </a>
        <div className="nav__block">
          <div className="block__1">
            <div className="search__">
              <img src={Search} alt="Error..." />
              <input type="text" placeholder="Search" />
            </div>
            <div className="icons__">
              <a href="#">
                <img src={Notification} alt="Error..." />
              </a>
              <a href="#">
                <img src={Email} alt="Error..." />
              </a>
            </div>
          </div>
          <div className="block__2">
            <a href="#" className="avatarka__">
              <img src={Avatarka} alt="Error..." />
            </a>
            <div className="user_menu__">
              <span className="name_view">
                Raphael Roytman{" "}
                <span>
                  <KeyboardArrowDownIcon />
                </span>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
