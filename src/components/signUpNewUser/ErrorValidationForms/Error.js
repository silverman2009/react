import React from 'react';
import "./style.css"
const Error = ({styleMargin,error}) => {
  return (
    <div className="row p-0 d-flex justify-content-center m-0">
      <div className="col-lg-12 col-md-12 col-sm-12 col-12 p-0">
        <div >
          <p className=" text-start text-error-custom fontfamily">{error}</p>
        </div>
      </div>
    </div>
  );
}

export default Error;
