import "./PromoCard.css";

const PromoCard = (props) => {
  console.log(props);

  return (
    <>
      <div className="promo-card">
        <img
          src={props.photo}
          alt="test"
          className="promo-card-photo"
        />
        <div className="promo-card-info">
          <h6>{props.name}</h6>
        </div>
      </div>
    </>
  );
};

export default PromoCard;
