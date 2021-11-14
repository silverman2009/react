import Input from "../../InputProfiel"
import Select from "../../../Select/Select"
import DatePicker from "../../../DatePicker"
import ChoiceCity from "./ChoiceCity"
import "../../profile.css"
const ContentOne = () => {
    const option = ["آذربیجان غربی", "آدزبیجان‌شرقی", "تهران", "تبریز", "اصفهان"]
    const data = [
        {
            name: "test1",
            id: 1
        },
        {
            name: "test2",
            id: 1
        },
    ]
    const dataTwo = [
        {
            name: "test3",
            id: 1
        },
        {
            name: "test4",
            id: 2
        },
    ]
    const dataThree = [
        {
            name: "test5",
            id: 1
        },
        {
            name: "test6",
            id: 2
        },
    ]

    return (
        <div>
            <div className="container__input_ptofile">
                <Input placeholder="نام کاربری" classNameLabel="name__label_input__profile" nameLabel="نام کاربری" />
                <Input placeholder="نام و نام‌خانوادگی" classNameLabel="name__label_input__profile" nameLabel="نام و نام‌خوانوادگی" />
                <Input placeholder="شغل" classNameLabel="name__label_input__profile" nameLabel="شغل" />
                <Input placeholder="ایمیل" classNameLabel="name__label_input__profile" nameLabel="ایمیل" />
                <Select classNameSelect="select__profle" nameLabel="جنسیت" optionONe="مرد" optionTwo="زن" />
                <Select classNameSelect="select__profle" nameLabel="وضعیت تاهل" optionONe="مجرد" optionTwo="متاهل" />
            </div>
            {/* date picker */}
            <div>
                <div className="container__Label_datePicker__profile">
                    <p className="text-right m-0 name__label__profile">تاریخ تولد</p>
                </div>
                <div className="container__datePicker__profile">
                    <div>
                        <DatePicker classNameLabel="datePicker__profile" />
                        <DatePicker month={true} classNameLabel="datePicker__profile" />
                        <DatePicker classNameLabel="datePicker__profile" />
                    </div>
                </div>
            </div>
            {/* city adress */}
            <div>
                <div className="container__Label_choiceCity__profile">
                    <p className="text-right m-0 name__label__choiceCity">مشخصات مکانی</p>
                </div>
                <div className="container__choiceCity__profile">
                    <div>
                        <ChoiceCity classNameInput="input__choice__city" option={data} />
                        <ChoiceCity classNameInput="input__choice__city" option={dataTwo} />
                        <ChoiceCity classNameInput="input__choice__city" option={dataThree} />
                    </div>
                </div>
            </div>
            {/* address */}
            <div>
                <div className="container__Label_datePicker__profile">
                    <p className="text-right m-0 name__label__profile">آدرس</p>
                </div>
                <div className="container__datePicker__profile">
                    <textarea className="textarea__adress_profile"></textarea>
                </div>
            </div>

            {/* number phone and valtId */}
            <div className="container__input_ptofile mt-5">
                <Input placeholder="شماره همراه" classNameLabel="name__label_input_phoneValt__profile" nameLabel="شماره همراه" />
                <Input placeholder="ولت آیدی" classNameLabel="name__label_input_phoneValt__profile" nameLabel="ولت آیدی" />
            </div>
        </div>
    );
}

export default ContentOne;
