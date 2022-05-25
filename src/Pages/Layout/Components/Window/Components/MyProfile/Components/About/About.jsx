import { useState, useRef, useEffect } from 'react';


import { ProfDisclosure } from '../../../Sections/Sections'

import './About.css'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';


const About = () => {


    const [isDisabled, setIsDisabled] = useState(true);
    const textArea = useRef(null)
    const [about, setAbout] = useState({ section: "about", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod pariatur error similique odio tempora autem eligendi excepturi quas quisquam, sint neque cum asperiores obcaecati facilis necessitatibus illum magnam omnis aut?" })
    const [hasEdited, setHasEdited] = useState(false);

    useEffect(() => {
        if (textArea.current != null) {
            textArea.current.focus()
        }
    }, [isDisabled])

    const editMode = () => {
        if (!hasEdited) {
            setIsDisabled(!isDisabled);
            setHasEdited(true)
        } else {
            setIsDisabled(!isDisabled);
            console.log(about)
            setHasEdited(false)
        }
    }

    const updateValue = (e) => {
        setAbout({ ...about, text: e.target.value })
    }

    return <ProfDisclosure cname={"about"} title={"About"} icon={faInfoCircle} editMode={editMode} >
        <div className={`disclosure-content about ${!isDisabled && "edit-input"}`}>
            <textarea ref={textArea} disabled={isDisabled} value={about.text} onChange={(e) => updateValue(e)}>
            </textarea>
        </div>
    </ProfDisclosure>

}

export default About;