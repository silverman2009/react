import React from "react";
import AsideAdmin from './../../Aside/AsideAdmin';
import BusinessmanageMent from './../../../BusinessmanageMent/BusinessmanageMent';

const ManageUserNormal = () => {
  return (
    <div className="container_dashbord">
      <div className="contaier__body_dashbord">
        <AsideAdmin />
        <BusinessmanageMent />
      </div>
    </div>
  );
};

export default ManageUserNormal;
