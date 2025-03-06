import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <h1>Instant Doctor Appointment</h1>
        <p>Book your appointment in just a few clicks.</p>
      </header>

      {/* Sidebar Section */}
      <div className="sidebar">
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/about">About Us</Link></li>
          
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="main-content">
        <h2>Welcome to the Health Appointment Portal</h2>
        <p>
          Schedule appointments, consult with doctors, and track your health with ease.
        </p>
        <div className="cta-button">
          <Link to="/appointment">Book an Appointment</Link>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 Doctor Appointment. All rights reserved.</p>
        <p>
          <Link to="/privacy-policy">Privacy Policy</Link> | 
          <Link to="/contact-us">Contact Us</Link>
        </p>
      </footer>
    </div>
  );
};

export default Home;
