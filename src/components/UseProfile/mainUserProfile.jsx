import TabsFiveItem from "../TabsFiveItem"
import UserProfile from "./TabContentComponent/UserProfile"
import TransAction from "./TabContentComponent/TransAction"
import MessageContent from "./TabContentComponent/MessageContent"
import Note from "./TabContentComponent/Note/Note"
import Category from "./TabContentComponent/Category"
import "./userProfile.css"
import Profile from "../../assets/css/images/users/female/1.jpg"
const mainUserProfile = () => {
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

            {/* tabs  */}

            <TabsFiveItem
                iconOne="fa fa-user"
                nameItemOne="پروفایل کاربری"
                componentOne={<UserProfile />}
                iconTwo="fa fa-exchange"
                nameItemTwo="تراکنش‌ها"
                componentTwo={<TransAction />}
                iconThree="fa fa-envelope-o"
                nameItemThree="پیام"
                componentThree={<MessageContent />}
                iconFour="fa fa-sticky-note-o"
                nameItemFour="یاداشت‌ها"
                componentFour={<Note />}
                iconFive="fa fa-list-alt"
                nameItemFive="دسته‌ها"
                componentFive={<Category />}
            />
        </div>
    );
}

export default mainUserProfile;
