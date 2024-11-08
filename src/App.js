// import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/index";
import City from "./pages/city";
import Navbar from "./pages/navbar";



function App() {
  return (
   
    <Router>
      <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/:location" element={<City />} />
        </Routes>
    </Router>
  );
}


export default App;
