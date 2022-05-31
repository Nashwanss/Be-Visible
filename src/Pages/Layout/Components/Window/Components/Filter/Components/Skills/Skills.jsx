import { useEffect, useState } from "react";

import "./Skills.css";
import { FilterDisclosure } from "../../../Sections/Sections";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Button = ({ Skills, Skill, on, index, setSkills }) => {
  const handleClick = () => {
    const newSkills = Skills.map((item, i) => {
      if (i === index) {
        const newSkill = item;
        newSkill.on = !newSkill.on;
        return newSkill;
      } else {
        return item;
      }
    });
    setSkills(newSkills);
  };
  return (
    <button
      className={on ? "btn" : "btn btn-var"}
      onClick={() => handleClick()}
    >
      {Skill}
    </button>
  );
};

const Skills = () => {
  const [frontSkills, setFrontSkills] = useState([
    { name: "React.js", on: false },
    { name: "HTML", on: false },
    { name: "CSS", on: false },
  ]);

  useEffect(() => {}, [frontSkills]);

  const [backSkills, setBackSkills] = useState([
    { name: "Python", on: false },
    { name: "PHP", on: false },
    { name: "Ruby", on: false },
  ]);

  useEffect(() => {}, [backSkills]);

  const [aiSkills, setAiSkills] = useState([
    { name: "Python", on: false },
    { name: "Java", on: false },
  ]);

  useEffect(() => {}, [aiSkills]);

  const [cyberSkills, setCyberSkills] = useState([
    { name: "Javascript", on: false },
    { name: "Java", on: false },
  ]);

  useEffect(() => {}, [cyberSkills]);

  return (
    <FilterDisclosure cname={"skills"} icon={faLightbulb} title={"Skills"}>
      <div className="disclosure-content skills">
      <div className="filter-title"> Front-End</div>
        <div className="frontend-filter">
          {frontSkills.map((item, index) => {
            return (
              <Button
                key={index}
                Skill={item.name}
                on={item.on}
                index={index}
                setSkills={setFrontSkills}
                Skills={frontSkills}
              />
            );
          })}
        </div>
        <div className="filter-title"> Back-End</div>
        <div className="backend-filter">
          {backSkills.map((item, index) => {
            return (
              <Button
                key={index}
                Skill={item.name}
                on={item.on}
                index={index}
                setSkills={setBackSkills}
                Skills={backSkills}
              />
            );
          })}
          
        </div>
        <div className="filter-title"> Artificial Intelligence</div>
        <div className="ai-filter">
          {aiSkills.map((item, index) => {
            return (
              <Button
                key={index}
                Skill={item.name}
                on={item.on}
                index={index}
                setSkills={setAiSkills}
                Skills={aiSkills}
              />
            );
          })}
        </div>
        <div className="filter-title">   Cyber Security</div>
        <div className="cyber-filter">
          {cyberSkills.map((item, index) => {
            return (
              <Button
                key={index}
                Skill={item.name}
                on={item.on}
                index={index}
                setSkills={setCyberSkills}
                Skills={cyberSkills}
              />
            );
          })}
        </div>

      </div>
    </FilterDisclosure>
  );
};

export default Skills;
