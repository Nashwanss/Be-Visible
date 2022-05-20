import '../../../../Styles/Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import Card from './Components/Card';

import learner from './learner';




const Dashboard = () => {

    return (
        <>
            <div className="dashboard-container">
                <div className="search-bar-container">
                    <div className="search-top">
                        <FontAwesomeIcon icon={faCheckSquare} />
                    </div>
                    <input type="text" className="search-bar" placeholder={`Search 
                    ${<FontAwesomeIcon icon={faCheckSquare} />}`} />
                    <div className="search-bottom"></div>
                </div>
                <div className="cards-container">
                    <Card  />
                </div>
            </div>
        </>
    );
}

export default Dashboard;