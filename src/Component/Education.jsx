import React from "react";
import "../assets/css/Education.css"; // Ensure correct import path

function Education() {
  return (
    <div className="education-container">
      <div className="education-content">
        <h2 className="display-4 fw-bold">Education</h2>
        <div className="education-timeline">
          <div className="education-box">🎓 Bachelor's in Computer Science - XYZ University (2019-2023)</div>
          <div className="education-box">💻 Full Stack Web Development - Udemy (2022)</div>
          <div className="education-box">📚 Data Structures & Algorithms - Coursera (2021)</div>
        </div>
      </div>
    </div>
  );
}

export default Education;
