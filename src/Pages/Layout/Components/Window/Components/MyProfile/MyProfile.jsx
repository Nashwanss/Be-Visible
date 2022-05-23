import { useState, useRef } from 'react';


import './MyProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const Section = (props) => {
    return (
        <div className={"section " + props.cname}>
            {props.children}
        </div>
    );
}

const UserInfo = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const inputEl = useRef(null);
    const editMode = () => {
        setIsDisabled(!isDisabled);
    }


    return <Section cname="user-info">
        <div className="user-info-left">
            <div className="user-info-pic"></div>
        </div>
        <div className="user-info-right">
            <div className="user-info-right-top">
                <div className="user-info-right-top-left">

                </div>
                <div className="user-info-right-top-middle">
                    <input type="text" className='name' disabled={isDisabled} value={"Name"} />
                    <input type="text" className='field' disabled={isDisabled} value={"Field"} />
                    <input type="text" className='location' disabled={isDisabled} value={"Location"} />
                </div>
                <div className="user-info-right-top-right">
                    <FontAwesomeIcon className='edit' icon={faPenToSquare} onClick={() => editMode()} />
                </div>
            </div>
            <div className="user-info-right-bottom">
                <button className='btn'>Open to work</button>
                <button className='btn btn-var'> {"< Promotion />"} </button>
            </div>
        </div>
    </Section>;
}



const MyProfile = () => {
    return <>
        <UserInfo />
    </>;
}

export default MyProfile;
