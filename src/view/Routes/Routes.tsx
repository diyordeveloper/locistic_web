import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Navbar from "../components/navbar/Navbar";
import Auth from "../components/auth/Auth";
import Login from "../components/auth/Login";
import Dashboard from "../components/table/dashboard/Dashboard";
import LoadBoard from "../components/table/loadBoard/LoadBoard";
import Drivers from "../components/table/drivers/Drivers";
import Accounting from "../components/table/accounting/Accounting";
import Trailers from "../components/table/trailers/Trailers";
import UserRules from "../components/table/userRules/UserRules";

const Routers: React.FC<{}> = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default Routers;