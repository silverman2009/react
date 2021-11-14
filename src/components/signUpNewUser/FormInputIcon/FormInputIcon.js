import React from "react";
import "./style.css";

const FormInputIcon = ({ value, onChange, onKeyUp, placeholder, img, name,patern , type, rtlInput,classNameImg,maxLength,classNameInput,marginIcon,left,}) => {
  return (
    <div className="row p-0 m-0 col-12 d-flex justify-content-center py-3">
      <div className="col-lg-12 col-md-12 col-sm-12 col-12  p-0">
        <p className="label-input-formInputIcon m-0">{name}</p>
        <div className="position-relative">
        <div className={`icon-container-form ${left}`}>
          <span className={`code-conutray-inputIcon `} style={{marginRight:marginIcon}}>
            <img className={classNameImg} src={img} alt="phone"/>
          </span>
        </div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={`input-inputIcon ${classNameInput}`}
          placeholder={placeholder}
          onKeyUp={onKeyUp}
          style={rtlInput}
          maxLength={maxLength}
          pattern={patern}
        />
         
        </div>
      
      </div>
      </div>
  
  );
};

export default FormInputIcon;
