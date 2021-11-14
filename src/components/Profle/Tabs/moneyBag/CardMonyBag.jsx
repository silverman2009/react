import "./moneyBag.css"
const CardMonyBag = ({ icon, title, subTitle }) => {
    return (
        <div className="container__cardMoneyBag_Profile">
            <div className="right__cardMoneyBag_Profile">
                <span><i className={`fa-2x ${icon}`}></i></span>
            </div>
            <div className="left__cardMoneyBag_Profile">
                <p className="m-0 title__card__userProfile text-center">{title}</p>
                <p className="m-0 subTitle__cardMoneyBag_Profile">{subTitle}</p>
            </div>

        </div>
    );
}

export default CardMonyBag;
