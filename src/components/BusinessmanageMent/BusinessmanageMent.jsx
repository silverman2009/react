import InputSearch from "./InputSearch";
import Table from "./TableList";
import { IoMdNotifications } from "react-icons/io";
import "./list.css";
const BusinessmanageMent = () => {
  return (
    <div className="p-4">
      <div className="w-100">
        <div className="d-flex">
          <div>
            <button type="button" className="add__new__user__list">
              افزودن کسب و کار جدید
            </button>
          </div>
          <div className="mx-2">
            <button
              type="button"
              className="add__new__user__list d-flex  align-items-center"
            >
              <p className="m-0"> درخواست‌ ها</p>
                          <div className="pe-2 notifiction_requests">
                              <div>99+</div>
                <IoMdNotifications size={22} />
              </div>
            </button>
          </div>
        </div>
        <div className="bg-white border rounded shadow mt-4 p-0">
          <p className="fontfamily text-right fony80 text__border__bottom m-0 p-4">
            فهرست کسب‌ و کار‌ها
          </p>
          <div className="mt-5 mb-3 container_search__activeateButton">
            <InputSearch />
            <button type="button" className="button__list_Notactive">
              {" "}
              فعال سازی انتخاب شده ها
              <span className="zero_count_list">0</span>
            </button>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default BusinessmanageMent;
