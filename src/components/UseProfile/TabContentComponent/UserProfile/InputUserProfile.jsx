import "./user.css"

const InputUserProfile = ({name,placeholder}) => {
  return (
    <div>
    <div className="container__input__userProfile px-3">
      <p className="label__input__userProfile text-right">{ name }</p>
      <input type="text" className="input__userProfile" placeholder={placeholder} />
    </div>
  </div>
  );
}

export default InputUserProfile;
