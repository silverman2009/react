import React from "react";

const Input = ({
  nameLabel,
  value,
  onChange,
  name,
  disabled,
  defaultValue,
  className,
  error,
  onKeyUp,
  buttonAdd,
  maxLength
}) => {
  const items = ["22222222222222222222222222"];
  return (
    <>
      <div className="container_input_signUp">
        <p className="text-right fony80 fontfamily pb-1 colorGoodNight">
          {nameLabel}
        </p>
        <input
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          name={name}
          disabled={disabled}
          defaultValue={defaultValue}
          className={className}
          onKeyUp={onKeyUp}
        />
        <p className="m-0 fony75 fontfamily text_validation pt-1">{error}</p>
        {buttonAdd}
      </div>
     
    </>
  );
};

export default Input;
