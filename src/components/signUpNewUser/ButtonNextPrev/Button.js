
import styles from "./button.module.css";
const ButtonComponent = ({ namebtn, onClick , className, classNameBtn}) => {
  return (
  <div className="row p-0 m-0">
    <div className={`col-lg-12 col-md-12 col-sm-12 col-12 p-0 ${className}`}>
    <button className={`${styles.btn_custom_submit_form_button} ${classNameBtn}`} onClick={onClick}>
        {namebtn}
      </button>
    </div>
  </div>
  );
};

export default ButtonComponent;
