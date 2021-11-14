import React from "react";
import Aside from "./Aside";
import "./style.css"
const Layout = ({ children }) => {
  return (
    <div className="container_dashbord">
      <div className="contaier__body_dashbord">
           <Aside />
        {children}
      </div>
    </div>
  );
};

export default Layout;
