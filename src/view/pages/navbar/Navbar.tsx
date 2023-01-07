import React from "react";
import { Link, Outlet } from "react-router-dom";
import LOGO from "../../assets/icons/LOGO.svg";
import Search from "../../assets/icons/Search.svg";
import Email from "../../assets/icons/Email.svg";
import Notification from "../../assets/icons/Notification.svg";
import Avatarka from "../../assets/images/Avatarka.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./style.css";
import SearchInput from "../../components/input/SearchInput";
const Navbar: React.FC<{}> = () => {
  return (
    <>
      <div className="navbar__">
        <a href="#" className="logo__">
          <img src={LOGO} className="logo__svg" alt="Error..." />
        </a>
        <div className="nav__block">
          <div className="block__1">
            <SearchInput placeholder="Search" />
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
