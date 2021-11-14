import { useState, useHistory, memo } from "react";
import ChoicePicker from "./ChoicePickerCity/ChoicePicker";
import ButtonComponent from "../ButtonNextPrev/ButtonComponent";
import Error from "../ErrorValidationForms/Error";
import SelectInput from "./SelectInput/SelectInput";
import Logo from "../../../assets/logo.png";
import FormInputIcon from "../FormInputIcon/FormInputIcon";
import Writing from "../../../assets/writing.svg";

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

  const handleSubmitFormSignUp = (event) => {
    event.preventDefault();
    const validate = validation();
    if (validate) {
    }
  };
  return (
    <div className="container-fluid">
      <Logo />

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
