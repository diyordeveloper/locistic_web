import React from "react";
import Routes from "./view/Routes/Routes";
// biblioteka style
import "bootstrap/dist/css/bootstrap.min.css";
// style
import "./view/assets/style/all.css";
const App: React.FC<{}> = () => {
  return (
    <>
      <Routes />
    </>
  );
};

export default App;
