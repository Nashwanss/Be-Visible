import '../../../../../Styles/Dashboard.css';

const Card = (props) => {

    // console.log(props)

    let badge;

    if (props.status === 'active') {
        badge = "Open to work" }
    else {
        badge = "Not available" }

    const ProfileAccessHandler = () => {
        console.log('test')
    
        
    }

    return (
        <>
            <div onClick={ProfileAccessHandler} className="dashboard-card">
                <div className="user-pic" style={{
                    backgroundImage : `url(${props.photo})`,
                    backgroundSize : 'cover',
                }}>
                    
            {badge && <div className="badge-active">{badge}</div>}
                </div>
                <div className="dashboard-card-info">
                    <h6>{props.name}</h6>
                    <h6>{props.position}</h6>
                </div>
            </div>  

        </>
    );
}



export default Card;








