import ManageOrganitions from "./ManageOrganizationsAdmin/ManageOrganizations"
import AsideAdmin from './../../Aside/AsideAdmin';

const ManageOrganitionsAdmin = () => {
  return (
    <div>
      <div className="container_dashbord">
        <div className="contaier__body_dashbord">
          <AsideAdmin />
          <ManageOrganitions />
        </div>
      </div>
    </div>
  );
};

export default ManageOrganitionsAdmin;
