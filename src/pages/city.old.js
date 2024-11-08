import { useState, setState,  useEffect, setUsers }  from "react";

// import { getWeather } from '../service/weatherMethods.';
import { useLocation, useParams } from "react-router-dom";
import axios from 'axios';



// import CityWeather from '../components/city';

import { getWeather } from '../service/weatherMethods';

let url = 'http://192.168.0.220:3001';
const city = 'winlaton';


function City ( { city} ) {
  const [ data, getData ] = useState( [] );
  // const axios = require('axios');
  const getTheWeather = async () => {
    getData(await getWeather());
  };

  useEffect( () => {
    getTheWeather();
  }, []);
    // city = 'winlaton';
    

    // const getAllTickets = async () => {
    //   setTickets(await fetchAllTickets());
    // };
    
    // const getData = async () => {
    //   const fetchedData = await getWeather(city);
    //   setData(fetchedData);
    // };
      // const chosen = 'winlaton';

    // const getWeather = async () => {
    //   setState( 
    // };

    // const sendCreateRequest = async ( city ) => {

      // const gotData = await getWeather( chosen );
  
      // if (!gotData) {
      //   return;
      // }

      // return gotData;
      
    // //   getAllTickets();
    // //   setTicket(createdTicket);
    // };
  
    // useEffect( () => {
    //   getWeather( city);
    // }, []);
    return (
        <div>
            <p>{}</p>
        </div>
    )
}

// function getData  ( city ) {
//     const location = useLocation;
//     const queryParameters = new URLSearchParams(location.search);

//     // return getWeather( queryParameters.get("city") );
// }

export default City;
