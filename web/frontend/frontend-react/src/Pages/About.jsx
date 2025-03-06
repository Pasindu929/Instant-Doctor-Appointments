import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>

      <div className="about-content">
        <h2>Who We Are</h2>
        <p>
          Welcome to **Instant Doctor Appointment**, your trusted healthcare scheduling platform.
          We connect patients with professional doctors to ensure timely and efficient medical consultations.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our goal is to make healthcare more accessible by simplifying the appointment booking process,
          reducing waiting times, and improving the doctor-patient experience.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Fast & Easy Appointment Booking</li>
          <li>Verified Professional Doctors</li>
          <li>Secure & Confidential Consultations</li>
          <li>24/7 Availability</li>
        </ul>

        <h2>Contact Us</h2>
        <p>Email: support@instantdoctor.com</p>
        <p>Phone: +94 234 567 890</p>
      </div>

      <footer className="about-footer">
        <p>© 2025 Instant Doctor Appointment. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
