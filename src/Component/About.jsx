import React from "react";
import "../assets/css/About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src="https://via.placeholder.com/200" alt="Profile" className="profile-img" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm <span className="highlight">Your Name</span>, a passionate web developer specializing in front-end and back-end technologies.
            I love building modern, user-friendly applications with the latest technologies like <strong>React, Django, and Bootstrap</strong>.
          </p>
          <p>
            With a keen eye for design and functionality, I create **responsive** and **interactive** applications that provide the best user experience.
          </p>
          <div className="buttons">
            <a href="/contact" className="btn btn-primary">Contact Me</a>
            <a href="/resume.pdf" className="btn btn-outline-light">Download Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
