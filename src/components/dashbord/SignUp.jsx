import Select from "./SelectName";
import Input from "./../Input";
import { useSteps } from "./useSteps";

const SignUp = ({
  formData,
  onChangeCreditamout,
  handleRequestVerifyPhoneNumber,
  error,
  isLoading,
  fullName,
  onKeyUpCreditAmout,
}) => {
  return (
    <div className="container__input__signUp">
      <Input
        maxLength={10}
        onChange={onChangeCreditamout}
        value={formData.numberPhone}
        onKeyUp={handleRequestVerifyPhoneNumber}
        name="numberPhone"
        nameLabel="شماره تماس مشتری"
      />
      <div>
        <p className="m-0 fony80 fontfamily pb-1 colorGoodNight">
          نام و نام خانوادگی
        </p>
        {isLoading ? (
          <div className="signUp__fullName_Upcreditamout">
            در حال گرفتن اطلاعات
          </div>
        ) : (
          <div className="signUp__fullName_Upcreditamout">{fullName}</div>
        )}
      </div>
      <Input
        value={formData.priceCommodity}
        onChange={onChangeCreditamout}
        name="priceCommodity"
        nameLabel="قیمت کالا یا خدمت"
        onKeyUp={onKeyUpCreditAmout}
      />
      <Select
        nameNameOfProductOrService="nameCommodity"
        valueNameOfProductOrService={formData.nameCommodity}
        onChange={onChangeCreditamout}
        ProductCount={formData.countCommodity}
        nameProductCount="countCommodity"
        onKeyUp={onKeyUpCreditAmout}
      />
      <p className="fony80 fontfamily m-0 text-danger">{error}</p>
    </div>
  );
};

export default SignUp;
