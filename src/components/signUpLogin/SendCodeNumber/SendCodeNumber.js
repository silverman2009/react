import { useState, memo } from "react";
import Tel from "./../../img/tel1.svg";
import { useHistory } from "react-router-dom";
import "./sendCode.css";
import Logo from "./../../img/logo.png";
import FormInputIcon from "./../FormInputIcon/FormInputIcon";
import Error from "./../ErrorValidationForms/Error";
import ButtonComponent from "./../ButtonNextPrev/ButtonComponent";
import useVerifyCode from "./useVerifyCode";

const SendCodeNumber = () => {
  // state fpr code value and error for show error and api url and history for push another component
  const { code, error, handleSubmitcode, handleChangeCode, onKeyUpCode } =
    useVerifyCode();

  return (
    <div className="pt-5">
      <div className="d-flex justify-content-center align-items-center">
        <img src={Logo} alt="logo" />
      </div>
      <form onSubmit={handleSubmitcode}>
        <div className="row m-0 p-0 d-flex justify-content-center align-items-center">
          <div className="col-lg-5 col-md-7 col-sm-11 col-11">
            <FormInputIcon
              rtlInput={{ direction: "rtl" }}
              value={code}
              onChange={handleChangeCode}
              placeholder="مثلا 12345"
              img={Tel}
              classNameImg="icon__verifyCode"
              onKeyUp={onKeyUpCode}
              marginIcon="-4px"
              classNameInput="text-left fontfamily fony85 input_verifyCode"
            />
          </div>
        </div>
        <div className="row m-0 p-0 d-flex justify-content-center align-items-center  py-2">
          <div className="col-lg-5 col-md-7 col-sm-12 col-12">
            <Error error={error} />
          </div>
        </div>
        <div className="row p-0 m-0 my-1 d-flex justify-content-center">
          <div className="col-lg-5 col-md-6 col-sm-12 col-12 d-flex justify-content-end">
            <ButtonComponent namebtn="تایید" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default memo(SendCodeNumber);
