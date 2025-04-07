import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./layout/navbar"; // Updated Navbar
import Home from "./screens/home";
import Scheme from "./screens/scheme";
import AboutUs from "./screens/aboutUs";
import ContactUs from "./screens/contactUs";
import Accountants from "./screens/accountants";
import Academy from "./screens/academy";
import Hero from "./layout/hero"; // Updated Hero

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scheme" element={<Scheme />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/accountants" element={<Accountants />} />
        <Route path="/academy" element={<Academy />} />
      </Routes>
    </Router>
  );
};

export default App;
