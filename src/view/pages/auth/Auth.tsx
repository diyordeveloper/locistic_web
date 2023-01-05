import React from "react";
import { Outlet } from "react-router-dom";
import "./style.css";
function Auth() {
  return (
    <div className="auth__">
      <Outlet />
    </div>
  );
}

export default Auth;
