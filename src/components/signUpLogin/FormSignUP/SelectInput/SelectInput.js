import {memo} from "react";
import "./style.css";
const SelectInput = ({ name, option1, option2, option3, value, onChange }) => {
  return (
    <div className="row p-0 m-0 col-12 d-flex justify-content-center py-2">
      <div className="col-lg-12 col-md-12 col-sm-12 col-12 p-0">
        <div>
          <p className="m-0 label-select">{name}</p>
          <select
            onChange={onChange}
            className="   select_form-Custom"
          >
            <option value={value}>{option1}</option>
            <option value={value}>{option2}</option>
          </select>
        </div>
      
      </div>
    </div>
  );
};

export default memo(SelectInput);
