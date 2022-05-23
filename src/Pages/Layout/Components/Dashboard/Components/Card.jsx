import '../../../../../Styles/Dashboard.css';

const Card = (props) => {

    // console.log(props)

    return (
        <>
            <div className="dashboard-card">
                
            <img src={props.photo} alt="profile-img" className="dashboard-card-photo"/>
                <div className="dashboard-card-info">
                    <h6>{props.name}</h6>
                    <h6>{props.position}</h6>
                </div>
            </div>  

        </>
    );
}



export default Card;







