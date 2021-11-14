import React from "react";
import Select, { components } from "react-select";
import "./style.css";
import Arrow from "../../../../assets/arrow.svg";

const ChoicePicker = ({
  name,
  styleMargin,
  style,
  value,
  onChange,
  options,
}) => {
  const Placeholder = (props) => {
    return <components.Placeholder {...props} />;
  };
  const CaretDownIcon = () => {
    return <img className="img-arrow" src={Arrow} alt="arrow" />;
  };
  const NoOptionsMessage = (props) => {
    return (
      <components.NoOptionsMessage {...props}>
        <span style={{ fontSize: "0.77rem", fontWeight: "bold" }}>
          لطفا انتخاب نمایید
        </span>
      </components.NoOptionsMessage>
    );
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#0093e9",
      color: "#fff",
      fontFamily: "sans",
      fontSize: "0.45rem",
    }),
    menu: (base) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0,
      fontFamily: "sans",
      fontSize: "0.77rem",
      fontWeight: "bold",
    }),
    menuList: (base) => ({
      ...base,
      // kill the white space on first and last option
      padding: 0,
    }),
    placeholder: (base) => ({
      ...base,
      fontSize: "0.80rem",
      color: "#fff",
      fontWeight: 400,
    }),
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <CaretDownIcon />
      </components.DropdownIndicator>
    );
  };
  return (
    <div className="row p-0 m-0 d-flex justify-content-center">
      <div className="col-lg-5 col-md-6 col-sm-12 col-12" style={styleMargin}>
        <div className="d-flex justify-content-between my-3">
          <label className="label-input-choicePicher" style={style}>
            {name}:
          </label>
          <div className="d-flex ">
            <Select
              value={value}
              onChange={onChange}
              options={options}
              components={{ Placeholder, DropdownIndicator, NoOptionsMessage }}
              placeholder={"انتخاب کنید"}
              styles={customStyles}
              isRtl={true}
              className=" games-dropdown-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoicePicker;
