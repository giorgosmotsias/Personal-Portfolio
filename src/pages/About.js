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
                    Hey, i am Giorgos Motsias, i am 27-year-old software engineer with a passion for Web Development.
                    With experience in software development, I specialize in creating robust and efficient solutions to complex problems.
                    I hold a degree in Computer Science and have worked on various projects that demonstrate my skills in full-stack development, problem-solving, and teamwork.
                </p>
                <p>
                    Throughout my career, I have honed my skills in programming languages such as Html, CSS, JavaScript and I am proficient in frameworks like React, Node.js, and Express.js.
                    My goal is to continue learning and growing as a professional, contributing to meaningful projects, and making a positive impact in the tech industry.
                </p>
                <SocialLinks/>
            </div>
        </div>
    );
};

export default About;