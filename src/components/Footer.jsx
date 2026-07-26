import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="nav-logo" style={{ marginBottom: '12px', textDecoration: 'none' }}>
            <img src="/nav_logo.png" alt="BuildWiser" className="nav-logo-img" />
          </Link>
          <p className="footer-desc">AI consulting and business transformation for growth-stage businesses.</p>
        </div>
        <div className="footer-links-group">
          <div className="footer-col">
            <div className="footer-col-title">Quick Links</div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Contact</div>
            <ul>
              <li><a href="https://cal.com/growwithalex/audit" target="_blank" rel="noopener noreferrer">Book a free audit</a></li>
              <li><a href="https://buildwiser.space" target="_blank" rel="noreferrer">buildwiser.space</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>&copy; 2025 BuildWiser. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
