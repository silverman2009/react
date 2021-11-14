import InputSearch from "../../../InputSearch"
import FilterBtnGroup from "../../../FilterBtnGroup"
import TabMessage from "../../TabsComponent"
import TabContentOne from "./TabContentOne"
import "./message.css"
const index = () => {
    return (
        <div>
            <div className="container__MessageContent__filter__InputSearch my-2">
                <InputSearch />
                <FilterBtnGroup nameBtnAction="اعمال" tabOne="خوانده شده" tabTwo="خوانده نشده" nameBtn="فیلتر" classNameBtn="button__filter__group__transAction" />
            </div>
            <div className="text-right mt-3">
                <button type="button" className="create__new__message">ایجاد پیام جدید</button>
            </div>
            <TabMessage
                itemOne="همه"
                contentOne={<TabContentOne />}
                itemTwo="ارسال شده"
                itemThree="دریافت شده"
                itemFour="ستاره دار"
            />
        </div>
    );
}

export default index;
