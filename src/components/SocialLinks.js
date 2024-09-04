import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";  
import { faFileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';
import "./SocialLinks.css";

const SocialLinks = () => {
    return (
        <div className="social-links">
            <a href="#contact" className="social-link">
                <Link to="contact" smooth={true} duration={1000}>
                    <FontAwesomeIcon icon={faEnvelope} size="2x" color="#64ffda" />
                    <span>Contact Me Here</span>
                </Link>
            </a>
            <a href="/GeorgiosMotsias_08_24.pdf" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faFileAlt} size="2x" color="#64ffda" />
                <span>View my Resume</span>
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="#64ffda" />
            </a>
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faGithub} size="2x" color="#64ffda" />
            </a>
        </div>
    );
};

export default SocialLinks;