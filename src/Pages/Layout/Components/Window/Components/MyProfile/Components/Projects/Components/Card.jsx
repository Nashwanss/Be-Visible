import { useState, useRef, useEffect } from "react"



import UploadButton from '../../../../Sections/UploadImages/UploadImages'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'




const Card = ({ index, deleteCard, isDisabled, project, setProjects }) => {


    const nameInput = useRef(null)


    useEffect(() => {
        if (nameInput.current != null) {
            nameInput.current.focus()
        }
    }, [isDisabled])


    const displayTools = () => {
        if (isDisabled) {
            return null
        }
        if (!isDisabled) {
            return <FontAwesomeIcon icon={faMinus} onClick={() => { deleteCard(index) }} />
        }
    }

    const updateValue = (e) => {
        setProjects(prevProjects => {
            const newProjects = [...prevProjects]
            newProjects[index] = { ...project, [e.target.name]: e.target.value }
            return newProjects
        })
    }

    return (<div className="card">
        <div className="card-wrap">
            <div className="card-left">
                <div className="card-left-top">
                    {isDisabled ? <a href={project.link} target='_blank' rel="project site">
                        <div className="job-image" style={{ backgroundImage: `url(${project.image})` }}>
                        </div>
                    </a> : <div className="job-image" style={{ backgroundImage: `url(${project.image})` }}>
                        {!isDisabled ? <UploadButton setInfo={setProjects} who="experience" index={index} key={index} /> : null}
                    </div>}
                </div>

                <div className="card-left-bottom">

                </div>
            </div>
            <div className="card-middle">
                <div className="card-middle-top"><input type="text" ref={nameInput} name='name' value={project.name} className={"name"} disabled={isDisabled} onChange={(e) => updateValue(e)} />
                </div>
                <div className="card-middle-bottom">
                    <div className="description">
                        <textarea name="description" value={project.description} disabled={isDisabled} onChange={(e) => updateValue(e)} />
                    </div>
                </div>
            </div>
            <div className="card-right">
                {displayTools()}
            </div>
        </div>
        <div className="card-link-input">
            {!isDisabled && <input type="text" name="link" value={project.link} disabled={isDisabled} onChange={(e) => updateValue(e)} />}
        </div>
    </div>)
}

export default Card;