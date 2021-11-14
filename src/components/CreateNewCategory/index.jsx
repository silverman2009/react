import InputNewCategory from "./InputCategory"
const index = () => {
  return (
    <div className="container-fluid">
      <div className="row p-0 m-0">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 px-1 py-1 ">
          <div className="p-5 m-3 border rounded bg-white">
            <div>
              <h6 className="text-right font-weight-bold">ایجاد دسته جدید</h6>
            </div>
            <InputNewCategory
              name="نام دسته"
              title="عنوان دسته"
              placeholderOne="نام دسته"
              placeholderTwo="عنوان دسته"
            />
            <InputNewCategory
              name=" تاریخ انتضا"
              title="ظرفیت دسته"
              placeholderOne="تاریخ انقضا"
              placeholderTwo="ظرفیت دسته"
            />
            <InputNewCategory
              name="کد تخفیف دسته"
              title=" کد پیام دسته"
              placeholderOne="کد تخفیف دسته "
              placeholderTwo="کد پیام دسته"
              icon="fa fa-plus-circle"
            />
            {/* check have alarm or not */}
            <div className="d-flex justify-content-start pt-4 pb-2 pr-1">
              <p className="m-0">آلارم :</p>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="دارد"
                />
                <label className="form-check-label px-1" for="inlineRadio1"
                >دارد</label
                >
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="ندارد"
                />
                <label className="form-check-label px-1" for="inlineRadio2">ندارد</label>
              </div>
            </div>


            {/* type alarm */}
            <div className="d-flex justify-content-between align-items-center py-3">
              <div className="d-flex align-items-center">
                <p className="m-0 type-alarm">نوع آلارم :</p>
                <div className="radio-toolbar">
                  <input
                    type="radio"
                    id="radioMyPanel"
                    name="radioPanel"
                    value="پنل من"
                    checked
                  />
                  <label for="radioMyPanel">پنل من</label>

                  <input
                    type="radio"
                    id="radioMassage"
                    name="radioPanel"
                    value="پیامک"
                  />
                  <label for="radioMassage">پیامک</label>

                  <input
                    type="radio"
                    id="radioAppliction"
                    name="radioPanel"
                    value="اپلیکیشن"
                  />
                  <label for="radioAppliction">اپلیکیشن</label>
                </div>
              </div>
              {/* data picker */}
            </div>
            <div>
              <div className="d-flex align-items-center">
                <p className="m-0  type-alarm">نحوه ورود اعضا :</p>
                <div className="radio-toolbar">
                  <input
                    type="radio"
                    id="radioAuto"
                    name="radioType"
                    value="اتوماتیک"
                    checked
                  />
                  <label for="radioAuto">اتوماتیک</label>

                  <input
                    type="radio"
                    id="radioWrite"
                    name="radioType"
                    value="دستی"
                  />
                  <label for="radioWrite">دستی</label>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
