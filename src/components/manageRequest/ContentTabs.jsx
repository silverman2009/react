import React from "react";
import DatePickerComponent from "./../DatePickerComponent";
import Input from "./../Input";
import SearchIcon from "./../img/search-icon.svg"
import Table from "./../tabel/Table"

const ContentTabs = ({CreditBalance}) => {
  return (
    <div className="bg-transparent">
      <p className=" fontfamily m-0 text-center mt-4 mb-3 colorGoodNight">موجودی اعتبار شما : <span style={{color:"#0096f5",fontSize:"2rem"}}>1,000,000</span> تومان</p>
      <div className="container__filters_manage_transacton mt-5">
        <DatePickerComponent
          classNameLabel="datePickerManageTransactins"
          tagLabel={
            <p className="fony80 fontfamily m-0 pb-1 px-1 colorGoodNight">
              تاریخ و ساعت
            </p>
          }
        />
        <div>
          <p className="fony75 fontfamily m-0 colorGoodNight pb-1">
            بر اساس شماره موبایل یا نام و نام‌خانوادگی جستجو نمایید
          </p>
          <Input
             buttonAdd={
                 <div className="container__search_icon">
                     <img src={SearchIcon} alt="search"/>
                 </div>
             }
            className="input_searchBox_manageSearch"
           />
        </div>
      </div>
      <Table/>
    </div>
  );
};

export default ContentTabs;
