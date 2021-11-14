import React from "react";
import { Tab, Nav } from "react-bootstrap";
import ContentTabs from "./ContentTabs";
import "./style.css";
import { IoMdNotifications } from 'react-icons/io';

const Tabs = ({nameItem1,nameItem2,nameItem3,nameItem4}) => {
  return (
    <div className="bg-white container_tabs">
      <Tab.Container defaultActiveKey="first">
        {/* btn */}
        <div className="d-flex m-3">
          <div>
            <button type="button" className="add__new__user__list">
              افزودن کسب و کار جدید
            </button>
          </div>
          <div className="mx-2">
            <button
              type="button"
              className="add__new__user__list d-flex  align-items-center"
            >
              <p className="m-0">تعداد درخواست‌ها</p>
                          <div className="pe-2 notifiction_requests">
                              <div>99+</div>
                <IoMdNotifications size={22} />
              </div>
            </button>
          </div>
        </div>
        {/* btn */}
        <div className="container__nav_tab_reqest mt-4 mx-5">
          <Nav>
            <Nav.Item>
              <Nav.Link eventKey="first" className="fony80 fontfamily">
              همه
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className="fony80 fontfamily">
                تکمیل شده
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="three" className="fony80 fontfamily">
                در حال تکمیل
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="four" className="fony80 fontfamily">
                در حال انتظار
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="five" className="fony80 fontfamily">
                 رد شده
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
            <Tab.Pane eventKey="five">
              <ContentTabs />
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </div>
  );
};

export default Tabs;
