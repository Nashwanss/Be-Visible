import './Dashboard.css';

import { useState } from 'react';


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

    const [searchWidth, setSearchWidth] = useState('60%');

    const changeWidth = () => {
        if (searchWidth === '60%') {
            setSearchWidth('80%');
        } else {
            setSearchWidth('60%');
        }
    }

    return (
        <>
            <div className="search-bar-container">
                <input type="text" className="search-bar" placeholder="&#xF002; Search" style={{ fontFamily: 'FontAwesome, Oxygen', fontStyle: 'normal', fontSize: '16px', letterSpacing: '2px', width: searchWidth }} onFocus={changeWidth} onBlur={changeWidth} />
            </div>
            <section className="cards-container">
                {learners}
            </section>
        </>
    );
}

export default Dashboard;