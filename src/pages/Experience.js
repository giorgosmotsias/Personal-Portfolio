import React from "react";

const Experience = () => {
    const experienceList = [
        {
            company: <a href='https://cogninn.com/' target='_blank' rel="noreferrer">@Cogninn</a>,
            position: "Full-stack Developer",
            period: "Dec 2023 - Present",
            description: "Developing dynamic websites and AI-powered web applications, with end-to-end responsibility for frontend (UI/UX), backend, database architecture, and the design and integration of RESTful APIs.",
            tasks: [
                (
                    <span>
                        Contributed to the development of <a href='https://autodl.ai-workshop.gr/' target='_blank' rel='noreferrer'>AutoDL</a>, 
                        an AI web application, where I was responsible for the frontend (UI, UX), backend, databases, and the design and implementation of RESTful APIs.
                    </span>
                ),
                (
                    <span>
                        Designed and developed various websites, <a href='https://ai-workshop.gr/aiworkshop24/' target='_blank' rel='noreferrer'>AIWorkshopGR</a> and <a href='https://6g-workshop.com/' target='_blank' rel='noreferrer'>6g-workshop</a>, 
                        ensuring seamless functionality and a user-friendly design.
                    </span>
                ),
                "Currently leading the development of a decentralized finance (DeFi) web application, utilizing an aggregate method for efficient data handling and integration. Responsible for both frontend and backend development, ensuring scalability and security in a blockchain-based environment.",
                
                "Stack: HTML , CSS ,Javascript, Node.js, Express.js, SQL, MongoDB, RESTful APIs"
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