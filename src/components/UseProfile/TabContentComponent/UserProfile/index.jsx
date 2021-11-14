import "./user.css"
import InputUserProfile from "./InputUserProfile"
import Select from "../../../Select/Select"
import DataPicker from "../../../DatePicker"
const index = () => {
  return (
    <div class="container__tab__userProfile">
      <InputUserProfile name="نام کاربری" placeholder="نام کاربری" />
      <InputUserProfile name="نام و نام خانوادگی" placeholder="نام‌ و نام خانوادگی" />
      <Select className="select__userProfile" classNameLabel="label__selelct__userProfile" nameLabel="جنسیت" optionOne="مرد" optionTwo="زن" />
      <InputUserProfile name="ولت ID" placeholder="ولت آیدی" />
      <InputUserProfile name="سن" placeholder="سن" />
      <DataPicker nameLabel="تاریخ تولد" classNameLabel="label__datePicker__userProfile" placeholder="تاریخ تولد" />
    </div>
  );
}

export default index;
