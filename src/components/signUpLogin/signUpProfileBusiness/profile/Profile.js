import { memo } from "react";
import ComponentDetailsProfile from "./ComponentDetailsProfile";
import ContainerDetailsBule from "./ContainerDetailsBule";
import "./style.css";
const Profile = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <div className="row p-0 m-0 justify-content-center">
        <div className="col-lg-10 col-md-9 col-sm-12 col-12">
          <h1 className="fontfamily textColorbule text-center p-5">
            ثبت نام کسب و کار
          </h1>
          <ContainerDetailsBule
            margin="3rem 0"
            background="#0093E9"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkTQ8DFOgujidIRil33r2QnSZ2Y_ZHahrUlw&usqp=CAU"
            title="تصویر پروفایل کسب و کار"
            prifileExplain="تصویر آپلود بعد از تایید قرار خواهد گرفت."
          />
          <ComponentDetailsProfile
            title="نام و نام خانوادگی"
            details="مهدی شریفلو"
            className="pt-5"
          />
          <ComponentDetailsProfile
            title="نام کسب و کار"
            details="فروشگاه عظیمی"
          />
          <ComponentDetailsProfile
            title="شماره تلفن ثابت"
            details="044-363635235"
          />
          <ComponentDetailsProfile
            title="آدرس محل سکونت"
            details="خوی/میدان قمسال.روبروی بازگانی محمدی/آپارتمان الماس/واحد2/پلاک10"
          />
          <ComponentDetailsProfile
            title="آدرس محل کسب و کار"
            details="خوی/میدان قمسال.روبروی بازگانی محمدی/آپارتمان الماس/واحد2/پلاک10"
          />
          <div className="row p-0 m-0 d-flex  align-items-center py-4">
            <div className="col-lg-8 col-md-10 col-sm-9 col-9 p-0 w-100">
              <div className="borderBouttom-custom-profile"></div>
            </div>
          </div>
          <ContainerDetailsBule
            background="#00000099"
            src="https://letsenhance.io/static/b8eda2f8914d307d52f725199fb0c5e6/62e7b/MainBefore.jpg"
            title="تصویر اول شناسنامه"
          />
          <ContainerDetailsBule
            background="#00000099"
            src="https://letsenhance.io/static/b8eda2f8914d307d52f725199fb0c5e6/62e7b/MainBefore.jpg"
            title="تصویر پشت و روی کارت ملی"
          />
          <ContainerDetailsBule
            background="#00000099"
            src="https://letsenhance.io/static/b8eda2f8914d307d52f725199fb0c5e6/62e7b/MainBefore.jpg"
            title="تصویر پروانه کسب"
          />
          <div className="row p-0 m-0 d-flex  align-items-center pt-4">
            <div className="col-lg-8 col-md-10 col-sm-9 col-9 p-0 w-100">
              <div className="borderBouttom-custom-profile"></div>
            </div>
          </div>

          <ComponentDetailsProfile title="نوع صنف " details="طلا فروشی" />
          <ComponentDetailsProfile title="استان" details="آذربیجان غربی" />
          <ComponentDetailsProfile title="شهرستان" details="خوی" />
          <ComponentDetailsProfile title="شهر" details="خوی" />
          <div className="row p-0 m-0 d-flex  align-items-center pt-4">
            <div className="col-lg-8 col-md-10 col-sm-9 col-9 p-0 w-100">
              <div className="borderBouttom-custom-profile"></div>
            </div>
          </div>
          <ComponentDetailsProfile
            title="شماره حساب"
            details="610433789458798"
          />
          <ComponentDetailsProfile
            title="شماره شبا"
            details="IR 0000000005858855855"
            className="py-4"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Profile);
