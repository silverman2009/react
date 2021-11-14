import axios from "axios";
import { useMutation } from "react-query";
import { useState } from "react";
import { useHistory } from "react-router";
//    api adress http://45.156.186.15:3001/api/v1/SignUp/User/CheckPhone

// i use custom hook for clean code
const useRestPassword = () => {
  // state manger
  const [numberPhone, setNumberPhone] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  // onChange input insetValue
  const hanleChangeInput = (event) => {
    setNumberPhone(event.target.value);
  };

  const HideResultRestModal = () => {
    setShowModal(false);
  };

  //   if number start zero show is not truw
  // else number is true

  const onkeyUpCheckPhone = () => {
    if (numberPhone.startsWith("0")) {
      setError("لطفا شماره تلفن خود را بدون صفر وارد نمایید");
    } else {
      setError(" ");
    }
  };

  //   send data for api
  const data = {
    phone: numberPhone,
  };

  //   if number start zero don't send request
  // else send request

  const mutation = useMutation((event) => {
    if (numberPhone.startsWith("0") === true) {
      setError("لطفا شماره تلفن خود را بدون صفر وارد نماید.");
    } else {
      axios
        .post("user/login/ResetPassword", data)
        .then((res) => {
          setShowModal(true);
          console.log(res);
        })
        .catch((err) => {
          setError("مشکلی در اتصال به وجود امده است");
        });
    }
  });

  //   use query moudule for request because is best for manage request
  const handleSubmitCheckPhone = (event) => {
    event.preventDefault();
    mutation.mutate();
  };

  //   findly i return state and fun change input,onKeyUp and handleSubmitCheckPhone
  return {
    numberPhone,
    error,
    showModal,
    hanleChangeInput,
    onkeyUpCheckPhone,
    handleSubmitCheckPhone,
    HideResultRestModal,
  };
};

export default useRestPassword;
