import React, { useState } from "react";
import Input from "./../../../../Input";
import ButtonComponent from "./../../../../signUpNewUser/ButtonNextPrev/ButtonComponent";
import "./style.css";
import ProfileImgBussiness from "./ProfileImgBussiness";
import { useSelectImgVerify } from "./useSelectImgVerify";

const ShowInfo = () => {
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
  } = useSelectImgVerify();
  return (
    <div className="container-fuild m-0 p-0">
      <div className="row m-0 p-0 justify-content-center">
        <div className="col-12">
          <div className="row m-0 p-0 justify-content-center">
            <div className="col-12 contaner__verifyInfo_bussiness border pt-4 pb-5 ">
              <div className="row m-0 p-0 d-flex justify-content-around ">
                <div className="row p-0 m-0 justify-content-center mt-5">
                  <div className="col-11 container_____input_verify_items border pb-5">
                    <div className="row p-0 m-0 justify-content-around ">
                    <div className="col-4  col-container-input">
                  <div className="titer__verifyBussiness">
                    <p className="fony75 fontfamily m-0 ">پروفایل کسب و کار</p>
                  </div>
                  <Input
                    className="input_signUp_bussiness"
                    nameLabel="نام کسب و کار"
                    defaultValue="موبایل فروشی"
                  />
                  <Input
                    className="input_signUp_bussiness"
                    nameLabel="شماره تلفن ثابت"
                    defaultValue="44366666666"
                  />
                  <Input
                    className="input_signUp_bussiness"
                    nameLabel="شماره شبا"
                    cardNumber={cardNumber}
                    defaultValue="1600052626835956345"
                  />
                  <Input
                    className="input_signUp_bussiness"
                    nameLabel="شهرستان"
                    cardNumber={cardNumber}
                    defaultValue="خوی"
                  />
                </div>
                <div className="col-4 col-container-input">
                  <Input
                    className="input_signUp_bussiness"
                    nameLabel="نوع صنف"
                    defaultValue="موبایل"
                  />
                  <Input
                    className="input_signUp_bussiness"
                    nameLabel="استان"
                    defaultValue="آذربیجان غربی"
                  />
                  <Input
                    className="input_signUp_bussiness"
                    nameLabel="شهر"
                    defaultValue="مرکزی"
                  />
                  <Input
                    className="input_signUp_bussiness"
                    nameLabel="شماره کارت"
                    defaultValue="60600000000000000000000000"
                  />
                </div>
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
                  <ProfileImgBussiness
                    className="pt-5"
                    onChange={onSelectFileBusinessprofiles}
                    preview={previewBusinessprofiles}
                    selectedFile={selectedBusinessprofiles}
                    nameLabel="تصویر پروفایل کسب و کار"
                    nameInput="selectedBusinessprofiles"
                  />
                  <ProfileImgBussiness
                    className="pt-5"
                    nameLabel="تصویر روی کارت ملی"
                    onChange={onSelectFileselectedNationalOnCard}
                    preview={previewNationalOnCard}
                    selectedFile={selectedNationalOnCard}
                    nameInput="selectedNationalOnCard"
                  />
                  <ProfileImgBussiness
                    onChange={onSelectFileselectedNationalBehindCard}
                    preview={previewNationalBehindCard}
                    selectedFile={selectedNationalBehindCard}
                    nameInput="selectedNationalBehindCard"
                    nameLabel="تصویر پشت ملی"
                  />
                  <ProfileImgBussiness
                    onChange={onSelectFileselectedBusinessLicense}
                    preview={previewBusinessLicense}
                    selectedFile={selectedBusinessLicense}
                    nameInput="selectedBusinessLicense"
                    nameLabel="تصویر پروانه کسب"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <ButtonComponent namebtn="ویرایش" />
                <ButtonComponent namebtn="تایید و ادامه" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowInfo;
