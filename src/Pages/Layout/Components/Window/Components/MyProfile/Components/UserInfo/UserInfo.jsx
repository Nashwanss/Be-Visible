import { useState, useRef, useEffect } from 'react';

import { Section } from '../../../Sections/Sections'
import Toggle from 'react-styled-toggle';
import UploadButton from '../../../Sections/UploadImages/UploadImages'



import './UserInfo.css'



const UserInfo = () => {



    const [isDisabled, setIsDisabled] = useState(true);
    const [OTWBtnClass, setOTWBtnClass] = useState("");
    const inputName = useRef(null);
    const [userInfo, setUserInfo] = useState({ section: "userInfo", name: "Name", field: "Position", location: "Location", image: "", otw: false })
    const [hasEdited, setHasEdited] = useState(false);

    useEffect(() => {
        if (!userInfo.otw) {
            setOTWBtnClass("btn btn-var");
        } else {
            setOTWBtnClass("btn");
        }
    }, [])


    const editMode = () => {
        if (!hasEdited) {
            setIsDisabled(!isDisabled);
            setHasEdited(true)
        } else {
            setIsDisabled(!isDisabled);
            console.log(userInfo)
            setHasEdited(false)
        }
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
            setUserInfo({ ...userInfo, otw: false })
            setOTWBtnClass("btn btn-var");
        }
        if (!isDisabled && OTWBtnClass === "btn btn-var") {
            setUserInfo({ ...userInfo, otw: true })
            setOTWBtnClass("btn");
        }

    }
    const updateValue = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }


    return <Section cname={`user-info ${!isDisabled && "edit-input"}`}>
        <div className="user-info-left">
            <div className="user-info-pic" style={{ backgroundImage: `url(${userInfo.image})` }}>
                {!isDisabled && <UploadButton setInfo={setUserInfo} />}
            </div>
        </div>
        <div className="user-info-right">
            <div className="user-info-right-top">
                <div className="user-info-right-top-left">
                </div>
                <div className="user-info-right-top-middle">
                    <input type="text" ref={inputName} className='name' name='name' disabled={isDisabled} value={userInfo.name} onChange={(e) => { updateValue(e) }} />
                    <input type="text" className='field' name='field' disabled={isDisabled} value={userInfo.field} onChange={(e) => { updateValue(e) }} />
                    <input type="text" className='location' name='location' disabled={isDisabled} value={userInfo.location} onChange={(e) => { updateValue(e) }} />
                </div>
                <div className="user-info-right-top-right">
                    <Toggle width={"40"} height={"24"} sliderWidth={"16"} sliderHeight={"16"} translate={"16"} backgroundColorChecked={"#3c8891"} onChange={() => editMode()} />
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