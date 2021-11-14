import InputSearch from "./InputSearch";
import Table from "./TableList";
import "./list.css";
// import { useList } from './useList';
const list = () => {
  return (
    <div className="">
      <div className="w-100">
        <div className="bg-white border rounded shadow  p-0">
          <p className="fontfamily text-right fony80 text__border__bottom m-0 p-4">
            فهرست کاربران عادی
          </p>
          <div className="mt-5 mb-3 container_search__activeateButton">
            <InputSearch />
            <button type="button" className="button__list_active">
              غیر فعال سازی انتخاب شده ها
              <span className="zero_count_list">0</span>
            </button>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default list;
