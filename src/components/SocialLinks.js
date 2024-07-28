import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";  
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import "./SocialLinks.css";

const SocialLinks = () => {
    return (
        <div className="social-links">
            <a href="/Georgios_Motsias_Resume_2024.pdf" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faFileAlt} size="2x" color="#0077b5" />
                <span>View my Resume</span>
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0077b5" />
            </a>
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faGithub} size="2x" color="#333" />
            </a>
        </div>
    );
};

export default SocialLinks;