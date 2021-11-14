import { memo } from "react";
import PasswordIcon from "./../../img/lock.svg";
import symbolIcon from "./../../img/ID.svg";
import "./login.css";
import ButtonComponent from "./../ButtonNextPrev/ButtonComponent";
import Logo from "./../../img/logo.png";
import FormInputIcon from "./../FormInputIcon/FormInputIcon";
import Error from "./../ErrorValidationForms/Error";
import { useLogin } from "./useLogin";
import ResultRestPassword from "./../restPassword/ResultRestPassword";

const Login = () => {
  const { formData, error,numberTakeLoction, handelChangeLogin, OnKeyUpForm, handleSubmitLogin } = useLogin();

  return (
    <div className=" pt-3">
      <div className="d-flex justify-content-center align-items-center">
        <img src={Logo} alt="logo" />
      </div>
      <div className="row m-0 p-0 d-flex justify-content-center">
        <div className="col-lg-5 col-md-6 col-sm-12 col-12 d-flex justify-content-start align-items-center p-0">
          <div className="mt-2">
            <p className="text-start text-welcome-sab fontfamily text-right">
              {" "}
              ورود به حساب کاربری
            </p>
            <p className="text-reguest-form text-start pt-3 fontfamily">
              برای ورود نام کاربری و رمز عبور خود را وارد نمایید.
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmitLogin}
        className=" mt-3 containerInput__InsertPhoneNumber"
      >
        <div className="">
          <div className="">
            <FormInputIcon
              placeholder="نام کاربری"
              value={formData.username}
              name="userName"
              onChange={handelChangeLogin}
              img={symbolIcon}
              imgStyle={{ width: "1rem", height: "1rem" }}
              onKeyUp={OnKeyUpForm}
              classNameImg="icon-username-login"
              rtlInput={{ direction: "ltr" }}
              classNameInput="text-left fontfamily fony80 "
            />
            <FormInputIcon
              type="password"
              placeholder="رمز عبور"
              value={formData.password}
              name="password"
              onChange={handelChangeLogin}
              img={PasswordIcon}
              onKeyUp={OnKeyUpForm}
              rtlInput={{ direction: "ltr" }}
              marginIcon="-4px"
              classNameImg="icon-password-login"
              classNameInput="text-left fontfamily fony75"
            />
          </div>
          <div className="  py-2">
            <div className="">
              <Error error={error} />
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <ButtonComponent namebtn="تایید" />
          </div>
        </div>
      </form>

      <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center mt-5">
        <ResultRestPassword numberPhone={numberTakeLoction} />
      </div>
    </div>
  );
};

export default memo(Login);
