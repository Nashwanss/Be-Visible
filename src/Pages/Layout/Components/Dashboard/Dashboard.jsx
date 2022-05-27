import './Dashboard.css';



import Card from './Components/Card';

import LearnerData from './LearnerData';




const Dashboard = ({ openPopUp }) => {

    const learners = LearnerData.map((learner) => {
        return (
            <Card
                key={learner.id}
                user={learner}
                openPopUp={openPopUp}
            />
        )
    })




    return (
        <>
            <div className="search-bar-container">
                <input type="text" className="search-bar" placeholder="&#xF002; Search" style={{ fontFamily: 'FontAwesome, Oxygen', fontStyle: 'normal', fontSize: '16px', letterSpacing: '2px' }} />
            </div>
            <section className="cards-container">
                {learners}
            </section>
        </>
    );
}

export default Dashboard;