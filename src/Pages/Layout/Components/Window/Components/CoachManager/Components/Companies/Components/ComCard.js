import "../Companies.css";

const ComCard = (props) => {
  return (
    <>
      <div className="company-card">
        <img
          src={props.logo}
          alt="company-logo is not available"
          className="company-logo"
        />
        <div className="company-info">
          <div className="company-name">
            <h6>{props.name}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComCard;
