import "./btn.css"
import { ButtonGroup, Dropdown, DropdownButton, Tab, Nav } from "react-bootstrap"
import DatePicker from "../DatePicker"


const index = ({ classNameBtn, nameBtn, tabOne, tabTwo ,nameBtnAction}) => {
    return (
        <div>
            <ButtonGroup className={`${classNameBtn}`}>
                <DropdownButton as={ButtonGroup} title={nameBtn} id="bg-nested-dropdown">
                    <div>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                            <div>
                                <Nav className="filter_dropDown_FilterBtnGroup">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">{tabOne}</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">{tabTwo}</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>

                            <div>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div>
                                            <div>
                                                <div className="d-flex flex-column justify-content-center align-items-center">
                                                    <DatePicker classNameLabel="Label__FilterBtnGroup" nameLabel="از" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center align-items-center pt-2">
                                                    <DatePicker classNameLabel="Label__FilterBtnGroup" nameLabel="تا" />
                                                </div>
                                            </div>
                                            <button type="button" className="btn_action_FilterBtnGroup">{nameBtnAction}</button>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        this is two
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>

                        </Tab.Container>
                    </div>
                </DropdownButton>
            </ButtonGroup>
        </div>
    );
}

export default index;
