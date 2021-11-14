import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

const DatePickerComponent = ({ placeholder, classNameLabel, nameLabel, month, tagLabel, value, onChange, disableDayPicker, plugins,format }) => {
    return (
        <div className={classNameLabel}>
            {tagLabel}
            <DatePicker
                format={format}
                value={value}
                onChange={onChange}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                placeholder={placeholder}
                onlyMonthPicker={month}
                disableDayPicker={disableDayPicker}
                plugins={plugins}
            />
        </div>
    );
}

export default DatePickerComponent;
