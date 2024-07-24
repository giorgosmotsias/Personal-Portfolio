import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNode, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

const skills = [
    { icon: faHtml5, name: "HTML" },
    { icon: faCss3Alt, name: "CSS" },
    { icon: faJsSquare, name: "JavaScript" },
    { icon: faServer, name: "Express.js" },
    { icon: faReact, name: "React.js" },
    { icon: faNode, name: "Node.js" },
    { icon: faDatabase, name: "MongoDB" },
    { icon: faGithub, name: "GitHub" },
  ];
  
    const Skills = () => {
        return (
          <div className="content">
            <h1>Technologies I've Worked With</h1>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill" key={index}>
                  <FontAwesomeIcon icon={skill.icon} size="3x" />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        );
      };
      

export default Skills;