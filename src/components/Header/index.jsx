import {Link} from "react-router-dom"
import styles from "./Header.module.css"
import Brand from "../../assets/css/images/brand/logo.png"
import Profile from "../../assets/css/images/brand/icon.png"
import Avatar from "../../assets/css/images/users/female/33.png"

const index = () => {
  return (
    <div className="app-header header d-flex">
    <div className="container-fluid">
      <div className="d-f1 d-flex align-items-center">
        <a className="header-brand" href="#">
          <img
            src={Brand}
            className="header-brand-img main-logo"
            alt="Hogo logo"
          />
          <img
            src={Profile}
            className="header-brand-img icon-logo"
            alt="Hogo logo"
          />
        </a>

       {/* search icon */}
        <div className="header-form py-0 m-0">
          <form className="form-inline">
            <div className="search-element form-group mr-5 bg-gray-lightest rounded">
              <input
                className="form-control m-0 p-1"
                type="search"
                placeholder="جستجو"
                aria-label="Search"
              />
              <span className="my-auto bg-gray-lightest text-gray px-1"><i className="fa fa-search" /></span>
            </div>
          </form>
        {/* search bar */}
        </div>
        <li className="nav-item header-option m-2 d-flex align-items-center">
          <Link
            className="nav-link"
            data-toggle="dropdown"
            to="/"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fe fe-home mr-2" /> خانه
          </Link>
        </li>
        <li className="nav-item header-option m-2 d-flex align-items-center">
          <a
            className="nav-link "
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fa fa-phone mr-2" /> تماس با ما
          </a>
        </li>
        <li className="nav-item  header-option mx-2 d-flex align-items-center">
          <a
            className="nav-link"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fa fa-question mr-2" /> راهنما
          </a>
        </li>
        <div className="d-flex order-lg-2 mx-auto header-rightmenu">
          <div className="dropdown">
            <a id="fullscreen-button" className="nav-link icon full-screen-link my-0">
              <i className="fe fe-maximize-2" />
            </a>
          </div>
         {/* full screen */}
          <div className="dropdown header-notify">
            <a
              className="nav-link icon my-0"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fe fe-bell" />
              <span className="pulse bg-success" />
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
              <a href="#" className="dropdown-item text-center">4 اطلاعیه جدید</a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item d-flex pb-3">
                <div className="notifyimg bg-green">
                  <i className="fe fe-mail" />
                </div>
                <div>
                  <strong> پیام ارسال شد. </strong>
                  <div className="small text-muted">12 دقیقه قبل</div>
                </div>
              </a>
              <a href="#" className="dropdown-item d-flex pb-3">
                <div className="notifyimg bg-pink">
                  <i className="fe fe-shopping-cart" />
                </div>
                <div>
                  <strong> سفارش قرار داده شده </strong>
                  <div className="small text-muted">2 ساعت قبل</div>
                </div>
              </a>
              <a href="#" className="dropdown-item d-flex pb-3">
                <div className="notifyimg bg-blue">
                  <i className="fe fe-calendar" />
                </div>
                <div>
                  <strong> رویداد آغاز شده </strong>
                  <div className="small text-muted">1 ساعت قبل</div>
                </div>
              </a>
              <a href="#" className="dropdown-item d-flex pb-3">
                <div className="notifyimg bg-orange">
                  <i className="fe fe-monitor" />
                </div>
                <div>
                  <strong> راه اندازی مجدد شما </strong>
                  <div className="small text-muted">2 روز قبل</div>
                </div>
              </a>
              <div className="dropdown-divider" />
              <a
                href="#"
                className="dropdown-item text-center"
              >مشاهده تمام اعلان ها</a>
            </div>
          </div>
          {/* notifications */}
          <div className="dropdown header-user p-0 m-0 d-flex justify-content-center">
            <a
              className="nav-link leading-none siderbar-link p-0 d-flex "
              data-toggle="sidebar-right"
              data-target=".sidebar-right"
            >
              <span className="mr-3 d-none d-lg-block">
                <span
                  className="text-gray-white"
                ><span className="ml-2"> آلیسون </span></span>
              </span>
              <span
                className="avatar avatar-md brround"
              ><img
                src={Avatar}
                alt="Profile-img"
                className="avatar avatar-md brround"
              /></span>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
              <div className="header-user text-center mt-4 pb-4">
                <span
                  className="avatar avatar-xxl brround"
                ><img
                  src={Avatar}
                  alt="Profile-img"
                  className="avatar avatar-xxl brround"
                /></span>
                <a
                  href="#"
                  className="
        dropdown-item
        text-center
        font-weight-semibold
        user
        h3
        mb-0
        "
                >
                  آلیسون
                </a>
                <small> طراح وب </small>
              </div>
              <a className="dropdown-item" href="#">
                <i className="dropdown-icon mdi mdi-account-outline" /> تکنولوژی
                در میدیا سافت
              </a>
              <a className="dropdown-item" href="#">
                <i className="dropdown-icon mdi mdi-account-plus" /> افزودن یک
                حساب دیگر
              </a>
              <div className="card-body border-top">
                <div className="row">
                  <div className="col-6 text-center">
                    <a
                      className=""
                      href=""
                    ><i
                      className="
            dropdown-icon
            mdi mdi-message-outline
            fs-30
            m-0
            leading-tight
        "
                    /></a>
                    <div>صندوق ورودی</div>
                  </div>
                  <div className="col-6 text-center">
                    <a
                      className=""
                      href=""
                    ><i
                      className="
            dropdown-icon
            mdi mdi-logout-variant
            fs-30
            m-0
            leading-tight
        "
                    /></a>
                    <div>خروج</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         {/* profile */}
          <div className="dropdown">
            <a
              className="nav-link icon siderbar-link"
              data-toggle="sidebar-right"
              data-target=".sidebar-right"
            >
              <i className="fe fe-more-horizontal" />
            </a>
          </div>
         {/* Right-siebar */}
          <div className="dropdown">
            <a
              className="nav-link icon siderbar-link"
              data-toggle="sidebar-right"
              data-target=".sidebar-right"
            >
              <i className="fa fa-bars text-info" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default index;
