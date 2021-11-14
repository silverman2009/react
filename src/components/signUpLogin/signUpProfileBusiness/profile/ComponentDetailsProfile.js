import { memo } from "react";
import "./style.css";
const componentDetailsProfile = ({ title, details, className }) => {
  return (
    <div
      className={`row p-0 m-0 d-flex align-items-center pt-3 border-bottom ${className}`}
    >
      <div className="col-lg-8 col-md-10 col-sm-9 col-9 w-100">
        <p className=" fontfamily fony75 titleNameProfile pt-1 m-0 text-right">
          {title}
        </p>
        <p className=" fontfamily fony75 subtitleNameProfile m-0 text-right">
          {details}
        </p>
      </div>
    </div>
  );
};

export default memo(componentDetailsProfile);
