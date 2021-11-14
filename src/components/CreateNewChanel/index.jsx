import InputNewCategory from "../CreateNewCategory/InputCategory"

const index = () => {
  return (
    <div class="container-fluid bg-gray-lighter">
    <div class="row p-0 m-0 bg-gray-lighter">
      <div class="col-lg-12 col-md-12 col-sm-12 col-12 px-1 py-1 ">
        <div class="p-5 m-3 border rounded bg-white">
          <div>
            <h6 class="text-right font-weight-bold">ایجاد کانال جدید</h6>
          </div>
          <InputNewCategory
            name="نام کانال"
            title="عنوان کانال"
            placeholderOne="نام کانال"
            placeholderTwo="عنوان کانال"
          />
          <InputNewCategory
            name=" تاریخ انتضا"
            title="ظرفیت کانال"
            placeholderOne="تاریخ انقضا"
            placeholderTwo="ظرفیت کانال"
          />
          <InputNewCategory
            name="کد تخفیف کانال"
            title=" کد پیام کانال"
            placeholderOne="کد تخفیف کانال "
            placeholderTwo="کد پیام کانال"
            icon="fa fa-plus-circle"
          />
          {/* check have alarm or not  */}
          <div class="d-flex justify-content-start pt-4 pb-2 pr-1">
            <p class="m-0">آلارم :</p>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="دارد"
              />
              <label class="form-check-label px-1" for="inlineRadio1"
                >دارد</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="ندارد"
              />
              <label class="form-check-label px-1" for="inlineRadio2"
                >ندارد</label
              >
            </div>
          </div>
        

          {/* type alarm */}
           <div class="d-flex justify-content-between align-items-center py-3">
          <div class="d-flex align-items-center">
            <p class="m-0 type-alarm">نوع آلارم :</p>
          <div class="radio-toolbar">
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
           <div class="d-flex align-items-center">
            <p class="m-0  type-alarm">نحوه ورود اعضا :</p>
          <div class="radio-toolbar">
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
