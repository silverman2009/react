import {Button} from "react-bootstrap"
const index = () => {
  return (
    <div class="container-fluid p-0 m-0">
      <div class="row p-0 m-0">
        <div class="card p-2 m-3 mx-5 bg-white">
            <div class="card-header justify-content-end round border-0 bg-transparent m-0 p-0">
              <div class="m-1 p-0 ">
                <button class="bg-primary rounded border-0  font-weight-bold m-3  py-2 px-3">
                  تنظیمات
                </button>
              </div>
          </div>
          <div class="card-body p-1 my-1 mx-4">
              <form class="m-0 p-2">
                <div class="form-group row mx-0 my-2 p-0">
                  <label for="inputEmail3" class="col-sm-2 col-form-label font-weight-bold px-0">موضوع : </label>
                  <div class="col-sm-10 px-0">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="موضوع"/>
                  </div>
                </div>
                <div class="form-group row mx-0 my-2 p-0">
                  <label for="inputEmail3" class="col-sm-2 col-form-label font-weight-bold px-0">عنوان موضوع : </label>
                  <div class="col-sm-10 px-0">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="عنوان موضوع"/>
                  </div>
                </div>
                <div class="form-group form-inline mt-3">
                    <div class="ml-3 p-0">
                    <i class="fa fa-bold font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                    <i class="fa fa-italic font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                    <i class="fa fa-underline font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                    </div>
                    <div class="mx-3 p-0">
                      <i class="fa fa-align-right font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                      <i class="fa fa-align-center font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                      <i class="fa fa-align-left font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                      <i class="fa fa-align-justify font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                    </div>
                    <div class="mx-3 p-0">
                      <i class="fa fa-indent font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                      <i class="fa fa-outdent font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                    </div>
                    <div class="mx-3 p-0">
                      <i class="fa fa-list-ol font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                      <i class="fa fa-list-ul font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                    </div>
                    <div class="mx-3 p-0">
                      <i class="fa fa-trash font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                    </div>
                    <div class="mx-3 p-0">
                      <i class="fa fa-chain font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                    </div>
                    <div class="mx-3 p-0">
                      <i class="fa fa-tags font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                    </div>
                </div>
                <div class="my-4 justify-content-center">
                  <textarea rows="5" class="form-control" style={{width:"90%",minWidth:"90%", minHeight:"100%"}} placeholder="یادداشت خود را در اینجا بنویسید ..."></textarea>
                </div>
                <div class="col-12 m-0 p-0" style={{width:"90%"}}> 
                  <h6 class=" font-weight-bold">هشتگ ها</h6>
                  هشتگ ها
                </div>
                <div class="m-1 p-2">        
                      <b-dropdown text-variant="dark" variant="primary" right text="افزودن جزئیات" dropdown >
                        <b-dropdown-item class="bg-info m-2 p-0 rounded"><i class="fa fa-plus-square m-1 text-dark"></i><span class="text-dark">افزودن ستون</span><i class="fa fa-arrows-h text-dark mr-3"></i></b-dropdown-item>
                        <b-dropdown-item class="bg-info m-2 p-0 rounded"><i class="fa fa-plus-square m-1 text-dark "></i><span  class="text-dark">افزودن سطر</span><i class="fa fa-arrows-v text-dark mr-3"></i></b-dropdown-item>
                      </b-dropdown>
                </div>
              </form>
          </div>
         </div>
      </div>
       <div class="row p-0 m-0">
        <div class="card p-2 m-3 mx-5 bg-white">
            <div class="card-header justify-content-end round border-0 bg-transparent m-0 p-0">
              <div class="m-1 p-0 ">
                <button class="bg-primary rounded border-0  font-weight-bold m-3  py-2 px-3">
                  تنظیمات
                </button>
              </div>
          </div>
          <div class="card-body p-1 my-1 mx-4">
              <form class="m-0 p-2">
                <div class="form-group row mx-0 my-2 p-0">
                  <label for="inputEmail3" class="col-sm-2 col-form-label font-weight-bold px-0">موضوع : </label>
                  <div class="col-sm-10 px-0">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="موضوع"/>
                  </div>
                </div>
                <div class="form-group row mx-0 my-2 p-0">
                  <label for="inputEmail3" class="col-sm-2 col-form-label font-weight-bold px-0">عنوان موضوع : </label>
                  <div class="col-sm-10 px-0">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="عنوان موضوع"/>
                  </div>
                </div>
                <div class="form-group form-inline mt-3">
                    <div class="ml-3 p-0">
                    <i class="fa fa-bold font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                    <i class="fa fa-italic font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                    <i class="fa fa-underline font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                    </div>
                    <div class="mx-3 p-0">
                      <i class="fa fa-align-right font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                      <i class="fa fa-align-center font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                      <i class="fa fa-align-left font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                      <i class="fa fa-align-justify font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                    </div>
                    <div class="mx-3 p-0">
                      <i class="fa fa-indent font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                      <i class="fa fa-outdent font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                    </div>
                    <div class="mx-3 p-0">
                      <i class="fa fa-list-ol font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                      <i class="fa fa-list-ul font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                    </div>
                    <div class="mx-3 p-0">
                      <i class="fa fa-trash font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                    </div>
                    <div class="mx-3 p-0">
                      <i class="fa fa-chain font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                    </div>
                    <div class="mx-3 p-0">
                      <i class="fa fa-tags font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                    </div>
                </div>
                <div class="my-4 justify-content-center">
                  <textarea rows="5" class="form-control" style={{width:"90%",minWidth:"90%", minHeight:"100%"}} placeholder="یادداشت خود را در اینجا بنویسید ..."></textarea>
                </div>
                <div class="col-12 m-0 p-0" style={{width:"90%"}}> 
                  <h6 class=" font-weight-bold">هشتگ ها</h6>
                  هشتگ ها
                </div>
                <div class="m-1 p-2">        
                      <b-dropdown text-variant="dark" variant="primary" right text="افزودن جزئیات" dropdown >
                        <b-dropdown-item class="bg-info m-2 p-0 rounded"><i class="fa fa-plus-square m-1 text-dark"></i><span class="text-dark">افزودن ستون</span><i class="fa fa-arrows-h text-dark mr-3"></i></b-dropdown-item>
                        <b-dropdown-item class="bg-info m-2 p-0 rounded"><i class="fa fa-plus-square m-1 text-dark "></i><span  class="text-dark">افزودن سطر</span><i class="fa fa-arrows-v text-dark mr-3"></i></b-dropdown-item>
                      </b-dropdown>
                </div>
                   <div class="col-12 text-left m-0 p-2">
                    <Button variant="danger"> حذف </Button>
                    <Button variant="success"> تایید </Button>
                </div>
              </form>
          </div>
         </div>
      </div>
  </div>
  );
}

export default index;
