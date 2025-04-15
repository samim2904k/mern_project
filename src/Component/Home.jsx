import React from "react";
import Particles from "react-tsparticles";
import "../assets/css/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero-container">
      <Particles
        id="particles-js"
        options={{
          particles: {
            number: { value: 100 },
            move: { speed: 2 },
            size: { value: 3 },
          },
        }}
      />
      <div className="hero-content">
        <h1 className="display-4">Welcome to My Portfolio</h1>
        <p className="lead">I build modern & interactive web experiences.</p>
        <Link to="/contact" className="btn btn-primary btn-lg mt-3">Let's Connect</Link>
      </div>
    </div>
  );
}

export default Home;
