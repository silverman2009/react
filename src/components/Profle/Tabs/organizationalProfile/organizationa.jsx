import Input from "../../InputProfiel"
import "./style.css"
import DatePicker from "../../../DatePicker"
const organizationa = () => {
    return (
        <div>
            <div className="container__input_ptofile">
                <DatePicker nameLabel="تاریخ ورود" classNameLabel="datePicker__organizationa" />
                <DatePicker nameLabel="ساعت ورود" classNameLabel="datePicker__organizationa" />
            </div>
            <div className="container__input_ptofile mt-5">
                <DatePicker nameLabel="تاریخ خروج" classNameLabel="datePicker__organizationa" />
                <DatePicker nameLabel="ساعت خروج" classNameLabel="datePicker__organizationa" />
            </div>
            <div>
                <div className="container__Label_datePicker__profile">
                    <p className="text-right m-0 name__label__profile">توضیحات</p>
                </div>
                <div className="container__datePicker__profile">
                    <textarea rows="8" className="textarea__explain_profile"></textarea>
                </div>
            </div>
        </div>
    );
}

export default organizationa;
