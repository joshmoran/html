import React, { useState, useRef } from "react";
import { useNavigate  } from "react-router-dom";
// require('./dotenv').config();#

import '../css/universal.css';
import '../css/header.css';



const url = 'http://192.168.0.220:3000';


const Navbar = () => {
    const [ city, setCity ] = useState('');
    const [ measure, setMeasure ] = useState(  'metric' );
    const inputCity = useRef();
    const navigate = useNavigate();

    const handleMeasure = (event) => {
<<<<<<< HEAD
=======
        event.preventDefault();
>>>>>>> cc639ea (Completed project, final touches and optimizations)
        setMeasure(event.target.value);
    }

    const handleCity = (event) => {
<<<<<<< HEAD
=======
        event.preventDefault();
>>>>>>> cc639ea (Completed project, final touches and optimizations)
        setCity(event.target.value);
    }

    const searchWeather = ( event) => {
        event.preventDefault();

        if ( city === '' ) { 
            window.location.href = '/';
        } else {
            const finalCity  =  city.charAt(0).toUpperCase() + city.slice(1);
            window.location.href = `${finalCity}&${measure}`;
        }
    }

    return (
        <div className="header">
            
            <h1>Search for weather in your location</h1>
            <form onSubmit={searchWeather}>
                <input type="text" onChange={handleCity} placeholder="Enter city name" name="city" value={city} />

<<<<<<< HEAD
                <select value="measure" onLoad={handleMeasure} onChange={handleMeasure}>
                    <option value="metric" selected>Metric</option>
=======
                <select value="measure" onChange={handleMeasure} value={measure}>
                    <option value="metric">Metric</option>
>>>>>>> cc639ea (Completed project, final touches and optimizations)
                    <option value="imperial">Imperial</option>
                </select>

                <button type="submit">Submit</button> 
            </form>
        </div>
    );
};

export default Navbar;