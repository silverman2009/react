import { memo } from "react";
import "./InsertPhoneNumber.css";
import Tel1 from "./../../img/tel1.svg";
import ButtonComponent from "./../ButtonNextPrev/ButtonComponent";
import FormInputIcon from "./../FormInputIcon/FormInputIcon";
import Error from "./../ErrorValidationForms/Error";
import Logo from "./../../img/logo.png";
import useInserPhoneNumber from "./useInserPhoneNumber";
const InsertPhoneNumber = () => {
  // custom hook
  const {
    numberPhone,
    error,
    hanleChangeInput,
    onkeyUpCheckPhone,
    handleSubmitCheckPhone,
  } = useInserPhoneNumber();
  return (
    <div className=" m-0 pt-5">
      <div>
        <div className="insertPhoneNumber-container">
          <div className="d-flex justify-content-center align-items-center">
            <img src={Logo} alt="logo" />
          </div>
          <div className="">
            <div className="mt-3">
              <p className="text-reguest-form fontfamily text-start pt-3 text-right">
                برای ورود لطفا شماره تلفن همراه خود را وارد کنید.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <form
            className=" mt-3 containerInput__InsertPhoneNumber"
            onSubmit={handleSubmitCheckPhone}
          >
            <div className="">
              <div>
                <FormInputIcon
                  value={numberPhone}
                  onChange={hanleChangeInput}
                  onKeyUp={onkeyUpCheckPhone}
                  type="tel"
                  img={Tel1}
                  rtlInput={{ direction: "ltr" }}
                  placeholder="912..."
                  marginIcon="-4px"
                  maxLength="10"
                  classNameImg="icon_input_inserphone"
                  classNameInput="text-left w-100 fontfamily fony85"
                />
              </div>
            </div>
            <div className="row m-0 p-0 d-flex justify-content-start align-items-center  py-2">
              <div className="col-lg-5 col-md-7 col-sm-12 col-12">
                <Error error={error} />
              </div>
            </div>
            <div>
              <div>
                <ButtonComponent namebtn="بعدی" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(InsertPhoneNumber);
