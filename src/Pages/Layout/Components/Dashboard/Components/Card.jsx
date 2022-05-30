import '../Dashboard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';

const Card = ({ user, openPopUp }) => {

    return (
        <>
            <div onClick={() => { openPopUp(user.name) }} className="dashboard-card">
                <div className="user-pic" style={{
                    backgroundImage: `url(${user.image})`,
                    backgroundSize: 'cover',
                }}>

                    <div className={user.otw ? 'btn dash' : 'btn dash btn-var'}><span> <FontAwesomeIcon icon={faCheckCircle} /> Open to work</span></div>
                </div>
                <div className="dashboard-card-info">
                    <h6>{user.name}</h6>
                    <h6>{user.position}</h6>
                </div>
            </div>

        </>
    );
}



export default Card;








