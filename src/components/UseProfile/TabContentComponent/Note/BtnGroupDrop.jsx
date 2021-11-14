import { ButtonGroup, DropdownButton } from "react-bootstrap"

const BtnGroupDrop = ({ classNameBtn, nameBtn, children }) => {
    return (
        <div>
            <ButtonGroup className={`${classNameBtn}`}>
                <DropdownButton  title={nameBtn} id="bg-nested-dropdown">
                    {children}
                </DropdownButton>
            </ButtonGroup>
        </div>
    );
}

export default BtnGroupDrop;
