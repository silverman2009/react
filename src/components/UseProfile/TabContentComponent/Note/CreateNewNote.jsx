import BtnGroupDrop from "./BtnGroupDrop"
import { Button } from "react-bootstrap"
import "./note.css"
const CreateNewNote = () => {
    return (
        <div>
            <div className="d-flex justify-content-start align-items-cenetr">
                <BtnGroupDrop classNameBtn="btnGroup__alarm" nameBtn="ایجاد آلارم">
                    <div>
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
                    </div>
                </BtnGroupDrop>
                <BtnGroupDrop classNameBtn="btnGroup__alarm mr-5" nameBtn="افزودن چک لیست‌ها">
                    this is test
                </BtnGroupDrop>

            </div>
            <div className="container-fluid p-0 mt-5">
                <div className="row p-0 m-0">
                    <div className="card p-2 m-3 mx-5 bg-white">
                        <div className="card-header justify-content-end round border-0 bg-transparent m-0 p-0">
                            <div className="m-1 p-0 ">
                                <button className="bg-primary rounded border-0  font-weight-bold m-3  py-2 px-3">
                                    تنظیمات
                                </button>
                            </div>
                        </div>
                        <div className="card-body p-1 my-1 mx-4">
                            <form className="m-0 p-2">
                                <div className="form-group row mx-0 my-2 p-0">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label font-weight-bold px-0">موضوع : </label>
                                    <div className="col-sm-10 px-0">
                                        <input type="email" className="form-control" id="inputEmail3" placeholder="موضوع" />
                                    </div>
                                </div>
                                <div className="form-group row mx-0 my-2 p-0">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label font-weight-bold px-0">عنوان موضوع : </label>
                                    <div className="col-sm-10 px-0">
                                        <input type="email" className="form-control" id="inputEmail3" placeholder="عنوان موضوع" />
                                    </div>
                                </div>
                                <div className="form-group form-inline mt-3">
                                    <div className="ml-3 p-0">
                                        <i className="fa fa-bold font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                                        <i className="fa fa-italic font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                                        <i className="fa fa-underline font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                                    </div>
                                    <div className="mx-3 p-0">
                                        <i className="fa fa-align-right font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                                        <i className="fa fa-align-center font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                                        <i className="fa fa-align-left font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                                        <i className="fa fa-align-justify font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                                    </div>
                                    <div className="mx-3 p-0">
                                        <i className="fa fa-indent font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                                        <i className="fa fa-outdent font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                                    </div>
                                    <div className="mx-3 p-0">
                                        <i className="fa fa-list-ol font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                                        <i className="fa fa-list-ul font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                                    </div>
                                    <div className="mx-3 p-0">
                                        <i className="fa fa-trash font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                                    </div>
                                    <div className="mx-3 p-0">
                                        <i className="fa fa-chain font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                                    </div>
                                    <div className="mx-3 p-0">
                                        <i className="fa fa-tags font-weight-bold border rounded bg-gray-dark-lighter border-0 shadow-icon"></i>
                                    </div>
                                </div>
                                <div className="my-4 justify-content-center">
                                    <textarea rows="5" className="form-control" style={{ wdth: "90%", minWidth: "90%", minHeight: "100%" }} placeholder="یادداشت خود را در اینجا بنویسید ..."></textarea>
                                </div>
                                <div className="col-12 m-0 p-0" style={{ width: "90%" }}>
                                    <h6 className=" font-weight-bold">هشتگ ها</h6>
                                    {/* <Hashtag/> */}
                                </div>
                                <div className="m-1 p-2">
                                    <b-dropdown text-variant="dark" variant="primary" right text="افزودن جزئیات" dropdown data-toggle="popover" data-placement="top"  >
                                        <b-dropdown-item className="bg-info m-2 p-0 rounded"><i className="fa fa-plus-square m-1 text-dark"></i><span className="text-dark">افزودن ستون</span><i className="fa fa-arrows-h text-dark mr-3"></i></b-dropdown-item>
                                        <b-dropdown-item className="bg-info m-2 p-0 rounded"><i className="fa fa-plus-square m-1 text-dark "></i><span className="text-dark">افزودن سطر</span><i className="fa fa-arrows-v text-dark mr-3"></i></b-dropdown-item>
                                    </b-dropdown>
                                </div>
                                <div className="col-12 text-left m-0 p-2">
                                    <Button variant="danger"> حذف </Button>
                                    <Button variant="success"> تایید </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateNewNote;
