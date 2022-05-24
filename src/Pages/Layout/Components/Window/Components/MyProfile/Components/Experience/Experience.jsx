
import { useState, useRef, useEffect } from 'react';


import { ProfDisclosure } from '../Sections'


import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';


const Experience = () => {

    const [isDisabled, setIsDisabled] = useState(true);
    const textArea = useRef(null)

    useEffect(() => {
        if (textArea.current != null) {
            textArea.current.focus()
        }
    }, [isDisabled])

    const editMode = () => {
        setIsDisabled(!isDisabled);
    }

    return <ProfDisclosure cname={"experience"} title={"Experience"} icon={faInfoCircle} editMode={editMode} >
        <div className="disclosure-content experience">
            <textarea ref={textArea} disabled={isDisabled} defaultValue={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod pariatur error similique odio tempora autem eligendi excepturi quas quisquam, sint neque cum asperiores obcaecati facilis necessitatibus illum magnam omnis aut?'}>
            </textarea>
        </div>
    </ProfDisclosure>

}

export default Experience;