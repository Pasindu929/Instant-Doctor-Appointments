import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Appointment.css';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    doctor: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${formData.name} on ${formData.date} at ${formData.time}`);
  };

  return (
    <div className="appointment-container">
      <header classname="header">
        <h1>Book an Appointment</h1>
        <p>Fill in the details below to schedule an appointment.</p>
      </header>
      
      <form className="appointment-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />

        <label>Time:</label>
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />

        <label>Doctor:</label>
        <select name="doctor" value={formData.doctor} onChange={handleChange} required>
          <option value="">Select a Doctor</option>
          <option value="Dr. Smith">Dr. Smith</option>
          <option value="Dr. Johnson">Dr. Johnson</option>
          <option value="Dr. Lee">Dr. Lee</option>
        </select>

        <button type="submit">Book Appointment</button>
      </form>
      
      <footer className="footer">
        <p>© 2025 Doctor Appointment. All rights reserved.</p>
        <p>
          <Link to="/">Home</Link> | 
          <Link to="/contact-us">Contact Us</Link>
        </p>
      </footer>
    </div>
  );
};

export default Appointment;
