import React, { useState } from "react";
import Input from "./../Input";
import InputCardNumber from "./InputCardNumber";
import SelectImg from "./SelectImg";
import "./style.css";
import { useSelectImg } from "./useSelectImg";
import ButtonComponent from './../signUpNewUser/ButtonNextPrev/ButtonComponent';

const SignUpBussiness = () => {
  const [cardNumber, setCardNumber] = useState([]);
  const [value, setValue] = useState();
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleAddcardNumber = () => {
    setCardNumber([...cardNumber, value]);
  };
  const {
    previewBusinessprofiles,
    onSelectFileBusinessprofiles,
    selectedBusinessprofiles,
    selectedNationalOnCard,
    previewNationalOnCard,
    onSelectFileselectedNationalOnCard,
    previewNationalBehindCard,
    selectedNationalBehindCard,
    onSelectFileselectedNationalBehindCard,
    previewBusinessLicense,
    selectedBusinessLicense,
    onSelectFileselectedBusinessLicense,
  } = useSelectImg();

  return (
    <div className="container-fuild m-0 p-0">
      <div className="row m-0 p-0 justify-content-center mt-5">
        <div className="col-9 mt-5">
          <div className="row m-0 p-0 justify-content-center mt-5">
            <div className="col-10 contaner__formSignUp__bussines border pt-4 pb-5 mt-5">
              <div className="row m-0 p-0 d-flex justify-content-around">
                <div className="col-4  col-container-input">
                  <div className="titer__form">
                    <p className="fony75 fontfamily m-0 ">ثبت نام کسب و کار</p>
                  </div>
                  <Input className="input_signUp_bussiness" nameLabel="نام کسب و کار" />
                  <Input className="input_signUp_bussiness" nameLabel="شماره تلفن ثابت" />
                  <Input className="input_signUp_bussiness" nameLabel="شماره شبا" cardNumber={cardNumber} />
                  <Input className="input_signUp_bussiness" nameLabel="شهرستان" cardNumber={cardNumber} />
                </div>
                <div className="col-4 col-container-input">
                  <Input className="input_signUp_bussiness" nameLabel="نوع صنف" />
                  <Input className="input_signUp_bussiness" nameLabel="استان" />
                  <Input className="input_signUp_bussiness" nameLabel="استان" />
                  <InputCardNumber
                    value={value}
                    onChange={handleChange}
                    cardNumber={cardNumber}
                    buttonAdd={
                      <button
                        className="btn_add_cardNumber"
                        onClick={handleAddcardNumber}
                      >
                        +
                      </button>
                    }
                    nameLabel="شماره حساب "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container__signUp_bussiness mt-3">
            <div className="container__selectallImg border mt-5 pb-5 px-5 pt-3 mb-5 ">
              <div className="title__formImage">
                <p className="fony80 fontfamily m-0 text-center">
                  تصاویر احراز هویت
                </p>
              </div>
              <SelectImg
                className="pt-5"
                onChange={onSelectFileBusinessprofiles}
                preview={previewBusinessprofiles}
                selectedFile={selectedBusinessprofiles}
                nameLabel="تصویر پروفایل کسب و کار"
                nameInput="selectedBusinessprofiles"
              />
              <SelectImg
                className="pt-5"
                nameLabel="تصویر روی کارت ملی"
                onChange={onSelectFileselectedNationalOnCard}
                preview={previewNationalOnCard}
                selectedFile={selectedNationalOnCard}
                nameInput="selectedNationalOnCard"
              />
              <SelectImg
                onChange={onSelectFileselectedNationalBehindCard}
                preview={previewNationalBehindCard}
                selectedFile={selectedNationalBehindCard}
                nameInput="selectedNationalBehindCard"
                nameLabel="تصویر پشت ملی"
              />
              <SelectImg
                onChange={onSelectFileselectedBusinessLicense}
                preview={previewBusinessLicense}
                selectedFile={selectedBusinessLicense}
                nameInput="selectedBusinessLicense"
                nameLabel="تصویر پروانه کسب"
              />
            </div>
          </div>
          <div className="container__signUp_bussiness d-flex justify-content-center mb-5">
            <div className="w-25">
              <ButtonComponent namebtn="تایید و ادامه"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpBussiness;
