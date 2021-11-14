import React from "react";
import AsideAdmin from "./../Aside/AsideAdmin";

const LayoutAdmin = ({ children }) => {
  return (
    <div className="container_dashbord">
      <div className="contaier__body_dashbord">
        <AsideAdmin />
        {children}
      </div>
    </div>
  );
};

export default LayoutAdmin;
