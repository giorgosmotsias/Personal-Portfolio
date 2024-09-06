import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [ShowHeader, setShowHeader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${ShowHeader ? 'visible' : 'hidden'}`}>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li><Link to="about" smooth={true} duration={1000} onClick={closeMenu}>About</Link></li>
        <li><Link to="projects" smooth={true} duration={1000} onClick={closeMenu}>Projects</Link></li>
        <li><Link to="skills" smooth={true} duration={1000} onClick={closeMenu}>Skills</Link></li>
        <li><Link to="experience" smooth={true} duration={1000} onClick={closeMenu}>Experience</Link></li>
        <li><Link to="contact" smooth={true} duration={1000} onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Header;