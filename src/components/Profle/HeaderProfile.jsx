import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap"

const HeaderProfile = () => {
    return (
        <div className="d-flex justify-content-end align-items-center">
            <div className="p-4">
                <div className="d-flex">
                    <ButtonGroup className="btn__group_custom">
                        <DropdownButton as={ButtonGroup} title="تنظیمات رویداد" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                    <button className="btn__start__useProfile"><span><i className="fa fa-star text-white"></i></span></button>
                </div>
            </div>
        </div>
    );
}

export default HeaderProfile;
