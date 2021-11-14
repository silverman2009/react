import { Tab, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import "./aside.css"
const TabsAside = () => {
    return (
        <Tab.Container defaultActiveKey="first">
            <div className="container__tabs_aside">
                <div className="contaner__tab_aside">
                    <Nav>
                        <Nav.Item className="nav_item_aside">
                            <Nav.Link eventKey="first">

                                <span className="container__icon_tabs text-center"><i className="fa fa-user"></i></span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav_item_aside">
                            <Nav.Link eventKey="second">

                                <span className="container__icon_tabs"><i className="fa fa-home"></i></span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav_item_aside">
                            <Nav.Link eventKey="three">

                                <span className="container__icon_tabs"><i className="fa fa-amazon"></i></span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav_item_aside">
                            <Nav.Link eventKey="four">

                                <span className="container__icon_tabs"><i className="fa fa-address-book"></i></span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav_item_aside">
                            <Nav.Link eventKey="five">
                                <span className="container__icon_tabs"><i className="fa fa-bank"></i></span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>

                <div className="">
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <div>
                                <p className="text-center fontfamily text__custom__style pt-2">مدیریت مشتریان</p>

                                <ul className="mx-4 mt-4">
                                    <li className="text-right">
                                        <NavLink exact activeClassName="active__navLink__aside" to="/ListCustomer" className="fontfamily text__custom__style">لیست مشتریان</NavLink >
                                    </li>
                                    <li className="text-right mt-2">
                                        <NavLink exact activeClassName="active__navLink__aside" to="/ListCustomerNotActivate" className="fontfamily text__custom__style">لیست مشتریان غیر فعال شده</NavLink >
                                    </li>
                                    <li className="text-right mt-2">
                                        <NavLink exact activeClassName="active__navLink__aside" to="/CategoryCustomer" className="fontfamily text__custom__style">دسته بندی مشتریان</NavLink >
                                    </li>
                                    <li className="text-right mt-2">
                                        <NavLink exact activeClassName="active__navLink__aside" to="/'lpkojnu" className="fontfamily text__custom__style">لیست مشتریان</NavLink >
                                    </li>
                                </ul>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <p>this is onee</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="three">
                            <p>this is oneee</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="four">
                            <p>this is oneeee</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="five">
                            <p>this is oneeeeeee</p>
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </div>
        </Tab.Container>
    );
}

export default TabsAside;
