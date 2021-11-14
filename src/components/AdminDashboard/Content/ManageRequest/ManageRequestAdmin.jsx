import React from "react";
import AsideAdmin from "../../Aside/AsideAdmin";
import ManageRequest from "./Manage/ManageRequest";

const ManageRequestAdmin = () => {
  return (
    <>
      <div className="container_dashbord">
        <div className="contaier__body_dashbord">
          <AsideAdmin />
          <ManageRequest/>
        </div>
      </div>
    </>
  );
};

export default ManageRequestAdmin;
