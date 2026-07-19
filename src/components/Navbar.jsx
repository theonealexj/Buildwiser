import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const location = useLocation();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <img src="/Logo.jpg" alt="BuildWiser" className="nav-logo-img" />
        </Link>
        <ul className="nav-links" id="nav-links">
          <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
          <li><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link></li>
          <li><Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link></li>
          <li><Link to="/how-we-work" className={`nav-link ${location.pathname === '/how-we-work' ? 'active' : ''}`}>Our Process</Link></li>
          <li><a href="https://cal.com/growwithalex/audit" target="_blank" rel="noopener noreferrer" className="nav-cta-link" id="nav-book-btn">Book a free audit</a></li>
        </ul>
        <button
          className={`nav-hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          id="nav-hamburger"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
