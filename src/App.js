// import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/index";
import City from "./pages/city";
import Weather from "./pages/weather";
import Navbar from "./pages/navbar";

import {APIProvider, Map, useMap,  MapCameraChangedEvent } from '@vis.gl/react-google-maps';
import { MarkerClusterer } from "@googlemaps/markerclusterer";

function App() {
  return (
   
    <Router>
      <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/:location" element={<City />} />
            <Route path="/weather" element={<Weather />} />
        </Routes>
    </Router>
  );
}


export default App;
