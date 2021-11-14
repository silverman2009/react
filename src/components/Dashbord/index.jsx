import ChartArea from "./AreaChart"
import PieChart from "./PieChart";
import LineChart from "./LineChart"
const index = () => {
  return (
    <div className="container-fluid bg-gray-lightest p-0 container-body">
    <div className="card card-1 bg-transparent shadow-none mb-3 pt-3 border-0 ">        
        <div className="row shadow-none p-0 m-0">
            <span className="mx-2 click-aside d-none">
                <button className="ml-auto"><i className="fa fa-navicon"></i></button>
            </span>             
            <div className="btn-group mr-auto mx-2 shadow-none" role="group" aria-label="Button group with nested dropdown">
                  <div className="btn-group" role="group">
                      <button id="btnDrop1" type="button" className="btn btn-info px-1 dropdown-toggle shadow-none" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      تنظیمات رویداد
                      </button>
                      <div className="dropdown-menu" aria-labelledby="btnDrop1">
                      <a className="dropdown-item" href="#">Dropdown link</a>
                      <a className="dropdown-item" href="#">Dropdown link</a>
                      </div>
                  </div>
              </div>
            {/* <button className="btn btn-primary shadow-none ml-2"><i className="fa fa-star"></i></button> */}
        </div>
    </div>
    <div className="row justify-content-around card-2 shadow-none p-0 m-0">
        <div className="d-flex m-2">
        <div className="col-6 pr-1">
          <div className="col bg-white my-3 card-2-2 p-0 shadow-none overflow-hidden border rounded">
              <div className="row card-2-2-1 shadow-none m-0 p-0 border-bottom rounded-0 border-top-0 border-left-0 border-right-0 ">
                  <div className="col-6 m-0 p-0 text-right">
                      <h4 className="font-weight-600 m-3">کاربران فعال</h4>
                      <h6 className="text-alert-secondary m-3">کاربران</h6>
                  </div>
                  <div className="col-6 m-0 p-0 text-left align-self-center">
                          <i className="fa fa-ellipsis-v m-3"></i>
                  </div>
              </div>
              <div className="row text-right m-2 p-0">
                  <div className="col-7 my-3">
                      <span className="col">
                          <PieChart/>
                      </span>
                  </div>
                  <div className="col-5 my-3">
                      <div className="">
                              <span className="font-weight-bold text-right">  کل کاربران {715002}  </span>
                                  <span className="font-weight-bold text-left float-left"> 70% </span>  
                          <div className="progress my-2">
                          <div className="progress-bar bg-success progress-bar-striped" role="progressbar" style={{width:"70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          </div>
                          <div className="">
                              <span className="font-weight-bold text-right"> کاربران فعال {11489} </span>
                                  <span className="font-weight-bold text-left float-left"> 30% </span>                      
                          <div className="progress my-2">
                          <div className="progress-bar bg-danger progress-bar-striped" role="progressbar" style={{width:"30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          </div>
                  </div>
              </div>
          </div>
          <div className="col bg-white p-0 my-3 rounded border">
              <div className="row justify-content-around m-0 p-0 mx-2 ">
                  <div className="col-5 rounded shadow-none border p-1 mx-2 my-5">
                      <div className="row justify-content-between align-self-center rounded p-0 my-2 mx-0">
                          <div className="col-6 align-self-center m-0 p-0 my-3 text-center">
                          <h3 className="text-secondary font-weight-bold">امتیاز</h3>
                          <h3 className="font-weight-bold">56%</h3>
                          </div>
                          <div className="col-6 align-self-center p-0 m-0"><i className="fa fa-empire m-2 text-lightgreen" aria-hidden="true"></i></div>
                      </div>
                  </div>
                  <div className="col-5 rounded shadow-none border p-1 mx-2 my-5">
                      <div className="row justify-content-between align-self-center rounded p-0 my-2 mx-0">
                          <div className="col-6 align-self-center m-0 p-0 my-3 text-center">
                          <h3 className="text-secondary font-weight-bold">اعتبار</h3>
                          <h3 className="font-weight-bold">47%</h3> 
                          </div>
                          <div className="col-6 align-self-center m-0 p-0"><i className="fa fa-empire m-2 text-danger" aria-hidden="true"></i>
                      </div>
                      </div>
                  </div>
              </div>
           </div>
        </div>
        <div className="col-6 bg-white card-2-3 p-2 my-3 shadow-none overflow-hidden border rounded">
            <div className="text-right p-2 mt-3 border-bottom border-left-0 border-right-0 border-top-0">
              <h3 className="font-weight-bold"> اخبار و اطلاعیه</h3>
              <p className="text-justify font-weight-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, molestiae, facere dolorum deleniti harum dolore dicta maxime aspernatur dolorem fugit porro accusamus amet animi, consequuntur quasi? Nesciunt officiis voluptatum voluptatem!</p>
            </div>
              <div>
                  <div className="d-flex justify-content-around align-items-center text-center my-4">
                      <span><img  className="border rounded m-2" src="../../assets/css/images/brand/icon.png" />
                      <h6>متن تبلیغاتی</h6>
                      </span>
                      <span><img  className="border rounded m-2"  src="../../assets/css/images/brand/icon.png" />
                      <h6>متن تبلیغاتی</h6>
                      </span>
                      <span><img  className="border rounded m-2"  src="../../assets/css/images/brand/icon.png" />
                      <h6>متن تبلیغاتی</h6>
                      </span>
                  </div>
              </div>
        </div>
        </div>
    </div>
    <div className="d-flex m-2 car-3 justify-content-between shadow-none rounded">
        <div className="col-auto w-30 mx-1 p-0 bg-white shadow-none border rounded">
            <h3 className="row font-weight-bold m-1 p-1">چه خبر ؟</h3>
            <div className="card-3-3-1 col-12 shadow-none border my-3">
                <span className="row justify-content-between border-left-0 border-right-0 border-top-0 border-bottom">
                    <p className="col-11 font-weight-bold">بررسی اجمالی این ماه </p>
                    <p className="col-1"><i className="fa fa-ellipsis-v"></i></p>
                </span>
                <span >
                    <p className="row p-0 m-0 justify-content-between">
                        <span className="col-8 ml-auto text-right px-0 my-2">پروژه های جدید این هفته و ماه
                            <i className="bp4"></i>
                        </span>
                        <span className="col-4 mr-auto text-left px-0 my-2"> 5 روز قبل <i className="fa fa-ellipsis-v"></i></span>
                    </p>
                    <p className="text-right my-1 p-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis laboriosam praesentium nobis
                    </p>
                </span>
            </div>
        </div>
        <div className="col-auto w-65 mx-1 shadow-none p-0">
            <div className="card w-100">
                <ChartArea/>
            </div>
            <div className="card">
                <LineChart/>
            </div>
        </div>
    </div>
</div>
  );
}

export default index;
