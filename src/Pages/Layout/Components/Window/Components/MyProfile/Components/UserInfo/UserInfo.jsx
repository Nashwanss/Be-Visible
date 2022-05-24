import { useState, useRef, useEffect } from 'react';

import { Section } from '../../../Sections/Sections'


import './UserInfo.css'
import { Switch } from '@headlessui/react'



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


    return <Section cname={`user-info ${!isDisabled && "edit-input"}`}>
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
                    <Switch
                        checked={!isDisabled}
                        onChange={editMode}
                        className={`${!isDisabled ? 'bg-blue-600' : 'bg-gray-200'
                            } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                        <span className="sr-only">Enable notifications</span>
                        <span
                            className={`${!isDisabled ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white`}
                        />
                    </Switch>
                </div>
            </div>
            <div className="user-info-right-bottom">
                <button className={OTWBtnClass} id="otw" onClick={() => handleClick()} >Open to work</button>
                <button className='btn'> {"< Promotion />"} </button>
            </div>
        </div>
    </Section>;
}

export default UserInfo;