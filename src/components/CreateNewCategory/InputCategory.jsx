import "./input.css"
const InputCategory = ({name,title,placeholderOne,placeholderTwo,icon}) => {
  return (
    <div className="d-flex justify-content-between mt-5">
    <div className="container-input-newCategory">
      <label for="name-category" className="lable">{ name }</label>
      <div className=" ">
        <input
          id="name-category"
          className="input-new-category"
          placeholder={placeholderOne}
        />
          <span className="icon-puls-newCategory" ><i className={icon}></i></span>
      </div>
    </div>
    <div className="container-input-newCategory">
      <label for="title-category" className="lable">{ title }</label>
      <div className="m">
        <input
          id="title-category"
          className="input-new-category"
          placeholder={placeholderTwo}
        />
        <span className="icon-puls-newCategory" ><i className={icon}></i></span>
      </div>
    </div>
  </div>
  );
}

export default InputCategory;
