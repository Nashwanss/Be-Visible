import { useRef, useState } from 'react'

import { ProfDisclosure } from '../../../Sections/Sections'
import { faLanguage, faXmark } from '@fortawesome/free-solid-svg-icons'

import './Languages.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({ name, edit, cname }) => {
    return (<button className={`btn-language ${cname}`} > <span> {name}</span> {edit}  </button>);
}

const AddNewlanguage = ({ setLanguages }) => {
    const [languageOptions] = useState([{ name: "spanish" }])
    const languagesSelect = useRef(null)

    const addlanguage = () => {
        if (languagesSelect.current.value === "add-new") {
            return
        } else {
            setLanguages(prevLanguages => {
                return [...prevLanguages, { name: languagesSelect.current.value, icon: languageOptions.find(language => language.name === languagesSelect.current.value).icon }]
            })
        }
    }

    return (<><label className='languages-label' htmlFor="languages"><select id="languages" ref={languagesSelect} name="languages" onChange={() => addlanguage()}>
        <option value={'add-new'}> Add new</option>
        {languageOptions.map((language, i) => {
            return <option key={i} value={language.name}>{language.name.toUpperCase()}</option>
        })}
    </select> </label>
    </>)

}

const Languages = () => {

    const [isDisabled, setIsDisabled] = useState(true)
    const [hasEdited, setHasEdited] = useState(false);
    const [languages, setLanguages] = useState([])
    const editMode = () => {
        if (!hasEdited) {
            setIsDisabled(!isDisabled);
            setHasEdited(true)
        } else {
            setIsDisabled(!isDisabled);
            setHasEdited(false)
        }
    }
    const removeLanguage = (index) => {
        setLanguages(prevLanguages => {
            return prevLanguages.filter((language, i) => i !== index)
        })
    }
    return (<ProfDisclosure cname="languages" title="Languages" icon={faLanguage} editMode={editMode}> <div className={`disclosure-content languages `}>
        <div className="languages-container">
            {!isDisabled && <AddNewlanguage setLanguages={setLanguages} />} {languages.length === 0 && isDisabled && <p>You haven't added any languages yet.</p>}{languages.map((language, i) => {
                return <Button key={i} name={language.name} edit={!isDisabled && <FontAwesomeIcon icon={faXmark} onClick={() => { removeLanguage(i) }} />} cname={`skill-${i}`} />
            })}
        </div>
    </div> </ProfDisclosure>);
}

export default Languages;