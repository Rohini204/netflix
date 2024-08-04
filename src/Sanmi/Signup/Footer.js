import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/FAQ">FAQ</a>
        <a href="/HelpCenter">Help Center</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy</a>
        <a href="#">Cookie Preferences</a>
        <a href="#">Corporate Information</a>
      </div>
      <p>&copy; 2024 Netflix, Inc.</p>
    </footer>
  );
};

export default Footer;
