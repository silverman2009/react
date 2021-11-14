import React from "react";
import "./style.css";

const FormInputIcon = ({
  value,
  onChange,
  onKeyUp,
  placeholder,
  img,
  name,
  patern,
  type,
  rtlInput,
  classNameImg,
  maxLength,
  classNameInput,
  marginIcon,
  left,
}) => {
  return (
    <div className=" py-3">
      <div className="  p-0">
        <div className="w-100">
          <div className={`icon-container-form ${left}`}>
            <span
              className={`code-conutray-inputIcon `}
              style={{ marginRight: marginIcon }}
            >
              <img className={classNameImg} src={img} alt="phone" />
            </span>
          </div>
          <input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            className={`input-inputIcon w-100 ${classNameInput}`}
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
