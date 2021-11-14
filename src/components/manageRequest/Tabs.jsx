import React from "react";
import { Tab, Nav } from "react-bootstrap";
import ContentTabs from "./ContentTabs";
import "./style.css";

const Tabs = ({nameItem1,nameItem2,nameItem3,nameItem4}) => {
  return (
    <div className="bg-white container_tabs">
      <Tab.Container defaultActiveKey="first">
        <div className="container__nav_tab_reqest mt-4 mx-5">
          <Nav>
            <Nav.Item>
              <Nav.Link eventKey="first" className="fony80 fontfamily">
              همه
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className="fony80 fontfamily">
                درخواست ها تایید شده
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="three" className="fony80 fontfamily">
                درخواست های تایید نشده
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="four" className="fony80 fontfamily">
                در حال انتظار
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <div className="mx-5">
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <ContentTabs/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <ContentTabs />
            </Tab.Pane>
            <Tab.Pane eventKey="three">
              <ContentTabs />
            </Tab.Pane>
            <Tab.Pane eventKey="four">
              <ContentTabs />
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </div>
  );
};

export default Tabs;
