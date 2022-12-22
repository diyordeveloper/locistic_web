import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "../components/home/Home";
import Auth from "../components/auth/Auth";
import Login from "../components/auth/Login";
import Dashboard from "../components/table/dashboard/Dashboard";
import LoadBoard from "../components/table/loadBoard/LoadBoard";
import Drivers from "../components/table/drivers/Drivers";
import Accounting from "../components/table/accounting/Accounting";
import Trailers from "../components/table/trailers/Trailers";
import UserRules from "../components/table/userRules/UserRules";
import { useEffect } from "react";
import { useState } from "react";

const Routers: React.FC<{}> = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const localniyUser: any = localStorage.getItem("user");
  var arr: any = [];
  const [user, setUser] = useState<any>(localniyUser | arr);
  useEffect(() => {
    (async () => {
      const a: any = await localStorage.getItem("user");
      setUser(a);
      console.log("data:" + a);
    })();
  }, [localStorage]);
  useEffect(() => {
    if (user == null) {
      navigation("/auth/login");
    } else {
      if (location.pathname == "/") {
        navigation("/dashboard");
      }
    }
  }, []);
  return (
    <Routes>
      <Route path="/auth" element={<Auth />}>
        <Route path="/auth/login" element={<Login />} />
      </Route>
      <Route path="/" element={<Home />}>
        <Route index path="/dashboard" element={<Dashboard />} />
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
