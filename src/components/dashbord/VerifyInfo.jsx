import React from "react";
import { useSteps } from "./useSteps";

const VerifyInfo = ({ fullName, formData, requestLOANAmount }) => {
  return (
    <div className="container__info__signUp">
      <div>
        <div className=" p-2 reletive">
          <p className="m-0 fony80 fontfamily text-end ">
            نام و خانوادگی مشتری :
          </p>
          <p className="m-0 fony80 fontfamily text-center yyy">{fullName}</p>
        </div>
        <div className=" p-2 reletive">
          <p className="m-0 fony80 fontfamily text-end ">شماره تماس مشتری :</p>
          <p className="m-0 fony80 fontfamily text-center yyy">
            {formData.numberPhone}
          </p>
        </div>
      </div>
      <div>
        <div className=" p-2 reletive">
          <p className="m-0 fony80 fontfamily text-end ">قیمت کالا :</p>
          <p className="m-0 fony80 fontfamily text-center yyy">
            {formData.priceCommodity} تومان
          </p>
        </div>
        <div className=" p-2 reletive">
          <p className="m-0 fony80 fontfamily text-end ">نوع کالا :</p>
          <p className="m-0 fony80 fontfamily text-center yyy">
            {formData.nameCommodity}
          </p>
        </div>
      </div>
      <div>
        <div className=" p-2 reletive">
          <p className="m-0 fony80 fontfamily text-end ">تعداد کالا :</p>
          <p className="m-0 fony80 fontfamily text-center yyy">
            {formData.countCommodity}
          </p>
        </div>
      </div>
      <div>
        <div className=" p-2 reletive">
          <p className="m-0 fony80 fontfamily text-end ">اعتبار درخواستی</p>
          <p className="m-0 fony80 fontfamily text-center yyy">
            {requestLOANAmount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyInfo;
