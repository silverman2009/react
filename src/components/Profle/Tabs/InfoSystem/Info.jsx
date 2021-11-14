import DatePicker from "../../../DatePicker"
import Input from "../../InputProfiel"
const Info = () => {
    return (
        <div>
            <div className="container__input_ptofile">
                <DatePicker nameLabel="تاریخ ورود" classNameLabel="datePicker__organizationa" />
                <DatePicker nameLabel="ساعت ورود" classNameLabel="datePicker__organizationa" />
            </div>
            <div className="container__input_ptofile mt-3">
                <DatePicker nameLabel="تاریخ خروج" classNameLabel="datePicker__organizationa" />
                <DatePicker nameLabel="ساعت خروج" classNameLabel="datePicker__organizationa" />
            </div>
            <div className="container__input_ptofile mt-3">
                <Input placeholder="آدرس آپی" classNameLabel="name__label_input_phoneValt__profile" nameLabel="شماره همراه" />
                <Input placeholder="دستگاه" classNameLabel="name__label_input_phoneValt__profile" nameLabel="ولت آیدی" />
            </div>
        </div>
    );
}

export default Info;
