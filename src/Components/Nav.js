import React, { useState } from 'react';
import logo from "../Assets/Logo .svg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navClass = `navbar ${menuOpen ? 'open' : ''}`;
  const linksClass = `nav-links ${menuOpen ? 'visible' : ''}`;

  return (
    <nav className={navClass}>
      <a href="/" className="logo">
        <img src={logo} alt="Logo" />
      </a>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={linksClass}>
        {['Home', 'About', 'Services', 'Menu', 'Booking', 'Order Online', 'Login'].map((linkText, index) => (
          <li key={index}>
            <a href={`/${linkText.toLowerCase()}`}>{linkText}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
