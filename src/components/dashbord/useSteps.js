import { useState, useCallback, useContext } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { tokenVerifyCode } from "./../context/TokenVerifyCodeLOgin";
import { loginInfoContext } from "./../context/LoginInfo";

export const useSteps = () => {
  const [formActivePanel1, setFormActivePanel1] = useState(1);
  const [formData, setFormData] = useState({
    numberPhone: "",
    priceCommodity: "",
    nameCommodity: "",
    countCommodity: "",
  });
  const [fullName, setFullName] = useState("");
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const { tokenVeriFy } = useContext(tokenVerifyCode);
  const { loginInfo } = useContext(loginInfoContext);

  const regexOnlyNumber = /^[0-9\b]+$/;
  const regexOnlyFarsi = /^[\u0600-\u06FF\s]+$/;
  const location = useLocation();
  const requestLOANAmount = location.state.creditamount;

  //signUp creditamout and request for take full name and validation form

  // onCange inputs
  const onChangeCreditamout = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // headers and token
  let configLogin = {
    headers: {
      "x-access-token": tokenVeriFy,
      "Content-Type": "application/json",
    },
  };

  // request for take fullName
  const handleRequestVerifyPhoneNumber = () => {
    if (formData.numberPhone.startsWith("0")) {
      setError("لطفا شماره موبایل خود را بدون صفر وارد نمایید");
      return false;
    } else if (formData.numberPhone.length === 10) {
      setIsLoading(true);
      axios
        .get(
          `https://45.156.186.15:3001/api/v1/user/getFullNameByPhoneNumber?phone=${formData.numberPhone}`,
          configLogin
        )
        .then((res) => {
          if (res.status === 200) {
            setIsLoading(false);
            setFullName(res.data.FullName);
            setUserId(res.data.userId);
          }
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setIsLoading(false)
          setFullName("شماره تلفن نامعتبر است")
        }
        });
    }
    setError("");
  };

  const onKeyUpCreditAmout = () => {
    setError(" ");
  };
  //  validation form inputs
  const validation = () => {
    if (!formData.priceCommodity) {
      setError("لطفا قیمت کالا یا خدمت را وارد کنید");
      return false;
    } else if (!regexOnlyNumber.test(formData.priceCommodity)) {
      setError("لصفا قیمت کالا یا خدمت را وارد کنید");
      return false;
    } else if (!formData.nameCommodity) {
      setError("لطفا نام کالا یا خدمت را وارد کنید");
      return false;
    } else if (!regexOnlyFarsi.test(formData.nameCommodity)) {
      setError("لصفا نام کالا یا خدمت را وارد کنید");
      return false;
    } else if (!regexOnlyNumber.test(formData.countCommodity)) {
      setError("لصفا تعداد کالا یا خدمت را وارد کنید");
      return false;
    } else if (!formData.countCommodity) {
      setError("لصفا تعداد کالا یا خدمت را وارد کنید");
      return false;
    }

    return true;
  };
  // go ot abck
  const goNext = useCallback(() => {
    const valiadte = validation();
    if (valiadte) {
      if (formActivePanel1 === 3) return;
      setFormActivePanel1((page) => page + 1);
    }
  });
  const goBack = useCallback(() => {
    if (formActivePanel1 === 1) return;
    setFormActivePanel1((page) => page - 1);
  });
  //signUp creditamout and request for take full name and validation form/////////////////////

  // data for send request
  const data = {
    CreditRequest: {
      CustomerName: fullName,
      CustomerPhoneNumber: formData.numberPhone,
      ProductOrUtilitiyName: formData.nameCommodity,
      ProductCount: parseInt(formData.countCommodity),
      ProductOrUtilitiyPrice: parseInt(formData.priceCommodity),
      RequestLOANAmount: parseInt(requestLOANAmount),
      userId: userId,
      BusinessId: loginInfo.job._id,
    },
  };
  const verifyCreditamout = () => {
    console.log(data);
    axios
      .post(
        "https://45.156.186.15:3001/api/v1/CreditRequest/Add",
        data,
        configLogin
      )
      .then((res) => {
        if (res.status === 201) {
          setFormActivePanel1((page)=> page + 1)
        } else {
          console.log(res)
        }
      });
  };

  const submitForm = (event) => {
    event.preventDefault();
  };

  return {
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
    verifyCreditamout,
  };
};
