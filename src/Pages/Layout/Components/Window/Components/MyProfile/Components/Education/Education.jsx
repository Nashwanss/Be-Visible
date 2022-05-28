
import { useState, useRef, useEffect } from 'react';


import { ProfDisclosure } from '../../../Sections/Sections'
import Card from './Components/Card'

import './Education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faPlus } from '@fortawesome/free-solid-svg-icons';



const Education = () => {

    const [isDisabled, setIsDisabled] = useState(true);
    const textArea = useRef(null)

    const [educations, setEducations] = useState([{ id: "", degree: "Degree", university: "University", duration: "2020 - 2020", bulletPoints: [{ value: "New Bullet Point" }], image: "" }])

    const [sectionEducation, setSectionEducation] = useState({ section: "education", content: [] })
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
            setSectionEducation({ ...sectionEducation, content: educations })
            setHasEdited(false)
        }
    }
    const addNewCard = () => {
        setEducations([...educations, { id: "", degree: "Degree", university: "University", duration: "2020 - 2020", bulletPoints: [{ value: "New Bullet Point" }], image: "" }])
    }
    const deleteCard = (index) => {
        setEducations(educations.filter((education, i) => i !== index))
    }

    return <ProfDisclosure cname={"education"} title={"Education"} icon={faGraduationCap} editMode={editMode} >
        <div className={`disclosure-content education ${!isDisabled && "edit-input"}`}>
            {isDisabled ? null : <div className="add-button-con">
                <button onClick={() => { addNewCard() }}><FontAwesomeIcon icon={faPlus} /> Add a New Education</button>
            </div>}
            {educations.map((education, i) => {
                return <Card key={i} index={i} deleteCard={deleteCard} isDisabled={isDisabled} education={education} setEducations={setEducations} />
            })}
        </div>
    </ProfDisclosure>

}

export default Education;