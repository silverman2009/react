import { useContext } from "react"
import { writeComponent } from './../context/WriteComponentContext';
const Write = (props) => {
    const { isClick } = useContext(writeComponent)
    return (
        <div>
            <div>
                <button onClick={props.handleClickWrite} type="button" className="create__new__message">{isClick ? "بازگشت" : props.nameBtn}</button>
            </div>
            <div className={isClick ? "d-block mt-3" : "d-none"}>
                {props.children}
            </div>
        </div>
    );
}

export default Write;
