import DatePicker from "react-multi-date-picker"

const index = ({ placeholder, classNameLabel, nameLabel, month }) => {
    return (
        <div>
            <p className={`text-right ${classNameLabel}`}>{nameLabel}</p>
            <DatePicker
                placeholder={placeholder}
                onlyMonthPicker={month}
            />
        </div>
    );
}

export default index;
