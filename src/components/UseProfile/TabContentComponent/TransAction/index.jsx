import CardTransAction from "./CardTransAction"
import InputSearch from "../../../InputSearch"
import FilterBtnGroup from "../../../FilterBtnGroup"
import TableTransAction from "./TableTransAction/ComponentTable"
import "./transaction.css"
const index = () => {
  return (
    <div className="px-3">
    <div className="container__card__transAction">
      <CardTransAction
        icon="fa fa-user text-danger"
        title="کل تراکنش ها"
        subTitle="117 عدد"
      />
      <CardTransAction
        icon="fa fa-user text-warning"
        title="مبلغ کل"
        subTitle="10235879 تومان"
      />
      <CardTransAction
        icon="fa fa-user text-success"
        title="امتیاز"
        subTitle="67%"
      />
      <CardTransAction
        icon="fa fa-user text-info"
        title="رتبه بندی"
        subTitle="A 95%"
      />
    </div>
      <div className="container__inputSEarch__FilterBtnGroup my-5">
        <InputSearch/> 
        <FilterBtnGroup nameBtnAction="اعمال" tabOne="موفق" tabTwo="ناموفق" nameBtn="فیلتر" classNameBtn="button__filter__group__transAction"/> 
      </div>
    <TableTransAction /> 
  </div>
  );
}

export default index;
