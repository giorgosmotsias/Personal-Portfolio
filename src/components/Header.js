import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link to="home" smooth={true} duration={1000}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
        <li><Link to="projects" smooth={true} duration={1000}>Projects</Link></li>
        <li><Link to="skills" smooth={true} duration={1000}>Skills</Link></li>
        <li><Link to="experience" smooth={true} duration={1000}>Experience</Link></li>
        <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
