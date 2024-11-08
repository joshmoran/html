import React, { useState, setState,  useEffect }  from "react";
import {  useLocation  } from 'react-router-dom';
import '../css/universal.css';
import '../css/city.css';

import '../weather.css';

const City = () => {
  const location = useLocation();
  const [ data, setData ] = useState( [] );
  const [ measure, setMeasure ] = useState( 'metric' );

  const url = 'http://192.168.0.220:3001';
  const city = getCity();

  useEffect(  ( ) => {
    fetchData();
  }, [] );

  const fetchData = async () => {
   const weatherData = fetch(`${url}/${city}`)
    .then( (response) => {
      return response.json() 
    })
    .then( data => setData( data) )
    return await weatherData;

    setMeasure('metric');
  };

  
  if ( data.hasOwnProperty('cod') && data.cod == 404 ){ 
    return (
      <div className="container">
        <h1>City not found, Please try again with another city.</h1>
      </div>
    )
  } else if ( data != '' ) {
    return (
      <div className="container">
        <div className="weatherEl">
          <div>
            <h1>Weather for {data.name} in {data.sys.country}</h1>
            <p></p>
            <div id>
              <h2>Overview</h2>
              <p>Current temperature: {data.weather[0].main}</p>
              <img src={buildIcon()} />
            </div>
          </div>
          <div className="row">
            <div className="left">      
              <h2>Temperature</h2>
              <p>Feels like {getTempInCel()} {returnMeasurement()}</p>
              <p>Temperature: {returnTemp()} {returnMeasurement()}</p>
              <p>Minimum Temperature: {returnMinTemp()} {returnMeasurement()}</p>
              <p>Maximum Temperature: {returnMaxTemp()} {returnMeasurement()}</p>
            </div>
            <div className="right">
              <img className="cityImg" src="img/temperature-half.svg" />
            </div>
          </div>     
        </div>
      </div>

    )
  } else { 
    return (
        <div className="container">
            <p>City not found.</p>
        </div>
    )
  }

  function getCity () {
    const city = location.pathname.split('/')[1];
    return city;
  }

  function buildIcon() {
    return `img/${data.weather[0].icon}_t@2x.png`;
  }

  // Build far or cel symbol 
  function returnMeasurement() {
    if ( measure === 'metric' ) { 
      return '\u00B0C';
    } else {
      return `\u00B0f`;
    }
  }

  // Temperature - Main
  function returnTemp() { 
    if ( measure === 'metric' ) { 
      return getTempInCel();
    } else {
      return getTempInFar();
    }
  }

  function getTempInCel() {
    const kelvin = data.main.temp;
    const celsius = kelvin - 273.15;
    // alert( celsius) ;
    return celsius.toFixed(2);
  }

  function getTempInFar() {
    const kelvin = data.main.temp;
    const fahrenheit = ( kelvin - 273.15 ) * 1.8 + 32;
    return fahrenheit.toFixed(2);
  }
  
  // Temperature - Feels Like
  function returnTemp() { 
    if ( measure === 'metric' ) { 
      return getTempInCel();
    } else {
      return getTempInFar();
    }
  }

  function getTempInCel() {
    const kelvin = data.main.temp;
    const celsius = kelvin - 273.15;
    // alert( celsius) ;
    return celsius.toFixed(2);
  }

  function getTempInFar() {
    const kelvin = data.main.temp;
    const fahrenheit = ( kelvin - 273.15 ) * 1.8 + 32;
    return fahrenheit.toFixed(2);
  }


  // Temperature - Minimum

  function returnMinTemp() { 
    if ( measure === 'metric' ) { 
      return getMinTempInCel();
    } else {
      return getMinTempInFar();
    }
  }

  function getMinTempInCel() {
    const kelvin = data.main.temp_min;
    const celsius = kelvin - 273.15;
    // alert( celsius) ;
    return celsius.toFixed(2);
  }

  function getMinTempInFar() {
    const kelvin = data.main.temp_min;
    const fahrenheit = ( kelvin - 273.15 ) * 1.8 + 32;
    return fahrenheit.toFixed(2);
  }

  // Temperature - Maximum
  function returnMaxTemp() { 
    if ( measure === 'metric' ) { 
      return getMaxTempInCel();
    } else {
      return getTempInFar();
    }
  }

  function getMaxTempInCel() {
    const kelvin = data.main.temp_max;
    const celsius = kelvin - 273.15;
    // alert( celsius) ;
    return celsius.toFixed(2);
  }

  function getMaxTempInFar() {
    const kelvin = data.main.temp_max;
    const fahrenheit = ( kelvin - 273.15 ) * 1.8 + 32;
    return fahrenheit.toFixed(2);
  }

}


export default City;


// Elements 
// - Overview
// - Temperature
// - Visabiliyy 
// - Wind 
// - Rain
// - Sunrise & sunset
// 