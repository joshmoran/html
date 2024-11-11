import React, { useState,  useEffect }  from "react";
import {  useLocation  } from 'react-router-dom';
import '../css/universal.css';
import '../css/city.css';

const containerStyle = {
  width: '400px',
  height: '400px',
}

const City = () => {
  const location = useLocation();
  const [ data, setData ] = useState( [] );
  const [ measure, setMeasure ] = useState( 'metric' );

  const url = process.env.REACT_APP_NODE_URL;

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
    

    const pathName = window.location.pathname;
    const measureSplit = pathName.split("&");

    setMeasure( measureSplit[1]);

    return await weatherData;
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
            <h2>Quick Overview</h2>
            <div className="row">
              <div className="left">
                <p>Description: {returnDescription()}</p>
                <p>Current Temperature: {returnTemp()} {returnMeasurement()}</p>
                {/* <p>Current Timezone: {returnTimezone()}</p> */}
              </div>
              <div className="right">
                <img src={buildIcon()} />
                <p>Current Weather Icon </p>

              </div>
            </div>
          </div>
       
          {/* Sun */}
          <h2>Sun Rise and Set</h2>
          <div className="row">
            <div className="left"> 
              <img className="cityImg" src="img/sun.svg" />
            </div>
            <div className="right">          
              <p>Sun Rise: {returnSunRise()}</p>
              <p>Sun Set:  {returnSunSet()}</p>
            </div>
          </div>   

          {/* Temperature */}
          <h2>Temperature</h2>
          <div className="row">
            <div className="left"> 
              <p>Feels like {returnFeelsLikeTemp()} {returnMeasurement()}</p>
              <p>Temperature: {returnTemp()} {returnMeasurement()}</p>
              <p>Minimum Temperature: {returnMinTemp()} {returnMeasurement()}</p>
              <p>Maximum Temperature: {returnMaxTemp()} {returnMeasurement()}</p>
            </div>
            <div className="right">
              <img className="cityImg" src="img/temperature-half.svg" />
            </div>
          </div>   

          {/* Wind */}
          <h2>Wind</h2>
          <div className="row">
            <div className="left"> 
              <img className="cityImg" src="img/wind.svg" />
            </div>
            <div className="right">          
              <p>Direction: {returnCompassDirection()}</p>
              <p>Speed:  {returnSpeed()} {returnSpeedMeasurement()}</p>
              <p>Clouds:  {returnClouds()} </p>
            </div>
          </div>

          {/* Air Quality */}
          <h2>Air Quality</h2>
          <div className="row">
            <div className="left"> 
              <p>Visibility: {returnVisibility()}</p>
              <p>Pressure: {returnPressure()} hPa</p>
              <p>Humidity: {returnHumidity()}% - {returnHumidityScale()}</p>
            </div>
            <div className="right">
              <img className="cityImg" src="img/cloud.svg" />
            </div>
          </div> 
        </div>
      </div>
    )
  } else { 
    return (
        <div className="container">
            <h1>City not found.</h1>
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

  // 
  // Introduction
  // 
  function returnDescription() { 

    const description = data.weather[0].description;
    const formatted = description.charAt(0).toUpperCase() + description.slice(1);

    return formatted;
  }

  function returnTimezone() {
    const utcTime = new Date( data.timezone).toTimeString();
    const splitTime = utcTime.split(" ");

    return splitTime[1];
  }

  // 
  // Sun
  // 
  function returnSunRise() {
    const unixRise = data.sys.sunrise;
    const date = new Date(unixRise * 1000);
    const dateToTime = date.toTimeString() ;
    const timeSplit = dateToTime.split(" ");
    return timeSplit[0];
  }

  function returnSunSet() {
    const unixRise = data.sys.sunset;
    const date = new Date(unixRise * 1000);
    const dateToTime = date.toTimeString() ;
    const timeSplit = dateToTime.split(" ");
    return timeSplit[0];
  }

  // 
  // Temperature - Main
  // 
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
    return celsius.toFixed(2);
  }

  function getTempInFar() {
    const kelvin = data.main.temp;
    const fahrenheit = ( kelvin - 273.15 ) * 1.8 + 32;
    return fahrenheit.toFixed(2);
  }
  
  // Temperature - Feels Like
  function returnFeelsLikeTemp() { 
    if ( measure === 'metric' ) { 
      return getFeelsLikeTempInCel();
    } else {
      return getFeelsLikeTempInFar();
    }
  }

  function getFeelsLikeTempInCel() {
    const kelvin = data.main.feels_like;
    const celsius = kelvin - 273.15;
    return celsius.toFixed(2);
  }

  function getFeelsLikeTempInFar() {
    const kelvin = data.main.feels_like;
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

  // 
  // Wind 
  // 

  function returnSpeedMeasurement() {
    if ( measure === 'metric' ) {
      return 'Meter / second';
    } else {
      return 'Miles / hour';
    }
  }

  function returnCompassDirection() {
    const direction = Number( data.wind.deg );

    if ( direction >= 0 && direction < 90) {
      // 0 to 90 degrees 
      if ( direction >= 0 && direction < 30 ) {
        return 'North';
      } else if ( direction >= 30 && direction < 60 ) {
        return 'North East';
      } else if ( direction >= 60 && direction < 90 ) {
        return 'East';
      }
    } else if ( direction >= 90 && direction < 180 ) {
      // 90 to 180 degrees 
      if ( direction >= 90 && direction < 120 ) {
        return 'East';
      } else if ( direction >= 120 && direction < 150 ) {
        return 'South East';
      } else if ( direction >= 150 && direction < 180 ) {
        return 'South';
      }
    } else if ( direction >= 180 && direction < 270 ) {
      // 180 to 270 degrees 
      if ( direction >= 180 && direction < 210 ) {
        return 'South';
      } else if ( direction >= 210 && direction < 240 ) {
        return 'South West';
      } else if ( direction >= 240 && direction < 270 ) {
        return 'West';
      }
    } else if ( direction >= 270 && direction <= 360 ) {
      // 270 to 360 degrees 
      if ( direction >= 270 && direction < 300 ) {
        return 'West';
      } else if ( direction >= 300 && direction < 330  ) {
        return 'North West';
      } else if ( direction >= 330 && direction <= 360 ) {
        return 'North';
      }
    }

  }

  function returnSpeed() {
    return data.wind.speed;
  }

  function returnClouds() {
    return data.weather[0].description;
  }

  // 
  // Air Quality 
  // 

  function returnVisibility() {
    const visibility = String( data.visibility  );
    return visibility + ' meters';
  }

  function returnPressure() {
    return data.main.pressure;
  }

  function returnHumidity() {
    return data.main.humidity;
  }

  function returnHumidityScale() {
    const humid = Number( data.main.humidity );

    if ( humid > 50 && humid < 75 ) {
      return 'High Low';
    } else if ( humid > 75 && humid <= 100 ) {
      return 'High';
    } else if (humid > 0 && humid < 25 ){
      return 'Low';
    } else if ( humid => 25 && humid < 50 ){
      return 'Low High';
    }    
  }

  // 
  // Extra 
  // 

  function returnCountry() {
    return data.sys.country;
  }

  function returnSunrise() {
    const unixRise = data.sys.sunrise;
    const date = new Date(unixRise * 1000);
    const dateToTime = date.toTimeString() ;
    const timeSplit = dateToTime.split(" ");
    return timeSplit[0];
  }

  
  // const coordinates = data.coord;

  // function SimpleMap  ()  {


  //     const latitude = data.coord.lat;
  //     const longitude = data.coord.lon;
  
  //     // alert( longitude + ' - ' + latitude);
  
  
  //     const defaultProps = {
  //       center: {
  //         lat: {latitude},
  //         lng: {longitude}
  //       },
  //       zoom: 13
  //     };
  
  //     return (
  //       // Important! Always set the container height explicitly
  //       <div style={{ height: '50vh', width: '100%' }}>
  //         <GoogleMapReact
  //           bootstrapURLKeys={{ key: "AIzaSyBSmDv6_ds8uxNQECiDO5QsNV3ud0xiXEY" }}
  //           defaultCenter={defaultProps.center}
  //           defaultZoom={defaultProps.zoom}
  //         >
  //           {/* <AnyReactComponent
  //             lat={latitude}
  //             lng={longitude}
  //             text="My Marker"
  //           /> */}
  //         </GoogleMapReact>
  //       </div>
  //     );
  //   }
  //   console.log( <SimpleMap data={data.coord} /> );
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