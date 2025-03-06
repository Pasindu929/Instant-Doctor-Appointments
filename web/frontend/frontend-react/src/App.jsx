import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/login";
import SignUp from "./Pages/SignUp";
import About from "./pages/about";
import Home from "./Component/Home";
import Appointment from "./Pages/Appointment";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/appointment" element={<Appointment/>} />
      </Routes>
    </Router>
  );
};


export default App;
