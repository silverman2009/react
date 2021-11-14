import { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { useMutation } from "react-query";
import axios from "axios";
import { loginInfoContext } from "./../../context/LoginInfo";

export const useLogin = () => {
  const { setLoginInfo } = useContext(loginInfoContext);
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handelChangeLogin = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [error, setError] = useState("");
  const history = useHistory();
  const location = useLocation();

  // locaton take state
  const numberTakeLoction = location.state.numberPhone;

  const validation = () => {
    if (!formData.userName.trim()) {
      setError("لطفا نام کاربری خود را وارد نمایید.");
      return false;
    }
    if (!formData.password.trim()) {
      setError("لطفا رمز عبور خود را وارد نمایید.");
      return false;
    }

    return true;
  };

  const OnKeyUpForm = () => {
    setError(" ");
  };

  const data = {
    username: formData.userName,
    password: formData.password,
  };

  const Mutation = useMutation(() => {
    axios.post("https://45.156.186.15:3001/api/v1/user/Pannel/Login", data).then((res) => {
      if (res.status === 200) {
        const dataPhoneNumber = {
          phoneNumber: res.data.phoneNumber,
        };
        setLoginInfo(res.data);
        axios
          .post("https://45.156.186.15:3001/api/v1/SignUp/User/GetCode", dataPhoneNumber)
          .then((response) => {
            if (
              response.data.codeSystemAction === "ACTION_OK" &&
              response.data.resultAction === "OK"
            ) {
              history.push({
                pathname: "/VerifyCode",
                state: { tokenLogin: response.data.token },
              });
            } else if (
              response.data.resultAction === "ERROR" &&
              response.data.codeSystemAction === "ERROR_IN_REQUEST_TIME"
            ) {
              setError("لطفا یه دقیقه دیگر تلاش کنید");
            } else if (
              response.data.resultAction === "ERROR" &&
              response.data.codeSystemAction === "ERROR_IN_LOGIN"
            ) {
              setError("نام کاربری یا رمز عبور صحیح نیست");
            } else {
              console.log(response);
            }
          })
          .catch((err) => {
            setError("مشکلی در ارتباط یه وجود امده است");
          });
      }
    });
  });

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    Mutation.mutate();
  };

  // when user forget password press this button and go for take code
  const handleClickForgetPassword = () => {
    history.push("/RestPassword");
  };
  return {
    error,
    formData,
    numberTakeLoction,
    handelChangeLogin,
    OnKeyUpForm,
    handleSubmitLogin,
    handleClickForgetPassword,
  };
};
