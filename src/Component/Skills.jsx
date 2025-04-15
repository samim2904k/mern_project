import React from "react";
import "../assets/css/Skills.css"; // Make sure the path is correct

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-content">
        <h2 className="display-4 fw-bold">Skills</h2>
        <div className="skills-grid">
          <div className="skill-box">React</div>
          <div className="skill-box">Python</div>
          <div className="skill-box">JavaScript</div>
          <div className="skill-box">Django</div>
          <div className="skill-box">Node.js</div>
          <div className="skill-box">Bootstrap</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
