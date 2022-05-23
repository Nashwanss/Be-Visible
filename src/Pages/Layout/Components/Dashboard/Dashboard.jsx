import '../../../../Styles/Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';





import Card from './Components/Card';

import LearnerData from './LearnerData';




const Dashboard = () => {

    const learners = LearnerData.map((learner ) => {
        return (
            <Card 
            key={learner.id}
            name={learner.name}
            photo={learner.photo}
            position={learner.position}
            />
        )
    })
        
    return (
        <>
            <div className="dashboard-container">
                <div className="search-bar-container">
                    <div className="search-top"> </div>
                    <input type="text" className="search-bar" placeholder="&#xF002; Search" style={{fontFamily: 'FontAwesome, Arial', fontStyle: 'normal', fontSize: '16px' , letterSpacing: '2px'}}/> 
                    {/* <input type="submit" value="Search" class="search-btn" /> */}
                    
                <div className="search-bottom"></div>
            </div>
                <section className="cards-container">
                    {learners}
                </section>
            </div>
        </>
    );
}

export default Dashboard;