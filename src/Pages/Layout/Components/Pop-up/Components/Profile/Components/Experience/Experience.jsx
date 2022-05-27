
import { useState } from 'react';


import { ProfDisclosure } from '../../../Sections/Sections'
import Card from './Components/Card'

import { faBriefcase } from '@fortawesome/free-solid-svg-icons';



const Experience = ({ section }) => {

    const [experiences, setExperiences] = useState([{ id: "", position: "Position", company: "Company", duration: "2020 - 2020", bulletPoints: [{ value: "New Bullet Point" }], image: "" }])


    return <ProfDisclosure cname={"experience"} title={"Experience"} icon={faBriefcase} >
        <div className={`disclosure-content experience`}>
            {experiences.map((experience, i) => {
                return <Card key={i} index={i} experience={experience} />
            })}
        </div>
    </ProfDisclosure>

}

export default Experience;