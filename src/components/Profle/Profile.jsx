import HeaderProfile from "./HeaderProfile"
import MainProfile from "./MainProfile"
import TabsFiveItem from "../TabsFiveItem"
import ContentOne from "./Tabs/ProfileTab/ContentOne"
import ContentTwo from "./Tabs/moneyBag/ContentTwo"
import OrganizationalProfile from "./Tabs/organizationalProfile/organizationa"
import Business from "./Tabs/BusinessProfile/Business"
import Info from "./Tabs/InfoSystem/Info"
import "./profile.css"

const Profile = () => {
    return (
        <div className="p-4">
            <div>
                <HeaderProfile />
            </div>
            <div>
                <MainProfile />
            </div>
            <TabsFiveItem
                classTabItem="tab__width"
                iconOne="fa fa-user"
                nameItemOne="پروفایل کاربری"
                componentOne={<ContentOne />}
                iconTwo="fa fa-exchange"
                nameItemTwo="کیف پول"
                componentTwo={<ContentTwo />}
                iconThree="fa fa-envelope-o"
                nameItemThree="پروفایل سازمانی"
                componentThree={<OrganizationalProfile />}
                iconFour="fa fa-sticky-note-o"
                nameItemFour="پروفایل کسب و کار"
                componentFour={<Business />}
                iconFive="fa fa-list-alt"
                nameItemFive="اطلاعات ورود به سیستم"
                componentFive={<Info />}

            />
        </div>
    );
}

export default Profile;
