import { useState } from 'react'

import { ProfDisclosure } from '../../../Sections/Sections'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'


const Button = ({ icon, name, cname }) => {
    return (<button className={`btn-skill ${cname}`} >{icon !== null && <img src={icon} alt="skill icon" className="skill-icon" />} <span> {name}</span> </button>);
}



const Skills = () => {

    const [skills, setSkills] = useState([])

    return (<ProfDisclosure cname="skills" title="Skills" icon={faLaptopCode}> <div className={`disclosure-content skills `}>
        <div className="skills-container">{skills.length === 0 && <p>No skills added yet.</p>}{skills.map((skill, i) => {
            return <Button key={i} icon={skill.icon} name={skill.name} cname={`skill-${i}`} />
        })}
        </div>
    </div> </ProfDisclosure>);
}

export default Skills;