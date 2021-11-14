import { Row, Tab, Nav, Col } from "react-bootstrap"

const TabsMessage = (props) => {

    return (

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className="container__TabMessage">
                <div className="tab__item__container__TabMessage">
                    <Nav className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">{props.itemOne}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">{props.itemTwo}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="three">{props.itemThree}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="four">{props.itemFour}</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>

                <div>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            {props.contentOne}
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            {props.contentTwo}
                        </Tab.Pane>
                        <Tab.Pane eventKey="three">
                            {props.contentThree}
                        </Tab.Pane>
                        <Tab.Pane eventKey="four">
                            {props.contentFour}
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </div>
        </Tab.Container>

    );
}

export default TabsMessage;
