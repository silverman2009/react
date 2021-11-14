import Header from "../Header"
import PushMenu from "../Aside/PushMenu"

const index = ({ children }) => {
    return (
        <div>
            <Header />
            <PushMenu/>
            {children}
        </div>
    );
}

export default index;
