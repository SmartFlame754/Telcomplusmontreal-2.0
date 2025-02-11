import React from 'react';
    import { Link } from 'react-router-dom';

    const Footer = () => {
      return (
        <footer className="main-footer" style={{ backgroundColor: '#000', color: '#FFF8F0' }}>
          <div className="container footer-content">
            <div className="footer-social" style={{textAlign: 'left', flex: '1'}}>
              <h4 style={{color: '#FFF8F0'}}>Follow Us</h4>
              <div className="social-icons" style={{justifyContent: 'flex-start'}}>
                <a href="https://twitter.com/telcomplus" target="_blank" rel="noopener noreferrer">
                  <img src="/x-icon.svg" alt="X (Twitter)" />
                </a>
                <a href="https://ca.pinterest.com/telcomplusmontreal/" target="_blank" rel="noopener noreferrer">
                  <img src="/pinterest-icon.svg" alt="Pinterest" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="/facebook-icon.svg" alt="Facebook" />
                </a>
                <a href="https://www.youtube.com/@telcomplusmontreal" target="_blank" rel="noopener noreferrer">
                  <img src="/youtube-icon.svg" alt="YouTube" />
                </a>
              </div>
            </div>
            <div className="footer-logo" style={{textAlign: 'center', flex: '2'}}>
              <Link to="/" className="company-title" style={{color: '#FFF8F0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="logo-icon">
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  <path d="M4 12h16"></path>
                  <path d="M4 7v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
                  <path d="M4 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
                </svg>
                <span style={{marginLeft: '5px'}}>TelcomPlus Montreal</span>
              </Link>
            </div>
            <div className="footer-links" style={{textAlign: 'center', flex: '1'}}>
              <h4 style={{color: '#FFF8F0'}}>Quick Links</h4>
              <ul style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <li><Link to="/" style={{color: '#FFF8F0'}}>Home</Link></li>
                <li><Link to="/about" style={{color: '#FFF8F0'}}>About Us</Link></li>
                <li><Link to="/services" style={{color: '#FFF8F0'}}>Services</Link></li>
                <li><Link to="/contact" style={{color: '#FFF8F0'}}>Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-copyright">
            <p style={{textAlign: 'center', color: '#FFF8F0'}}>Copyright © 2025 All rights reserved</p>
          </div>
        </footer>
      );
    };

    export default Footer;
