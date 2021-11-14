import React from "react";
import "./style.css";
import Logo from "./../img/logo.png";
import Input from "./../Input";
import VerifyInfo from "./VerifyInfo";
const CounterOfficeCode = () => {
  return (
    <>
      <div className="container_CounterOfficeCode mb-5 bg-white">
        <div className="container__verifyInfo">
          <div className="pt-3 d-flex justify-content-center">
            <img src={Logo} />
          </div>
          <div className="pt-4 pb-3">
            <h5 className="fontfamily">به سب خوش آمدید</h5>
            <p className="fontfamily fony85">
              لطفا کد مربوطه وارد نمایید تا اطلاعات مورد نظر نمایش داده شود
            </p>
          </div>
          <Input nameLabel="کد" />
        </div>
        <VerifyInfo/>
      </div>
    
    </>
  );
};

export default CounterOfficeCode;
