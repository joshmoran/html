import React, { useState, useRef } from "react";
import { getWeather } from "../service/weatherMethods";
import { Link, useNavigate  } from "react-router-dom";

import '../css/universal.css';
import '../css/index.css';

const Index = () => {
    
    return (
        <div className="container">
            <h1>Hello and welcome to our weather website. :)</h1>

            <h3>Welcome to the weather website. :)</h3>
            <p>Please enter a city and your preferred measurement.</p>
        </div>
    );
};

export default Index;