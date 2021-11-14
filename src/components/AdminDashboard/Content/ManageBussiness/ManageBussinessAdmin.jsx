import React from "react";
import AsideAdmin from "../../Aside/AsideAdmin";
import ManageBusssiness from "./Manage/ManageBussiness";

const ManageBussinessAdmin = () => {
  return (
    <>
      <div className="container_dashbord">
        <div className="contaier__body_dashbord">
          <AsideAdmin />
          <ManageBusssiness/>
        </div>
      </div>
    </>
  );
};

export default ManageBussinessAdmin;
