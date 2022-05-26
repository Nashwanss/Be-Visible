import { useRef, useState } from 'react'

import { ProfDisclosure } from '../../../Sections/Sections'
import { faLaptopCode, faPlus } from '@fortawesome/free-solid-svg-icons'
import faHTML from './assets/html5.svg'

import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({ icon, name, edit, cname, clickFunc }) => {
    return (<button className={`btn-skill ${cname}`} >{icon !== null && icon} {name} {edit}  </button>);
}

const AddNewSkill = () => {
    const [skillOptions, setSkillOptions] = useState([{ name: "html", icon: faHTML }, { name: "css", icon: faHTML }])
    const skillsSelect = useRef(null)
    return (<><label className='skills-label' htmlFor="skills"><select id="skills" ref={skillsSelect} name="skills">
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
    const editMode = () => {
        if (!hasEdited) {
            setIsDisabled(!isDisabled);
            setHasEdited(true)
        } else {
            setIsDisabled(!isDisabled);
            setHasEdited(false)
        }
    }
    return (<ProfDisclosure cname="skills" title="Skills" icon={faLaptopCode} editMode={editMode}> <div className={`disclosure-content skills `}>
        <div className="skills-container">
            {!isDisabled && <AddNewSkill />}
        </div>
    </div> </ProfDisclosure>);
}

export default Skills;