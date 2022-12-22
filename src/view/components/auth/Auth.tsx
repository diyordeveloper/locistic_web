import React from "react";
import { Outlet } from "react-router-dom";

function Auth() {
  return (
    <div>
      <h1>Register</h1>
      <Outlet />
    </div>
  );
}

export default Auth;
