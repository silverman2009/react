import {memo} from "react"
import "./InsertPhoneNumber.css";
import Tel1 from "./../../img/tel1.svg";
import ButtonComponent from './../ButtonNextPrev/ButtonComponent';
import FormInputIcon from "./../FormInputIcon/FormInputIcon";
import Error from "./../ErrorValidationForms/Error";
import Logo from "./../../img/logo.png";
import useFetch from "./useFetch"

const InsertPhoneNumber = () => {
  const {
    numberPhone,
    error,
    onkeyUpCheckPhone,
    hanleChangeInput,
    handleSubmitCheckPhone} = useFetch()

    
  return (

      <div className="main-container d-flex justify-content-between flex-column m-0 pt-5">
        <div>
        <div className="d-flex justify-content-center">
          <img src={Logo}/>
         </div>
          <div className="row p-0 m-0 d-flex justify-content-center">
            <div className="col-lg-5 col-md-6 col-sm-12 col-12 d-flex justify-content-start align-items-center p-0 ">
              <div className="mt-3">
                <p className="text-end text-welcome-sab fontfamily"> به سب خوش آمدید</p>
                <p className="text-reguest-form text-start pt-3">
                  لطفا شماره تلفن همراه خود را وارد کنید تا کد فعال‌سازی برای
                  شما ارسال شود.
                </p>
              </div>
            </div>

            <form className="mt-3" onSubmit={handleSubmitCheckPhone}>
              <div className="row m-0 p-0 d-flex justify-content-center align-items-center">
                <div className="col-lg-5 col-md-7 col-sm-12 col-12">
                  <FormInputIcon
                    value={numberPhone}
                    onChange={hanleChangeInput}
                    onKeyUp={onkeyUpCheckPhone}
                    img={Tel1}
                    rtlInput={{ direction: "ltr" }}
                    placeholder="912..."
                    marginIcon="-4px"
                  maxLength="10"
                  classNameImg="icon_insertPhoneNumber"
                  />
                </div>
              </div>
              <div className="row m-0 p-0 d-flex justify-content-center align-items-center  py-2">
                <div className="col-lg-5 col-md-7 col-sm-12 col-12">
                  <Error error={error} />
                </div>
              </div>
              <div className="row p-0 m-0 d-flex justify-content-center">
                <div className="col-lg-5 col-md-6 col-sm-12 col-12 p-0 m-0  py-3">
                  <ButtonComponent namebtn="بعدی" />
                </div>
              </div>
            </form>
          </div>
        </div>

  
        <div className="text-center containerText   ">

             <span className="text-secondary text-condition-sab  p-0 m-0">
              با ثبت نام در سب تمامی {" "}
              <span className="text-primary p-0 m-0">شرایط و قوانین  </span>
               را قبول می نمایم.
            </span>
    
        </div>
      </div>
  );
};

export default memo(InsertPhoneNumber);
