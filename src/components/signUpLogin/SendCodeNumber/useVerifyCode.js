import { useContext, useState } from "react";
import { useMutation } from "react-query";
import { useHistory, useLocation } from "react-router";
import axios from "axios";
import { loginInfoContext } from "./../../context/LoginInfo";
import { tokenVerifyCode } from "./../../context/TokenVerifyCodeLOgin";

const useVerifyCode = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const location = useLocation();
  const { loginInfo } = useContext(loginInfoContext);
  const { setTokenVerify } = useContext(tokenVerifyCode);

  const onKeyUpCode = () => {
    setError("");
  };
  const handleChangeCode = (event) => {
    setCode(event.target.value);
  };

  const config = {
    headers: {
      "x-access-token": location.state.tokenLogin,
      "Content-Type": "application/json",
    },
  };

  const data = {
    phoneNumber: loginInfo.phoneNumber,
    Code: code,
  };
  const Mutation = useMutation(() => {
    axios
      .post("https://45.156.186.15:3001/api/v1/SignUp/User/CheckCode", data, config)
      .then((response) => {
        if (
          response.data.codeSystemAction === "VERIFICATION_CODE_SMS" &&
          response.data.resultAction === "OK"
        ) {
          console.log(response);
          setTokenVerify(response.data.token);
          history.push("/Dashbord");
        } else if (
          response.data.resultAction === "ERROR" &&
          response.data.codeSystemAction === "NOT_CURRECT"
        ) {
          setError("کد وارد شده اشتباه است ");
        } else if (
          response.data.resultAction === "ERROR" &&
          response.data.codeSystemAction === "EXPIRED"
        ) {
          setError("کد منقضی شده است");
        } else if (
          response.data.resultAction === "ERROR" &&
          response.data.codeSystemAction === "TOKEN_NOT_EXIST"
        ) {
          setError("لطفا بعدا تلاش کنید");
        } else {
          console.log(response);
        }
      })
      .catch((err) => {
        console.log("مشکلی در اتصال به وجود امده است");
      });
  });
  // submit form
  const handleSubmitcode = (e) => {
    e.preventDefault();
    Mutation.mutate();
  };

  return { code, error, handleSubmitcode, handleChangeCode, onKeyUpCode };
};

export default useVerifyCode;
