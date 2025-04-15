import React from "react";
import "../assets/css/Contact.css"; // Ensure correct import path

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2 className="display-4 fw-bold">Contact Me</h2>
        <form className="contact-form">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" placeholder="Your Email" />
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-submit w-100">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
