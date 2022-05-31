
import Toggle from 'react-styled-toggle';


import './ContactCard.css'
import logo from '../../../../../../Assets/LM-Logo.png'
import { useEffect, useState, useContext } from 'react'
import { UserSession } from '../../../../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsappSquare, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileInvoice, faXmark } from '@fortawesome/free-solid-svg-icons'

const Section = ({ name, isDisabled, link, icon, value, setValue }) => {


    const [fontSize, setFontSize] = useState("1em")

    const [inputValue, setInputValue] = useState("")

    const toCapitalLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    useEffect(() => {
        if (name === "") {
            return
        }
        if (name === "whatsapp") {
            setInputValue("+" + value)
        } else if (name === "email") {
            setInputValue(value)
        }
    }, [value])

    useEffect((e) => {
        if (value === 'whatsapp') {
            setFontSize("1em")
        }
        if (name === "email" && value.length < 32) {
            setFontSize("0.7em")
        } else if (name === "email" && value.length > 32) {
            setFontSize("0.5em")
        }
    }, [fontSize])
    const handleChange = (e) => {
        setValue(prevValue => {
            return { ...prevValue, [name]: e.target.value }
        })
    }
    return (<div className="section-contact">
        <label htmlFor={name}><FontAwesomeIcon icon={icon} />{toCapitalLetter(name)}</label>
        {isDisabled ? <a target={"_blank"} rel="nonreferrer" href={link}><input type="text" disabled id={name} value={inputValue} style={{ fontSize: fontSize }} /></a> : <input type="text" disabled={isDisabled} id={name} value={value} onChange={(e) => { handleChange(e) }} style={{ fontSize: fontSize }} />}

    </div>)
}

const SocialIcon = ({ name, icon, link, isDisabled, value, setValue }) => {
    const handleChange = (e) => {
        setValue(prevValue => {
            return { ...prevValue, [name]: e.target.value }
        })
    }
    return (<div className='social-icon' ><a id={name} href={link} target={"_blank"} rel="nonreferrer" ><FontAwesomeIcon icon={icon} /> </a> {!isDisabled && <input type="text" value={value} onChange={(e) => handleChange(e)} />}</div>)
}

const SocialMedia = ({ contactCardInfo, setContactCardInfo, isDisabled }) => {

    return (<div className="social-media">
        <SocialIcon name="github" icon={faGithub} link={"https://github.com/" + contactCardInfo.github} isDisabled={isDisabled} value={contactCardInfo.github} setValue={setContactCardInfo} />
        <SocialIcon name="linkedin" icon={faLinkedin} link={"https://linkedin.com/in/" + contactCardInfo.linkedin} isDisabled={isDisabled} value={contactCardInfo.linkedin} setValue={setContactCardInfo} />
        <SocialIcon name="cv" icon={faFileInvoice} link={contactCardInfo.cv} isDisabled={isDisabled} value={contactCardInfo.cv} setValue={setContactCardInfo} />
    </div>)
}


const ContactCard = ({ isContactCardDisplayed, setisContactCardDisplayed }) => {

    const userDataContext = useContext(UserSession);
    const { userData } = userDataContext;
    const [contactCardInfo, setContactCardInfo] = useState({ whatsapp: "32000000000", email: userData.email, github: "username", linkedin: "username", cv: "linktocv" })
    const [isDisabled, setIsDisabled] = useState(true)
    const [hasEdited, setHasEdited] = useState(false);



    const editMode = () => {
        if (!hasEdited) {
            setIsDisabled(!isDisabled);
            setHasEdited(true)
        } else {
            setIsDisabled(!isDisabled);
            // here we send to the backend the new value
            setHasEdited(false)
        }
    }
    return (<div className="contact-card-con" style={{ visibility: isContactCardDisplayed ? "visible" : "hidden", opacity: isContactCardDisplayed ? "100" : "0" }}>
        <div className={`contact-card ${!isDisabled && "contact-input"}`}>
            <div className="contact-card-left">
                <div className="contact-card-left-top">
                    <div className="be-visible-logo" style={{ backgroundImage: `url(${logo})` }}></div>
                </div>
                <div className="contanct-card-left-bottom">
                    <div className="profile-pic"></div>
                    <Toggle width={"40"} height={"24"} sliderWidth={"16"} sliderHeight={"16"} translate={"16"} backgroundColorChecked={"#3c8891"} onChange={editMode} />
                </div>
            </div>
            <div className="contact-card-middle">
                <Section name="email" isDisabled={isDisabled} link={`mailto:${contactCardInfo.email}`} icon={faEnvelope} value={contactCardInfo.email} setValue={setContactCardInfo} />
                <Section name="whatsapp" isDisabled={isDisabled} link={`https://wa.me/${contactCardInfo.whatsapp}`} icon={faWhatsappSquare} value={contactCardInfo.whatsapp} setValue={setContactCardInfo} />
                <SocialMedia contactCardInfo={contactCardInfo} setContactCardInfo={setContactCardInfo} isDisabled={isDisabled} />
            </div>
            <div className="contact-card-right">
                <FontAwesomeIcon icon={faXmark} onClick={() => setisContactCardDisplayed(false)} />
            </div>
        </div>
    </div>);
}

export default ContactCard;