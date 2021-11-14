import { NavLink, Link } from "react-router-dom";
import {
  MdDashboardCustomize,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { HiOfficeBuilding , HiUserAdd} from "react-icons/hi";
import { VscGitPullRequestCreate } from "react-icons/vsc"
import { GiReceiveMoney } from "react-icons/gi"
import { FaUsersCog, FaStore, FaSignOutAlt } from "react-icons/fa"
import {RiGitPullRequestFill} from "react-icons/ri"
import { useState } from "react";

const Aside = () => {
  return (
    <div className="aside__dashbord ">
      {/* avatar && name Shop */}
      <div className="d-flex align-items-center border-bottom pb-2">
        <div className="avatar__shopName"></div>
        <p className="fony80 fontfamily m-0">نام فروشگاه</p>
      </div>
      {/* route */}
      <div className="container__route_dashbord py-4 px-4 border-bottom pb-5 ">
        <div className="">
          <NavLink
            to="/home"
            activeClassName="activeClassName"
            className="navLink__route"
          >
            <div className="d-flex align-items-center px-3">
              <MdDashboardCustomize className="icon-Route" size={25} />

              <p className="nav_link_route fontfamily m-0 px-3">داشبورد</p>
            </div>
          </NavLink>
        </div>
        <div className="">
          <NavLink
            to="/MangeTransactions"
            activeClassName="activeClassName"
            className="navLink__route"
          >
            <div className="d-flex align-items-center px-3">
              <GiReceiveMoney className="icon-Route" size={22} />

              <p className="nav_link_route fontfamily m-0 px-3">تسویه حساب ها</p>
            </div>
          </NavLink>
        </div>
        <div className="">
          <NavLink
            to="/ManageRequest"
            activeClassName="activeClassName"
            className="navLink__route"
          >
            <div className="d-flex align-items-center px-3">
              <RiGitPullRequestFill className="icon-Route" size={22} />

              <p className="nav_link_route fontfamily m-0 px-3">مدیریت درخواست‌ها</p>
            </div>
          </NavLink>
        </div>
       
       
       
        <div className="">
          <NavLink
            to="/insertPhoneNumber"
            activeClassName="activeClassName"
            className="navLink__route"
          >
            <div className="d-flex align-items-center px-3">
              <HiUserAdd className="icon-Route" size={22} />

              <p className="nav_link_route fontfamily m-0 px-3">اضافه کردن کاربر</p>
            </div>
          </NavLink>
        </div>
        

       

        
      </div>
      {/* signOut */}
      <div className="container__route_dashbord py-4 px-4  pb-3">
      <div className="">
          <NavLink
            to="/insertPhoneNumber"
            activeClassName="activeClassName"
            className="navLink__route"
          >
            <div className="d-flex align-items-center px-3">
              <FaSignOutAlt className="icon-Route" size={22} />

              <p className="nav_link_route fontfamily m-0 px-3">خروج</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Aside;
