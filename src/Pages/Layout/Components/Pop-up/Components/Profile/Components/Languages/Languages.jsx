import { useState } from 'react'

import { ProfDisclosure } from '../../../Sections/Sections'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

import './Languages.css'

const Button = ({ name }) => {
    return (<button className={`btn-language`} > <span> {name}</span>   </button>);
}



const Languages = () => {

    const [languages, setLanguages] = useState([])


    return (<ProfDisclosure cname="languages" title="Languages" icon={faLanguage} > <div className={`disclosure-content languages `}>
        <div className="languages-container"> {languages.length === 0 && <p>No languages added yet.</p>}{languages.map((language, i) => {
            return <Button key={i} name={language.name} />
        })}
        </div>
    </div> </ProfDisclosure>);
}

export default Languages;