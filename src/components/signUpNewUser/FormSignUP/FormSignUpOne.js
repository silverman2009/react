import { useState,memo } from "react";
import userNameIcon from "./../../img/userName.svg";
import { useHistory } from "react-router-dom";
import PasswordIcon from "./../../img/lock.svg";
import Introduction from "./../../img/introduction.svg";
import FormInputIcon from "./../FormInputIcon/FormInputIcon";
import Error from "./../ErrorValidationForms/Error";
import Logo from "./../../img/logo.png";
import ButtonComponent from './../ButtonNextPrev/ButtonComponent';
const FormSignUpOne = () => {
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [codeMoaref, setCodeMoaref] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const validation = () => {
    if (!userName) {
      setError("لطفا نام کاربری خود را انتخاب نمایید");

      return false;
    }
    if (!password) {
      setError("لطفا رمز عبور خود را انتخاب نمایید");
      return false;
    }
    if (password !== repeatPassword) {
      setError("رمز عبور با تکرار ان مطابقت ندارد");
      return false;
    }

   
    return true;
  };

  const onkeyUpInputClearError = () => {
    setError(" ");
  };

  const onSubmitfromSignUpOne = (e) => {
    e.preventDefault();
    const validate = validation();
    if (validate) {
      history.push({
        pathname: "/signUpUserNewTwo",
        state: { userName: userName, password: password, moaref: codeMoaref },
      });
    }
  };
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center">
          <img src={Logo}/>
         </div>
     
      <form onSubmit={onSubmitfromSignUpOne}>
        <div className="row m-0 p-0 d-flex justify-content-center align-items-center">
          <div className="col-lg-5 col-md-7 col-sm-12 col-12">
            <FormInputIcon
              type="text"
              rtlInput={{ direction: "ltr" }}
              name="نام کاربری"
              styleMargin={{ marginTop: "1rem" }}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onKeyUp={onkeyUpInputClearError}
              img={userNameIcon}
              classNameImg="img-userName-SignUp"
              classNameInput="input-userName-signUP"
              left="left"
              paddimg4="paddimg4"
            />
            <FormInputIcon
              type="password"
              name=" رمز عبور"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              onKeyUp={onkeyUpInputClearError}
              img={PasswordIcon}
              left="left"
              classNameImg="img-userName-SignUp"
             

             
            />
            <FormInputIcon
              type="password"
              name=" تکرار رمز عبور"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              onKeyUp={onkeyUpInputClearError}
              img={PasswordIcon}
              left="left"
              classNameImg="img-userName-SignUp"
       

              
            />
            <FormInputIcon
              type="text"
              name=" کد معرف (در صورت وجود معرف)"
              value={codeMoaref}
              onChange={(e) => setCodeMoaref(e.target.value)}
              onKeyUp={onkeyUpInputClearError}
              left="left"
              img={Introduction}
              classNameImg="img-userName-codeMorif"
            />
          </div>
        </div>
        <div className="row m-0 p-0 d-flex justify-content-center align-items-center  py-2">
          <div className="col-lg-5 col-md-7 col-sm-12 col-12">
            <Error error={error} />
          </div>
        </div>
        <div className="row p-0 m-0 my-2 d-flex justify-content-center">
          <div className="col-lg-5 col-md-6 col-sm-12 col-12 d-flex justify-content-end p-0">
            <ButtonComponent namebtn="بعدی" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default memo(FormSignUpOne);
