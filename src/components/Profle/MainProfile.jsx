import Profile from "../../assets/css/images/users/female/1.jpg"


const MainProfile = () => {
    return (
        <div>
            <div
                className=" d-flex flex-column justify-content-center align-items-center profile__person__userProfile">
                <div className="container__avatar">
                    <img src={Profile} alt="user" />
                </div>
                <h4 className="name__user__userProfile">آلیسون</h4>
                <p>طراح وب</p>
                <div>
                    <span><i className="fa fa-star text-warning"></i></span>
                    <span><i className="fa fa-star text-warning"></i></span>
                    <span><i className="fa fa-star text-warning"></i></span>
                    <span><i className="fa fa-star text-warning"></i></span>
                    <span><i className="fa fa-star text-warning"></i></span>
                </div>
                <button type="button" className="edit__profile__userProfile">
                    ویرایش مشخصات
                </button>

            </div>
        </div>
    );
}

export default MainProfile;
