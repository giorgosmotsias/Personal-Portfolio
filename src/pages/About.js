//react component for about page
import React  from 'react';
import profilePic from "../images/IMG_2763.png"; 
import './About.css';
import SocialLinks from '../components/SocialLinks';

const About = () => {
    return (
        <div className="about-container" id="about">
          <div className="profile-pic" style={{ backgroundImage: `url(${profilePic})` }}></div>
            <div className="about-content">
                {/* <h1>About Me</h1> */}
                <p>
                    Hi, I'm Giorgos Motsias, a 27-year-old software engineer with a passion for web development. 
                    As a Full-stack Developer, my focus will be on developing innovative web solutions and repeatedly engaging in very challenging web development problems.  I studied Computer Science and did several projects which prove my full-stack development skills, problem-solving, and teamwork.
                </p>
                <p>              
                    My career so far has given me a very good chance to boost my programming skills in languages like HTML, CSS, and JavaScript, and in frameworks such as React, Node.js, and Express.js. 
                    Such technologies as have been named above, and also other tools like SQL, MongoDB, and RESTful APIs are used for past and ongoing projects in order to provide scalable, high-performance web applications.
                    My experience ranges from building interactive front-end interfaces to developing robust back-end systems, guaranteeing seamless integration in both. I look forward to continuous learning and professional growth, contributing to valuable projects, and leaving my mark in the tech industry.
                </p>
                <SocialLinks/>
            </div>
        </div>
    );
};

export default About;