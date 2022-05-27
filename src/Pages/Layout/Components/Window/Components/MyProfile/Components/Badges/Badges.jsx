import { useState } from 'react';

import { ProfDisclosure } from '../../../Sections/Sections'

import './Badges.css';
import { faRibbon } from '@fortawesome/free-solid-svg-icons';

const Badge = ({ desc }) => {
    return <img src="https://via.placeholder.com/150" className='badge' alt="badge" title={desc} />;
}

const Badges = () => {
    const [badges, setBadges] = useState([]);
    return (<ProfDisclosure cname='badges' title="Badges" icon={faRibbon} toggle={false}>
        <div className={`disclosure-content badges `}>
            <div className="badges-container">
                {badges.length === 0 && <p>You don't have any badges yet.</p>}
                {badges.map((badge, i) => {
                    return <Badge key={i} desc={badge.desc} />
                })}
            </div>
        </div>
    </ProfDisclosure>);
}

export default Badges;