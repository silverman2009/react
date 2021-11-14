import Input from '../../../InputSearch'
import Table from "./TableCategory"
import "./category.css"
const index = () => {
    return (
        <div>
            <div className="grid__containerSearch__category">
                <Input />
            </div>
            <div className="mt-5">
                <Table />
            </div>
        </div>
    );
}

export default index;
