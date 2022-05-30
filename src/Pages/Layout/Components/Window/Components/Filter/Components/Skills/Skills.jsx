

import "./Skills.css";
import { FilterDisclosure } from "../../../Sections/Sections";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";



const Skills = () => {
    

    return ( 
     <FilterDisclosure cname={"skills"} icon={faLightbulb} title={"Skills"}>
      <div className="disclosure-content skills">
     <FilterDisclosure cname={"frontend"}  title = {"Front-End"}></FilterDisclosure>
     <FilterDisclosure cname={"backend"} title = {"Back-End"}></FilterDisclosure>
     <FilterDisclosure cname={"ai"} title = {"Artificial Intelligence"}></FilterDisclosure>
     <FilterDisclosure cname={"cyber"} title = {"Cyber Security"}></FilterDisclosure>
      </div>
      </FilterDisclosure>
     );
}
 
export default Skills;
