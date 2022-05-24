import { useState, useRef, useEffect } from 'react';

import { Section } from '../Sections'


import './UserInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const UserInfo = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [OTWBtnClass, setOTWBtnClass] = useState("btn");
    const inputName = useRef(null);

    const editMode = () => {
        setIsDisabled(!isDisabled);
    }

    useEffect(() => {
        // current property is refered to input element
        inputName.current.focus();
    }, [isDisabled])

    const handleClick = () => {
        if (isDisabled) {
            return
        }
        if (!isDisabled && OTWBtnClass === "btn") {
            setOTWBtnClass("btn btn-var");
        }
        if (!isDisabled && OTWBtnClass === "btn btn-var") {
            setOTWBtnClass("btn");
        }

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
                    <input type="text" ref={inputName} className='name' disabled={isDisabled} value={"Name"} />
                    <input type="text" className='field' disabled={isDisabled} value={"Field"} />
                    <input type="text" className='location' disabled={isDisabled} value={"Location"} />
                </div>
                <div className="user-info-right-top-right">
                    <FontAwesomeIcon className='edit' icon={faPenToSquare} onClick={() => editMode()} />
                </div>
            </div>
            <div className="user-info-right-bottom">
                <button className={OTWBtnClass} onClick={() => handleClick()} >Open to work</button>
                <button className='btn'> {"< Promotion />"} </button>
            </div>
        </div>
    </Section>;
}

export default UserInfo;