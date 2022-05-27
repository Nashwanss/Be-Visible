
import { useState } from 'react';


import { ProfDisclosure } from '../../../Sections/Sections'
import Card from './Components/Card'

import { faFolder } from '@fortawesome/free-solid-svg-icons';



const Projects = () => {


    const [projects, setProjects] = useState([{ id: "", name: "Project Name", description: "Project Description", link: "Link to your project", image: "" }])



    return <ProfDisclosure cname={"projects"} title={"Projects"} icon={faFolder}  >
        <div className={`disclosure-content project`}>
            {projects.map((project, i) => {
                return <Card key={i} index={i} project={project} />
            })}
        </div>
    </ProfDisclosure>

}

export default Projects;