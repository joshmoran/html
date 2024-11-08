
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
    // alert( celsius) ;
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
