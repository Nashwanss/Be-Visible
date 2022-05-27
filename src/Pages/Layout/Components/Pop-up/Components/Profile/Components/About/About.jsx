import { useState } from 'react';


import { ProfDisclosure } from '../../../Sections/Sections'

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';


const About = () => {

    const [about] = useState({ text: "" })

    return <ProfDisclosure cname={"about"} title={"About"} icon={faInfoCircle}  >
        <div className={`disclosure-content about`}>
            <textarea disabled value={about.text}>
            </textarea>
        </div>
    </ProfDisclosure>

}

export default About;