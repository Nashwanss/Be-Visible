import './Badges.css';

import { useState } from 'react';

import { ProfDisclosure } from "../../../Sections/Sections";

import { faRibbon, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import UploadButton from '../../../Sections/UploadImages/UploadImages'

const Badge = ({ name, image, id, isDisabled }) => {
    return <div className='badge-con'> <div className="badge-pic" id={id} data-badge={name} style={{ backgroundImage: `url(${image})` }}>{!isDisabled && <FontAwesomeIcon icon={faXmark} />}</div></div>;
}


const Badges = () => {

    const [isDisabled, setIsDisabled] = useState(true);
    const [hasEdited, setHasEdited] = useState(false);

    const [badges, setBadges] = useState([{ id: "1", name: "HTML", image: "" }, { id: "2", name: "CSS", image: "" }]);

    const editMode = () => {
        if (!hasEdited) {
            setIsDisabled(!isDisabled);
            setHasEdited(true)
        } else {
            setIsDisabled(!isDisabled);
            // here we need to update the section
            setHasEdited(false)
        }
    }

    return (<ProfDisclosure cname={"badges"} title={"Badges"} icon={faRibbon} editMode={editMode}>
        <div className="disclosure-content badges">
            <div className="companies-display">
                <div className="inner-company-display">
                    {badges.map((badge, i) => {
                        return <Badge key={i} name={badge.name} image={badge.image} id={badge.id} isDisabled={isDisabled} />
                    })}
                </div>
            </div>
            {!isDisabled && <div className="add-badge-con">

                <form action="">
                    <div className="upload-badge-image">
                        <UploadButton  who='userInfo' />
                    </div>
                    <input type="text" name='badge-name' placeholder='Badge Name' />
                    <input type="text" name='badge-desc' placeholder='Description' />
                    <button type='submit' className='btn'>Create</button>
                </form>

            </div>}
        </div>
    </ProfDisclosure>);
}

export default Badges;