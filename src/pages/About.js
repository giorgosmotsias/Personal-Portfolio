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
                    As a Full-Stack Developer with a strong focus on developing creative web solutions. I have consistently solved complex challenges in web development. I hold a degree in Computer Science and have worked on various projects that demonstrate my expertise in full-stack development, problem-solving, and teamwork.
                </p>
                <p>
                    "Throughout my career, I have honed my skills in programming languages such as HTML, CSS, and JavaScript, as well as frameworks like React.js, Node.js, and Express.js. 
                    In both past and ongoing projects, I utilize these technologies, along with other tools like SQL, MongoDB, and RESTful APIs, to deliver scalable and high-performing web applications. My experience ranges from building interactive front-end interfaces to developing robust back-end systems, ensuring the seamless integration of both.
                    My goal is to continue learning and growing as a professional, contributing to meaningful projects, and making a positive impact in the tech industry.
                </p>
                <SocialLinks/>
            </div>
        </div>
    );
};

export default About;