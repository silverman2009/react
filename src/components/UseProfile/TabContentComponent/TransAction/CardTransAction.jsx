import "./transaction.css"
const CardTransAction = ({icon,title,subTitle}) => {
  return (
    <div className="container__card_userProfile">
    <div className="right__card_userProfile">
      <p className="m-0 title__card__userProfile text-center">{ title }</p>
      <p className="m-0 subTitle__card_userProfile">{ subTitle }</p>
    </div>
    <div className="left__card_userProfile">
      <span><i  className={`fa-2x ${icon}`}></i></span>
    </div>
  </div>
  );
}

export default CardTransAction;
