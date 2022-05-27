import { useRef, useState } from 'react'

import { ProfDisclosure } from '../../../Sections/Sections'
import { faLaptopCode, faXmark } from '@fortawesome/free-solid-svg-icons'
import faHTML from './assets/html5.svg'

import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({ icon, name, edit, cname }) => {
    return (<button className={`btn-skill ${cname}`} >{icon !== null && <img src={icon} className="skill-icon" />} <span> {name}</span> {edit}  </button>);
}

const AddNewSkill = ({ setSkills }) => {
    const [skillOptions] = useState([{name: "html", icon: faHTML}])
    const skillsSelect = useRef(null)

    const addSkill = () => {
        if (skillsSelect.current.value === "add-new") {
            return
        } else {
            setSkills(prevSkills => {
                return [...prevSkills, { name: skillsSelect.current.value, icon: skillOptions.find(skill => skill.name === skillsSelect.current.value).icon }]
            })
        }
    }

    return (<><label className='skills-label' htmlFor="skills"><select id="skills" ref={skillsSelect} name="skills" onChange={() => addSkill()}>
        <option value={'add-new'}> Add new</option>
        {skillOptions.map((skill, i) => {
            return <option key={i} value={skill.name}>{skill.name.toUpperCase()}</option>
        })}
    </select> </label>
    </>)

}

const Skills = () => {

    const [isDisabled, setIsDisabled] = useState(true)
    const [hasEdited, setHasEdited] = useState(false);
    const [skills, setSkills] = useState([])
    const editMode = () => {
        if (!hasEdited) {
            setIsDisabled(!isDisabled);
            setHasEdited(true)
        } else {
            setIsDisabled(!isDisabled);
            setHasEdited(false)
        }
    }
    const removeSkill = (index) => {
        setSkills(prevSkills => {
            return prevSkills.filter((skill, i) => i !== index)
        })
    }
    return (<ProfDisclosure cname="skills" title="Skills" icon={faLaptopCode} editMode={editMode}> <div className={`disclosure-content skills `}>
        <div className="skills-container">
            {!isDisabled && <AddNewSkill setSkills={setSkills} />} {skills.length === 0 && isDisabled && <p>You haven't added any skills yet.</p>}{skills.map((skill, i) => {
                return <Button key={i} icon={skill.icon} name={skill.name} edit={!isDisabled && <FontAwesomeIcon icon={faXmark} onClick={() => { removeSkill(i) }} />} cname={`skill-${i}`} />
            })}
        </div>
    </div> </ProfDisclosure>);
}

export default Skills;