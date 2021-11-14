import { useState, memo, useContext } from "react";
import axios from "axios";
import Tel from "./../../img/tel1.svg";
import { useHistory, useLocation } from "react-router-dom";
import "./sendCode.css";
import Logo from "./../../img/logo.png";
import FormInputIcon from "./../FormInputIcon/FormInputIcon";
import Error from "./../ErrorValidationForms/Error";
import ButtonComponent from "./../ButtonNextPrev/ButtonComponent";

const SendCodeNumber = () => {
  // state fpr code value and error for show error and api url and history for push another component
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();
  const location = useLocation();

  // use state location react-router-dom Location

  const phoneNumber = {
    phoneNumber: "",
    Code: code,
  };

  const config = {
    headers: {
      "x-access-token": "",
      "Content-Type": "application/json",
    },
  };

  const configLogin = {
    headers: {
      "x-access-token":"",
      "Content-Type": "application/json",
    },
  };

  // submit form
  const handleSubmitcode = (e) => {
    e.preventDefault();
    // state location use for check user came screen and what other
    const login = location.state.login;
    const forgetPassword = location.state.forgetPassword;
    const notFound = location.state.notFound;

    if (login) {
      axios
        .post("SignUp/User/CheckCode", phoneNumber, configLogin)
        .then((response) => {
          if (
            response.data.resultAction === "OK" &&
            response.data.codeSystemAction === "VERIFICATION_CODE_SMS"
          ) {
            // token for take fullName
            let configFullName = {
              headers: {
                "x-access-token": response.data.token,
                "Content-Type": "application/json",
              },
            };
            // start request for fullName
            axios
              .get("User/PersonalInfo/GetOwnDetails", configLogin)
              .then((response) => {
                if (
                  response.data.resultAction === "OK" &&
                  response.data.codeSystemAction === "ACTION_OK"
                ) {
                }
              })
              .catch((error) => console.log(error));
            //  end request for fullName

            history.push("/Home");
          } else if (
            response.data.resultAction === "ERROR" &&
            response.data.codeSystemAction === "NOT_CURRECT"
          ) {
            setError(response.data.messageSystem);
          } else if (
            response.data.resultAction === "ERROR" &&
            response.data.codeSystemAction === "EXPIRED"
          ) {
            setError("کد منقضی شده است");
          } else if (
            response.data.resultAction === "ERROR" &&
            response.data.codeSystemAction === "TOKEN_NOT_EXIST"
          ) {
            setError("توکنی وجود ندارد");
          } else {
            console.log(response);
          }
        })
        .catch((error) => setError(error));
    } else if (forgetPassword) {
      axios
        .post("SignUp/User/CheckCode", phoneNumber, configLogin)
        .then((response) => {
          if (
            response.data.resultAction === "OK" &&
            response.data.codeSystemAction === "VERIFICATION_CODE_SMS"
          ) {
            history.push("/ForgetPassword");
          }
        })
        .catch((error) => setError(error));
    } else if (notFound) {
      axios
        .post("SignUp/User/CheckCode", phoneNumber, config)
        .then((response) => {
          if (
            response.data.resultAction === "OK" &&
            response.data.codeSystemAction === "VERIFICATION_CODE_SMS"
          ) {
            history.push("/FormSignUpOne");
          } else if (
            response.data.resultAction === "ERROR" &&
            response.data.codeSystemAction === "TOKEN_NOT_EXIST"
          ) {
            setError("توکنی وجود ندارد");
          } else {
            console.log(response);
          }
        })
        .catch((error) => setError(error));
    }
  };

  return (
    <div className="pt-5">
      <div className="d-flex justify-content-center">
        <img src={Logo} />
      </div>
      <form onSubmit={handleSubmitcode}>
        <div className="row m-0 p-0 d-flex justify-content-center align-items-center">
          <div className="col-lg-5 col-md-7 col-sm-11 col-11">
            <FormInputIcon
              rtlInput={{ direction: "ltr" }}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="مثلا 12345"
              img={Tel}
              onKeyUp={() => setError(" ")}
              marginIcon="-4px"
              classNameImg="img_verifyCode"
            />
          </div>
        </div>
        <div className="row m-0 p-0 d-flex justify-content-center align-items-center  py-2">
          <div className="col-lg-5 col-md-7 col-sm-12 col-12">
            <Error error={error} />
          </div>
        </div>
        <div className="row p-0 m-0 my-4 d-flex justify-content-center">
          <div className="col-lg-5 col-md-6 col-sm-12 col-12 d-flex justify-content-start">
            <ButtonComponent namebtn="تایید" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default memo(SendCodeNumber);
