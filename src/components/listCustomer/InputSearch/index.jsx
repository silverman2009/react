import "./input.css"
import SearchIcon from "./../../img/search-icon.svg"
const index = () => {
    return (
        <div className="reletive">
            <input className="input__search" />
             <img className="icon__search" src={SearchIcon} alt="serch" />
        </div>
    );
}

export default index;
