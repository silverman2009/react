import { useState, useEffect, memo, useContext } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import ChoicePicker from "./../ChoicePickerCity/ChoicePicker";
import ButtonComponent from "./../ButtonNextPrev/ButtonComponent";
import Error from "./../ErrorValidationForms/Error";
import SelectInput from "./../SelectInput/SelectInput";
import Logo from "./../../img/logo.png";
import FormInputIcon from "./../FormInputIcon/FormInputIcon";
import Writing from "./../../img/writing.svg";
import persianAlphabeticCompare from "persian-alphabetic-compare";

const FormSignUpTwo = () => {
  // control state and options state and city
  const [fullName, setFullNam] = useState("");
  const [gender, setGender] = useState(0);
  const [province, setProvince] = useState("");
  const [optionProvince, setOptionProvince] = useState([]);
  const [city, setCity] = useState("");
  const [optionCity, setOptionCity] = useState([]);
  const [town, setTown] = useState("");
  const [optiontown, setOptionTown] = useState([]);
  const [error, setError] = useState("");
  const history = useHistory();
  const location = useLocation();

  const userLoginAdd = {
    AddedFields: {
      username: location.state.userName,
      password: location.state.password,
      phoneNumber: "",
    },
  };
  const UserPersonalInfoAdd = {
    AddedFields: {
      fullName: fullName,
      Moaref: location.state.moaref,
      Ostan: province.value,
      State: city.value,
      City: town.value,
      Gender: "",
    },
  };

  const userLogin = {
    username: location.state.userName,
    password: location.state.password,
  };

  // validation form
  const validation = () => {
    if (!fullName) {
      setError("لطفا نام و نام خانوادگی خود را وارد نمایید");
      return false;
    }
    if (fullName.length <= 5) {
      setError("نام و نام خانوادگی صحیح نیست");
      return false;
    }
    if (!province) {
      setError("لطفا استان خود راانتخاب نمایید");
      return false;
    }
    if (!city) {
      setError("لطفا شهر خود راانتخاب نمایید");
      return false;
    }
    if (!town) {
      setError("لطفا منطقه خود راانتخاب نمایید");
      return false;
    }

    return true;
  };

  // on kye up for clear error massage when user is typig
  const onkeyUpInputClearError = () => {
    setError(" ");
  };

  // take Province options

  useEffect(() => {
    axios
      .get("Province/GetListProvince")
      .then((res) => {
        if (
          res.data.resultAction === "OK" &&
          res.data.codeSystemAction === "LIST_PROVINCE"
        ) {
          let provinceOption = [];
          for (let i = 0; i < res.data.data.length; i++) {
            provinceOption.push({
              value: res.data.data[i]._id,
              label: res.data.data[i].Name,
            });
          }
          setOptionProvince(
            provinceOption.sort(function (a, b) {
              var nameA = a.label;
              var nameB = b.label;
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }

              // names must be equal
              return 0;
            })
          );
        }
      })
      .catch((error) => setError("مشکلی به وجود امده است"));
  }, []);

  // when user select Province i take id from select and show city option
  const _idProvoince = {
    Id: province.value,
  };
  useEffect(() => {
    if (province) {
      axios
        .post("Province/GetState", _idProvoince)
        .then((res) => {
          if (res.data.resultAction === "OK") {
            let cityOption = [];
            for (let i = 0; i < res.data.data.length; i++) {
              cityOption.push({
                value: res.data.data[i]._id,
                label: res.data.data[i].Name,
              });
            }
            setOptionCity(
              cityOption.sort(function (a, b) {
                var nameA = a.label;
                var nameB = b.label;
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }

                // names must be equal
                return 0;
              })
            );
          }
        })
        .catch((error) => console.log("hgf"));
    }
  }, [province]);

  // when user select city i take id from select and show city option
  const _idCity = {
    Id: city.value,
  };

  useEffect(() => {
    if (city) {
      axios
        .post("Province/GetCity", _idCity)
        .then((res) => {
          if (res.data.resultAction === "OK") {
            let townOption = [];
            for (let i = 0; i < res.data.data.length; i++) {
              townOption.push({
                value: res.data.data[i]._id,
                label: res.data.data[i].Name,
              });
            }
            setOptionTown(
              townOption.sort(function (a, b) {
                var nameA = a.label;
                var nameB = b.label;
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }

                // names must be equal
                return 0;
              })
            );
          }
        })
        .catch((error) => console.log("hgf"));
    }
  }, [city]);

  const configCheckCode = {
    headers: {
      "x-access-token": "",
      "Content-Type": "application/json",
    },
  };

  const handleSubmitFormSignUp = (event) => {
    event.preventDefault();
    const validate = validation();
    if (validate) {
      axios
        .post("User/Login/Add", userLoginAdd, configCheckCode)
        .then((res) => {
          if (
            res.data.resultAction === "OK" &&
            res.data.codeSystemAction === "ACTION_OK"
          ) {
            const configCheckCode1 = {
              headers: {
                "x-access-token": res.data.token,
              },
            };
            axios
              .post(
                "User/PersonalInfo/Add",
                UserPersonalInfoAdd,
                configCheckCode1
              )
              .then((res) => {
                if (
                  res.data.resultAction === "OK" &&
                  res.data.codeSystemAction === "ACTION_OK"
                ) {
                  axios
                    .post("User/loginWithUserName", userLogin)
                    .then((res) => {
                      if (
                        res.data.resultAction === "OK" &&
                        res.data.codeSystemAction === "ACTION_OK"
                      ) {
                        history.push("/home");
                      }
                    })
                    .catch((error) => console.log(error));
                }
              })
              .catch((error) => console.log(res));
          }
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center">
        <img src={Logo} />
      </div>
      <form onSubmit={handleSubmitFormSignUp}>
        <div className="row m-0 p-0 d-flex justify-content-center align-items-center">
          <div className="col-lg-5 col-md-7 col-sm-12 col-12">
            <FormInputIcon
              onKeyUp={onkeyUpInputClearError}
              name="نام و نام خانوادگی"
              value={fullName}
              onChange={(e) => setFullNam(e.target.value)}
              styleMargin={{ marginTop: "2rem" }}
              left="left"
              img={Writing}
              classNameImg="fullNameIcon"
            />
            <SelectInput
              option1={"مرد"}
              option2={"زن"}
              value={gender}
              name="جنسیت"
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
        </div>

        <ChoicePicker
          value={province}
          onChange={(e) => setProvince(e)}
          style={{ fontSize: "0.75rem" }}
          name={"استان"}
          styleMargin={{ marginTop: "2rem" }}
          options={optionProvince}
          noOptionsMessage={() => "لطفا شهر خود را انتخاب نمایید."}
        />
        <ChoicePicker
          value={city}
          onChange={(item) => setCity(item)}
          style={{ fontSize: "0.75rem" }}
          name={"شهرستان"}
          options={optionCity}
          noOptionsMessage={() => "گزینه ای برای نمایش وجود ندارد."}
        />
        <ChoicePicker
          value={town}
          onChange={(item) => setTown(item)}
          style={{ fontSize: "0.75rem" }}
          name={"شهر"}
          options={optiontown}
          noOptionsMessage={() => "گزینه ای برای نمایش وجود ندارد."}
        />

        <Error error={error} />
        <div className="row p-0 m-0 d-flex justify-content-center py-3">
          <div className="col-lg-5 col-md-6 col-sm-12 col-12 p-0 m-0">
            <div className="d-flex justify-content-between">
              <ButtonComponent
                classNameBtn="btn-custom-component"
                namebtn="بازگشت"
                onClick={history.goBack}
              />

              <ButtonComponent namebtn="تایید" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default memo(FormSignUpTwo);
