import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {

  const [ShowHeader, setShowHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > lastScrollY) {
        // scroll down
        setShowHeader(false);
      } else {
        // scroll up
        setShowHeader(true);
      }
      // remember current page's y position in the scroll
      setLastScrollY(window.scrollY);
    };
    // Add the event listener for the scroll event
    window.addEventListener('scroll', handleScroll);
    return() => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${ShowHeader ? 'visible' : 'hidden'}`}>
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
