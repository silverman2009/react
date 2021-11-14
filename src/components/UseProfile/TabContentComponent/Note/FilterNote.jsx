import { ButtonGroup, DropdownButton } from "react-bootstrap"
import DatePicker from "../../../DatePicker"
const FilterNote = ({ classNameBtn, nameBtn }) => {
    return (
        <div>
            <ButtonGroup className={`${classNameBtn}`}>
                <DropdownButton as={ButtonGroup} title={nameBtn} id="bg-nested-dropdown">
                    <div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div>
                                <DatePicker classNameLabel="DatePickerNote__note" nameLabel="از تاریخ" />
                            </div>
                            <div className="mt-2">
                                <DatePicker classNameLabel="DatePickerNote__note" nameLabel="تا تاریخ" />
                            </div>
                        </div>
                        <button className="btn_action_FilterBtnGroup">اعمال</button>
                    </div>
                </DropdownButton>
            </ButtonGroup>
        </div>
    );
}

export default FilterNote;
