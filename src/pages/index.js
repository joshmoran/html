import React, { useState, useRef } from "react";
import { getWeather } from "../service/weatherMethods";
import { Link, useNavigate  } from "react-router-dom";

import '../css/universal.css';
import '../css/index.css';

const Index = () => {
    
    return (
        <div className="container">
            <h1>Hello and welcome to our weather website. :)</h1>
        </div>
    );
};

export default Index;