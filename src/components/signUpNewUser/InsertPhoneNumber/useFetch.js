import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";

const useFetch = () => {
  // call useHistory for push user another screen
  const history = useHistory();
  // call context for set token signUp and number and set token sign


  // state number and error
  const [numberPhone, setNumberPhone] = useState("");
  const [error, setError] = useState("");

  //  start validaton form
  const validation = () => {
    if (!numberPhone || isNaN(numberPhone)) {
      setError("لطفا شماره تلفن خود را وارد نمایید.");
      return false;
    }
    if (numberPhone.length > 10) {
      setError("شماره تلفن اشتباه است.");
      return false;
    }
    if (numberPhone.length < 10) {
      setError("شماره تلفن اشتباه است.");
      return false;
    }

    if (numberPhone.length[0] === 0) {
      setError("لطفا شماره تلفن خود را بدون صفر وارد کنید");
      return false;
    }

    return true;
  };

  //  end validaton form

  // start   func when user writing clear error
  const onkeyUpCheckPhone = () => {
    setError(" ");
  };

  // end  func when user writing clear error

  //  start  onChange for numberPhone
  const hanleChangeInput = (event) => {
    let show = event.target.value;
    setNumberPhone(show);
  };
  //  end  onChange for numberPhone

  // data for send server
  const phoneNumber = {
    phoneNumber: numberPhone,
  };

  const { mutate } = useMutation((phoneNumber) => {
    console.log(numberPhone);
    axios
      .post("https://45.156.186.15:3001/api/v1/SignUp/User/CheckPhone", phoneNumber)
      .then((response) => {
        //hear i check user in signUp or not , and if user was signUp push to login screen or push for signUp
        // if (
        //   response.data.resultAction === "OK" &&
        //   response.data.codeSystemAction === "EXIST"
        // ) {
        //   console.log(response);
        //   history.push({
        //     pathname: "/SendCodeNumber",
        //   });
        // }
      
      })
      .catch((error) => {
        let err = error.toJSON();
        if (err.message === "Network Error")
          setError(" لطفا به اینترنت متصل شوید");
      });
  });


  const handleSubmitCheckPhone = (event) => {
    event.preventDefault();
    const validate = validation();
    if (validate) {
      // check phone number
      mutate(phoneNumber)
    }
  };

  //   If the user has already logged in, he will be automatically redirected to the main page
  
  return {
    numberPhone,
    error,
    onkeyUpCheckPhone,
    handleSubmitCheckPhone,
    hanleChangeInput,
  };
};

export default useFetch;
