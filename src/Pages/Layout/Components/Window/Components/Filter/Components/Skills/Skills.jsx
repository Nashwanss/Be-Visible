

import "./Skills.css";
import { ProfDisclosure } from "../../../Sections/Sections";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";



const Skills = () => {
    

    return ( 
     <ProfDisclosure cname={"skills"} icon={faLightbulb} title={"Skills"}>
      <div className="disclosure-content skills">
     <ProfDisclosure cname={"frontend"} title = {"Front-End"}></ProfDisclosure>
     <ProfDisclosure cname={"backend"} title = {"Back-End"}></ProfDisclosure>
     <ProfDisclosure cname={"ai"} title = {"Artificial Intelligence"}></ProfDisclosure>
     <ProfDisclosure cname={"cyber"} title = {"Cyber Security"}></ProfDisclosure>
      </div>
      </ProfDisclosure>
     );
}
 
export default Skills;
