import React from "react";
import AsideAdmin from "./../../../Aside/AsideAdmin";
import ShowInfo from "./ShowInfo";

const ShowInfoBussiness = () => {
  return (
    <div className="container_dashbord">
      <div className="contaier__body_dashbord">
              <AsideAdmin />
              <ShowInfo/>
      </div>
    </div>
  );
};

export default ShowInfoBussiness;
