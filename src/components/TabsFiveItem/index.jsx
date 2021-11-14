import { Tab, Nav } from "react-bootstrap"
import "./tabs.css"

const index = (props) => {
    return (
        <div>
            <Tab.Container defaultActiveKey="first">
                <div className="container_tab_userProfile">
                    <Nav>
                        <Nav.Item className={props.classTabItem}>
                            <Nav.Link eventKey="first">
                                {props.nameItemOne}
                                <span className="container__icon_tabs"><i className={props.iconOne}></i></span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={props.classTabItem}>
                            <Nav.Link eventKey="second">
                                {props.nameItemTwo}
                                <span className="container__icon_tabs"><i className={props.iconTwo}></i></span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={props.classTabItem}>
                            <Nav.Link eventKey="three">
                                {props.nameItemThree}
                                <span className="container__icon_tabs"><i className={props.iconThree}></i></span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={props.classTabItem}>
                            <Nav.Link eventKey="four">
                                {props.nameItemFour}
                                <span className="container__icon_tabs"><i className={props.iconFour}></i></span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={props.classTabItem}>
                            <Nav.Link eventKey="five">
                                {props.nameItemFive}
                                <span className="container__icon_tabs"><i className={props.iconFive}></i></span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>

                <div className="border my-5">
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            {props.componentOne}
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            {props.componentTwo}
                        </Tab.Pane>
                        <Tab.Pane eventKey="three">
                            {props.componentThree}
                        </Tab.Pane>
                        <Tab.Pane eventKey="four">
                            {props.componentFour}
                        </Tab.Pane>
                        <Tab.Pane eventKey="five">
                            {props.componentFive}
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </Tab.Container>
        </div>
    );
}

export default index;
