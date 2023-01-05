import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "../pages/home/Home";
import Auth from "../pages/auth/Auth";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/table/dashboard/Dashboard";
import LoadBoard from "../pages/table/loadBoard/LoadBoard";
import Drivers from "../pages/table/drivers/Drivers";
import Accounting from "../pages/table/accounting/Accounting";
import Trailers from "../pages/table/trailers/Trailers";
import UserRules from "../pages/table/userRules/UserRules";
import { useEffect } from "react";
import { useState } from "react";

const Routers: React.FC<{}> = () => {
  const navigation = useNavigate();
  const location = useLocation();

  var arr: any = [];
  const [user, setUser] = useState<any>("1");
  useEffect(() => {
    if (user === "") {
      navigation("/auth/login");
    } else {
      if (location.pathname == "/") {
        navigation("/dashboard");
      }
    }
  }, [user]);
  return (
    <Routes>
      <Route path="/auth" element={<Auth />}>
        <Route path="/auth/login" element={<Login />} />
      </Route>
      <Route path="/" element={<Home />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loadboard" element={<LoadBoard />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/trailers" element={<Trailers />} />
        <Route path="/userrules" element={<UserRules />} />
      </Route>
    </Routes>
  );
};

export default Routers;
