
const Select = ({ classNameSelect, classNameLabel = "label__selelct__userProfile text-right", nameLabel, optionONe, optionTwo }) => {
    return (
        <div>
            <p className={classNameLabel}>{nameLabel}</p>
            <select className={classNameSelect}>
                <option value={optionONe}>{optionONe}</option>
                <option value={optionTwo}>{optionTwo}</option>
            </select>
        </div>
    );
}

export default Select;
