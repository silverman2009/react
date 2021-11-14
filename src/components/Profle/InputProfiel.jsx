
const InputProfiel = ({ nameLabel, classNameLabel, placeholder }) => {
    return (
        <div>
            <p className={classNameLabel}>{nameLabel}</p>
            <input placeholder={placeholder} />
        </div>
    );
}

export default InputProfiel;
