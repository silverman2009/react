import Input from "../../InputProfiel"
const Business = () => {
    return (
        <div>
            <div className="container__input_ptofile">
                <Input placeholder="نام کسب و کار" classNameLabel="name__label_input_phoneValt__profile" nameLabel="شماره همراه" />
                <Input placeholder="شماره تماس" classNameLabel="name__label_input_phoneValt__profile" nameLabel="ولت آیدی" />
            </div>
            <div>
                <div className="container__Label_datePicker__profile">
                    <p className="text-right m-0 name__label__profile">آدرس</p>
                </div>
                <div className="container__datePicker__profile">
                    <textarea rows="4" className="textarea__explain_profile"></textarea>
                </div>
            </div>
        </div>
    );
}

export default Business;
