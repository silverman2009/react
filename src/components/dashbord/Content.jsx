import { useState } from "react";
import Input from "./../Input";
import Card from "./Card";
import { useHistory } from "react-router-dom";

const Content = () => {
  const [creditamount, setCreditamount] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const regexOnlyNumber = /^[0-9\b]+$/;

  const handlecreditamount = (event) => {
    setShowCard(true);
    setCreditamount(event.target.value);
  };

  const validation = () => {
    if (!creditamount) {
      setError("لطفا مبلغ درخواست اعتبار خود را وراد نمایید");
      return false;
    }
    if (!regexOnlyNumber.test(creditamount)) {
      setError("لطفا مبلغ درخواست اعتبار خود را وراد نمایید");
      return false;
    }
    return true;
  };

  const hanelVerifyAndCon = () => {
    const validate = validation();
    if (validate) {
      history.push({
        pathname: "/SignUpcreditamount",
        state: { creditamount },
      });
    }
  };
  return (
    <div className="container_content bg-white mb-5">
      <p className="fony80 fontfamily m-0 py-3 px-3">
        ابتدا سقف اعتبار درخواستی خود را انتخاب کنید.
      </p>
      {/* item one */}
      <div className="border-bottom pb-5">
        <div className="d-flex align-items-center">
          <span className="circle_item mx-3"></span>
          <p className="fony80 fontfamily m-0">
            {" "}
            با این اعتبار می‌توانید از تمامی فروشگاه‌های همکار ازکی‌وام خرید
            کنید.
          </p>
        </div>
        {/* item two */}
        <div className="d-flex align-items-center">
          <span className="circle_item mx-3"></span>
          <p className="fony80 fontfamily m-0">
            {" "}
            اقساط و کارمزد پرداختی شما متناسب با مبلغ خریدتان محاسبه می‌شود.{" "}
          </p>
        </div>
        <div className="d-flex align-items-center">
          <span className="circle_item mx-3"></span>
          <p className="fony80 fontfamily m-0">
            {" "}
            اقساط و کارمزد پرداختی شما متناسب با مبلغ خریدتان محاسبه می‌شود.
          </p>
        </div>
        <div className="d-flex align-items-center">
          <span className="circle_item mx-3"></span>
          <p className="fony80 fontfamily m-0">
            {" "}
            همکاران ما در ادامه برای دریافت مدارک موردنیاز با شما تماس خواهند
            گرفت. (مدارک شناسایی-گواهی تأییده شغلی-فیش حقوقی و ...){" "}
          </p>
        </div>
      </div>
      {/* input  */}

      <div className="container__input pb-4">
        <Input
          value={creditamount}
          onChange={handlecreditamount}
          className="input__content_dashbord"
          nameLabel="مبلغ درخواستی را وارد کنید"
        />
      </div>
      <div className="container__card">
        <Card
          nameBtn="تایید و ادامه"
          hanelVerifyAndCon={hanelVerifyAndCon}
          showCard={showCard}
        />
        <p className="fontfamily fony80 m-0 text-danger pb-4">{ error}</p>
      </div>
    </div>
  );
};

export default Content;
