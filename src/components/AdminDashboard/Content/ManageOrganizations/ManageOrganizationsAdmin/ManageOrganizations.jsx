import InputSearch from "./InputSearch"
import Table from "./TableList"
import "./list.css"
const ManageOrganizations = () => {
    return (
        <div className="p-4">
            <div className="w-100">
                <div>
                    <button type="button" className="add__new__user__list">افزودن سازمان جدید</button>
                </div>
                <div className="bg-white border rounded shadow mt-4 p-0">
                    <p className="fontfamily text-right fony80 text__border__bottom m-0 p-4">فهرست سازمان‌ها</p>
                    <div className="mt-5 mb-3 container_search__activeateButton">
                        <InputSearch />
                        <button type="button" className="button__list_Notactive"> فعال سازی انتخاب شده ها
                            <span className="zero_count_list">0</span>
                        </button>
                    </div>
                    <Table />
                </div>

            </div>
        </div>
    );
}

export default ManageOrganizations;
