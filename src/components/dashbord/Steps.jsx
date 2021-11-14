import { useCallback, useState } from "react";
import takmil from "./../img/takmilprof1.svg";

import SignUp from "./SignUp";
import VerifyInfo from "./VerifyInfo";
import ButtonComponent from "./../signUpNewUser/ButtonNextPrev/ButtonComponent";
import { useSteps } from "./useSteps";
const Steps = () => {
  const {
    formActivePanel1,
    goNext,
    goBack,
    submitForm,
    formData,
    fullName,
    onChangeCreditamout,
    handleRequestVerifyPhoneNumber,
      error,
      isLoading,
    onKeyUpCreditAmout,
    requestLOANAmount,
    verifyCreditamout
  } = useSteps();
  return (
    <div className="bg-white container_steps">
      <div className="d-flex justify-content-center align-items-center py-5">
        <ul className="d-flex justify-content-around align-items-center p-0">
          <li
            className={`step_item ${formActivePanel1 === 1 ? "object" : null}`}
          >
            <img src={takmil} alt="info" />
          </li>
          <li
            className={` step_item ${formActivePanel1 === 2 ? "object" : null}`}
          >
            <img src={takmil} alt="info" />
          </li>
          <li
            className={` step_item ${formActivePanel1 === 3 ? "object" : null}`}
          >
            <img src={takmil} alt="info" />
          </li>
        </ul>
      </div>
      <form onSubmit={submitForm}>
        <div>
          {formActivePanel1 === 1 && (
            <SignUp
              formData={formData}
              onChangeCreditamout={onChangeCreditamout}
              handleRequestVerifyPhoneNumber={handleRequestVerifyPhoneNumber}
              error={error}
              isLoading={isLoading}
              fullName={fullName}
              onKeyUpCreditAmout={onKeyUpCreditAmout}
            />
          )}

          {formActivePanel1 === 2 && (
            <VerifyInfo requestLOANAmount={requestLOANAmount} fullName={fullName} formData={ formData}/>
          )}
          {formActivePanel1 === 3 && (
            <div className="">
              <h4 className="fontfamily m-0 text-center textColorbule py-2">
                کد شما درخواست اعتبار شما به شماره همراه <span>{ formData.numberPhone}</span>{" "}
                ارسال شد.
              </h4>
              <h6 className=" fontfamily m-0 text-right px-5  pt-5">
                در نگهداری این کد کوشا باشید .
              </h6>
            </div>
          )}
        </div>
        <div className="container__btn_signUp">
          <div className="d-flex justify-content-end">
            {formActivePanel1 !== 1 && formActivePanel1 !== 3 && (
              <button className="btn__sgnUpPcredimount" onClick={goBack}>
                بازگشت
              </button>
            )}
            {formActivePanel1 === 1 && (
              //
              <ButtonComponent
                namebtn="بعدی"
                classNameBtn="mb-3"
                onClick={goNext}
              />
            )}
            {formActivePanel1 === 2 ? (
              <button className="btn__sgnUpPcredimount" onClick={verifyCreditamout}>
                تایید اطلاعات
              </button>
            ) : formActivePanel1 === 3 ? (
              <button
                className="btn__success_sgnUpPcredimount my-5"
                onClick={goNext}
              >
                تایید کد
              </button>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Steps;
