
import { useState } from 'react';


import { ProfDisclosure } from '../../../Sections/Sections'
import Card from './Components/Card'

import { faBriefcase } from '@fortawesome/free-solid-svg-icons';



const Education = ({ section }) => {

    const [educations, setEducations] = useState([{ id: "", degree: "Degree", university: "University", duration: "2020 - 2020", bulletPoints: [{ value: "New Bullet Point" }], image: "" }])


    return <ProfDisclosure cname={"education"} title={"Education"} icon={faBriefcase} >
        <div className={`disclosure-content education`}>
            {educations.map((education, i) => {
                return <Card key={i} index={i} education={education} />
            })}
        </div>
    </ProfDisclosure>

}

export default Education;