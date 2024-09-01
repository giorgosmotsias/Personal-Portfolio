import React from "react";

const Projects = () => {
    const projectList = [
        {
            name: "React Portfolio",
            description: "A personal portfolio website built with React to showcase who I am , my projects, my skills, and my experience.",
            technologies: ["React", "JavaScript", "HTML", "CSS"],
            link: "https://github.com/giorgosmotsias/Personal-Portfolio"
        },
        {
            name: "Calculator",
            description: "A simple calculator application built with HTML, CSS, and JavaScript that supports basic mathematical operations.",
            technologies: ["JavaScript", "HTML", "CSS"],
            link: "https://github.com/giorgosmotsias/calcappTest"
        },
        {
            name: "TimeTabling",
            description: "An application built with Python  with the assistance of Google’s OR-Tools library to provide solutions fortimetabling in educational institutions.",
            technologies: ["Python", "Constraint Programming", "Algorithm Design"],
            link: "https://github.com/giorgosmotsias/TimeTabling"
        },
    ];

    return (
        <div className="content" id="projects">
            <h1>My Projects</h1>
            <div className="project-grid">
                {projectList.map((project, index) => (
                    <div key={index} className="project-card">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <div>
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
