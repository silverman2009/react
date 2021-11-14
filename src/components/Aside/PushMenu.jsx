import { Button } from "react-bootstrap"
import Female from "../../assets/css/images/users/female/33.png"
import TabsAside from './TabsASide';
const PushMenu = () => {
  return (
    <aside className="app-sidebar">
      <div className="app-sidebar__user pb-0">
        <div className="user-body">
          <span className="avatar avatar-xxl brround text-center cover-image">
            <img src={Female} alt="Profile-img" className="avatar avatar-xxl brround" />
          </span>
        </div>
        <div className="user-info">
          <a href="#" className="ml-2"><span className="text-dark app-sidebar__user-name font-weight-semibold">فروشگاه عبدی </span><br />
            <span className="text-muted app-sidebar__user-name text-sm "> شعبه 1 </span>
          </a>
        </div>
      </div>

      <div className="tab-menu-heading siderbar-tabs border-0 p-0 mt-3">
        <div className="tabs-menu d-flex justify-content-center border-bottom pb-3">
          {/* link for scren */}
          <div>
            <Button className="shadow-none mx-1" variant="default">
              <i className="fa fa-home" />
            </Button>
            <Button className="shadow-none mx-1" variant="default">
              <i className="fa fa-envelope" />
            </Button>
            <Button className="shadow-none mx-1" variant="default">
              <i className="fa fa-user" />
            </Button>
            <Button className="shadow-none mx-1" variant="default">
              <i className="fa fa-power-off" />
            </Button>
          </div>
        </div>
      </div>
      {/* tabs aside */}
      <TabsAside />
    </aside>
  );
}

export default PushMenu;
