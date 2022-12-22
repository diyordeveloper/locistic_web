import React from "react";
import Routes from "./view/Routes/Routes";
import { BrowserRouter } from "react-router-dom";
// biblioteka style
import "bootstrap/dist/css/bootstrap.min.css";
// style
import "./view/assets/style/all.css";
const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
