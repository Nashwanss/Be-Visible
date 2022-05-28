
import { useState, useRef, useEffect } from 'react';


import { ProfDisclosure } from '../../../Sections/Sections'
import Card from './Components/Card'

import './Experience.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faPlus } from '@fortawesome/free-solid-svg-icons';



const Experience = () => {

    const [isDisabled, setIsDisabled] = useState(true);
    const textArea = useRef(null)

    const [experiences, setExperiences] = useState([{ id: "", position: "Position", company: "Company", duration: "2020 - 2020", bulletPoints: [{ value: "New Bullet Point" }], image: "" }])

    const [sectionExperience, setSectionExperience] = useState({ section: "experience", content: [] })
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
            setSectionExperience({ ...sectionExperience, content: experiences })
            setHasEdited(false)
        }
    }
    const addNewCard = () => {
        setExperiences([...experiences, { id: "", position: "Position", company: "Company", duration: "2020 - 2020", bulletPoints: [{ value: "New Bullet Point" }], image: "" }])
    }
    const deleteCard = (index) => {
        setExperiences(experiences.filter((experience, i) => i !== index))
    }

    return <ProfDisclosure cname={"experience"} title={"Experience"} icon={faBriefcase} editMode={editMode} >
        <div className={`disclosure-content experience ${!isDisabled && "edit-input"}`}>
            {isDisabled ? null : <div className="add-button-con">
                <button onClick={() => { addNewCard() }}><FontAwesomeIcon icon={faPlus} /> Add a New Experience</button>
            </div>}
            {experiences.map((experience, i) => {
                return <Card key={i} index={i} deleteCard={deleteCard} isDisabled={isDisabled} experience={experience} setExperiences={setExperiences} />
            })}
        </div>
    </ProfDisclosure>

}

export default Experience;