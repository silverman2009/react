import React from "react";
import { useHistory } from "react-router-dom";

const Card = ({ price, nameBtn, showCard, hanelVerifyAndCon }) => {
  // const count = parseInt(price)
  // var x = (2 / 100) * price
  // let result = (x + count) / 12
  // if (isNaN(result)) {
  //     result = 0
  // }

  return (
    <div className={`${showCard ? "d-block py-4" : "d-none"}`}>
      <div className="box">
        <div className="ribbon ribbon-top-left">
          <span>کالا و خدمات</span>
        </div>
        <div className="">
          <h4
            className=" fontfamily m-0 text-center  py-3"
            style={{ background: "#f5f6fa", color: "#353b48" }}
          >
            12 ماه
          </h4>
          <div className="d-flex justify-content-center custom_style_precent  p-0 pt-3">
            <div>
              <p className=" fontfamily m-0 text-center cnnn">
                طرح فروش اقساطی
              </p>
              <p className=" fontfamily m-0 text-center precent">۲%</p>
            </div>
            <div>
              <p className="m-0  fontfamily text-center cnmmn">قسط هر ماه</p>
              <h4 className=" fontfamily textColorbule text-center m-0 money__">
                ۳۰۰۰۰۰۰۰ 
              </h4>
              <p className="fontfamily textColorbule text-center m-0">تومان</p>
            </div>
          </div>
          <div className="custom-style-border"></div>
          <div className="d-flex justify-content-center custom_style_precent  p-0 pt-4">
            <div>
              <p className=" fontfamily m-0 text-center cnnn">
                هزینه عملیات کارگزاری
              </p>
              <p className=" fontfamily m-0 text-center precent">۲۰%</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
            
              <h4 className=" fontfamily textColorbule text-center m-0 money__">
                ۳۰۰۰۰۰۰۰ 
              </h4>
              <p className="fontfamily textColorbule text-center m-0">تومان</p>
            </div>
          </div>
         
          <div className="continer__btn_signUpForm">
            <button type="submit" onClick={hanelVerifyAndCon}>
              {nameBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
