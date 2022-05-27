
import { useState, useRef, useEffect } from 'react';


import { ProfDisclosure } from '../../../Sections/Sections'
import Card from './Components/Card'

import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faPlus } from '@fortawesome/free-solid-svg-icons';



const Projects = () => {

    const [isDisabled, setIsDisabled] = useState(true);
    const textArea = useRef(null)

    const [projects, setProjects] = useState([{ id: "", name: "Project Name", description: "Project Description", link: "Link to your project", image: "" }])

    const [sectionProject, setSectionProject] = useState({ section: "project", content: [] })
    const [hasEdited, setHasEdited] = useState(false);

    useEffect(() => {
        if (textArea.current != null) {
            textArea.current.focus()
        }
    }, [isDisabled])

    useEffect(() => {
        if (sectionProject.content.length > 0) {
            console.log(sectionProject) // this is the sectionProject object
        }
    }, [sectionProject])


    const editMode = () => {
        if (!hasEdited) {
            setIsDisabled(!isDisabled);
            setHasEdited(true)
        } else {
            setIsDisabled(!isDisabled);
            setSectionProject({ ...sectionProject, content: projects })
            setHasEdited(false)
        }
    }
    const addNewCard = () => {
        setProjects([...projects, { id: "", name: "Project Name", description: "Project Description", link: "Link to your project", image: "" }])
    }
    const deleteCard = (index) => {
        setProjects(projects.filter((project, i) => i !== index))
    }

    return <ProfDisclosure cname={"projects"} title={"Projects"} icon={faBriefcase} editMode={editMode} >
        <div className={`disclosure-content project ${!isDisabled && "edit-input"}`}>
            {isDisabled ? null : <div className="add-button-con">
                <button onClick={() => { addNewCard() }}><FontAwesomeIcon icon={faPlus} /> Add a New Project</button>
            </div>}
            {projects.map((project, i) => {
                return <Card key={i} index={i} deleteCard={deleteCard} isDisabled={isDisabled} project={project} setProjects={setProjects} />
            })}
        </div>
    </ProfDisclosure>

}

export default Projects;