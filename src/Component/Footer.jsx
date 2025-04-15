import React from "react";
import "../assets/css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>© {new Date().getFullYear()} MyPortfolio. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
