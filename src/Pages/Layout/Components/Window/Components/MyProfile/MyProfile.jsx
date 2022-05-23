import { useState, useRef, useEffect } from 'react';
import { Disclosure } from '@headlessui/react'

import './MyProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faInfo, faAngleDown } from '@fortawesome/free-solid-svg-icons';


const Section = (props) => {
    return (
        <div className={"section " + props.cname}>
            {props.children}
        </div>
    );
}

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

const ProfDisclosure = (props) => {
    return <Section cname={"disclosure " + props.cname}>
        <Disclosure>
            <Disclosure.Button>
                <div className="disclosure-title">
                    <FontAwesomeIcon icon={props.icon} />
                    <h2>
                        {props.title}
                    </h2>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>

            </Disclosure.Button>
            <Disclosure.Panel>
                {props.children}
            </Disclosure.Panel>
        </Disclosure>
    </Section>
}


const About = () => {
    return <ProfDisclosure cname={"about"} title={"About"} icon={faInfo} >
        <div className="disclosure-content about">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores officia officiis voluptatum! Delectus, deserunt asperiores laudantium autem voluptatum ad in recusandae saepe exercitationem. Magni earum inventore animi enim a?</p>
        </div>
    </ProfDisclosure>
}


const MyProfile = () => {
    return <>
        <UserInfo />
        <About />
    </>;
}

export default MyProfile;


