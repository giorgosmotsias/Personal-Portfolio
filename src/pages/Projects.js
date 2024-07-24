import React from "react";

const Projects = () => {
    const projectList = [
        {
            name: "React Portfolio",
            description: "My personal portfolio website.",
            link: "https://github.com/giorgosmotsias/Personal-Portfolio"
        },
        {
            name: "Calculator",
            description: "A simple calculator application.",
            link: "https://github.com/giorgosmotsias/calcappTest"
        },
        {
            name: "TimeTabling",
            description: "Application of Constraint Programming for the Solution of the Timetabling Problem.",
            link: "https://github.com/giorgosmotsias/TimeTabling"
        },
    ];

    return( 
        <div className="content" id="projects">
            <h1>My Projects</h1>
            <div className="project-grid">
                {projectList.map((project, index) => (
                    <div key={index} className="project-card">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
