import React from "react";

const Experience = () => {
    const experienceList = [
        {
            company: <a href='http://https://cogninn.com/' target='_blank' rel="noreferrer">@Cogninn</a>,
            position: "Full-stack Developer",
            period: "Dec 2023 - Present",
            description: "Building websites and AI webapps. Responsible for Frontend, Backend, UI Design, and Databases.",
            tasks: [
                "Developed and designed the AIWorkshopGR website (http://ai-workshop.gr/)",
                "Frontend Development",
                "Backend Development",
                "UI/UX Design",
                "Stack: Javascript, Node.js, Express.js, MongoDB"
            ]
        },
        {
            company: "Fishing4fun",
            position: "Internship",
            period: "Oct 2020 - Apr 2021",
            description: "Database management, photoshop, and customer service.",
            tasks: [
                "Database management (SQL)",
                "Photoshop",
                "Customer service"
            ]
        },
        {
            company: "Hellenic Army",
            position: "Military Service",
            period: "Nov 2021 - Nov 2022",
            description: "Service in the Hellenic Armed Forces.",
            tasks: []
        }
    ];

    return (
        <div>
            <ul className="experience-list" id="experience">
            <h1>Experience</h1>
                {experienceList.map((job, index) => (
                    <li key={index} className="experience-item">
                        <h2>{job.company}</h2>
                        <h3>{job.position}</h3>
                        <h4>{job.period}</h4>
                        <h5>{job.description}</h5>
                        {job.tasks.length > 0 && (
                            <ul>
                                {job.tasks.map((task, idx) => (
                                    <li key={idx}>{task}</li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;