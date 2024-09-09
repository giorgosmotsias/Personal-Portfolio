import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNode, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

const skills = [
    { icon: faHtml5, name: "HTML" },
    { icon: faCss3Alt, name: "CSS" },
    { icon: faJsSquare, name: "JavaScript" },
    { icon: faServer, name: "Express.js" },
    { icon: faReact, name: "React" },
    { icon: faNode, name: "Node.js" },
    { icon: faDatabase , name : "SQL"},
    { icon: faDatabase, name: "MongoDB" },
    { icon: faServer, name: "RESTful APIs" },
    { icon: faGithub, name: "GitHub" },
  ];
  
    const Skills = () => {
        return (
          <div className="content" id="skills">
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