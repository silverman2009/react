import React from "react";
import ButtonComponent from "./../signUpNewUser/ButtonNextPrev/ButtonComponent";

const VerifyInfo = () => {
  return (
    <>
      <div className="container__tableInfo_verify mt-5">
        <div className="d-flex justify-content-around align-items-cenetr py-2">
          <p className="fony75 fontfamily m-0">نام و نام خانوادگی : </p>
          <p className="fony75 fontfamily m-0">مهدی شریفلو</p>
        </div>
        <div className="d-flex justify-content-around align-items-cenetr py-2">
          <p className="fony75 fontfamily m-0">نام و نام خانوادگی : </p>
          <p className="fony75 fontfamily m-0">مهدی شریفلو</p>
        </div>
        <div className="d-flex justify-content-around align-items-cenetr py-2">
          <p className="fony75 fontfamily m-0">نام و نام خانوادگی : </p>
          <p className="fony75 fontfamily m-0">مهدی شریفلو</p>
        </div>
        <div className="d-flex justify-content-around align-items-cenetr py-2">
          <p className="fony75 fontfamily m-0">نام و نام خانوادگی : </p>
          <p className="fony75 fontfamily m-0">مهدی شریفلو</p>
        </div>
        
      </div>
      <div className="container__tableInfo_verify_btn py-5">
          <div className="d-flex justify-content-around">
            <ButtonComponent namebtn="مخالف" classNameBtn="bg-danger" />
            <ButtonComponent namebtn="موافق" classNameBtn="bg-success" />
          </div>
        </div>
    </>
  );
};

export default VerifyInfo;
