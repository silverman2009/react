import React from "react";

const InputCardNumber = ({
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
  cardNumber,
}) => {

  return (
    <>
      <div className="container_input_signUp">
      {buttonAdd}
        <p className="text-right fony80 fontfamily pb-1 label__input">
          {nameLabel}
        </p>
        <input
          value={value}
          onChange={onChange}
          name={name}
          disabled={disabled}
          defaultValue={defaultValue}
          className={className}
          onKeyUp={onKeyUp}
        />
       
        <p className="m-0 fony75 fontfamily text_validation pt-1">{error}</p>
       
       
        {cardNumber &&
          cardNumber.map((item) => {
            return (
              <div className="">
                <p className="m-0 fony75 fontfamily text_validation pt-1">
                  {item}
                </p>
              </div>
            );
          })}
          
      </div>
     
    </>
  );
};

export default InputCardNumber;
