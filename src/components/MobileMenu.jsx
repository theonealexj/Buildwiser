import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`} id="mobile-menu">
      <ul>
        <li><Link to="/" className="mobile-link" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" className="mobile-link" onClick={closeMenu}>About</Link></li>
        <li><Link to="/services" className="mobile-link" onClick={closeMenu}>Services</Link></li>
        <li><Link to="/how-we-work" className="mobile-link" onClick={closeMenu}>Our Process</Link></li>
        <li><a href="https://cal.com/growwithalex/audit" target="_blank" rel="noopener noreferrer" className="mobile-link mobile-book" onClick={closeMenu}>Book a free audit</a></li>
      </ul>
    </div>
  );
};

export default MobileMenu;
