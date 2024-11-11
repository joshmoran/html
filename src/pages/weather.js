import React, {useState,setState} from "react";
import GoogleMapReact from 'google-map-react';
import { getAllByPlaceholderText } from "@testing-library/react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const SimpleMap =  ( data ) => {
  const [ longitude, setLon ] = useState( null ) ;
  const [ latitude, setLat ] = useState( null );
  // console.log( data.lat);
  const startUp = async () => { 
    // setLon( );
  }

  if ( Object.length(data) )

  console.log(Object.values(data));
  

  //   {Object.key(data).map((keys) => {
  //     return setLon( data[keys].lon );
  //   })}
  // }
  // getAllByPlaceholderText()
  // const defaultProps = {
  //   center: {
  //     lat: {latitude},
  //     lng: {longitude}
  //   },
  //   zoom: 13
  // };

  // return (
  //   // Important! Always set the container height explicitly
  //   <div style={{ height: '100vh', width: '100%' }}>
  //     <GoogleMapReact
  //       bootstrapURLKeys={{ key: "AIzaSyBSmDv6_ds8uxNQECiDO5QsNV3ud0xiXEY" }}
  //       defaultCenter={defaultProps.center}
  //       defaultZoom={defaultProps.zoom}
  //     >
  //       <AnyReactComponent
  //         lat={latitude}
  //         lng={longitude}
  //         text="My Marker"
  //       />
  //     </GoogleMapReact>
  //   </div>
  // );
  // data.lon != null || 
  // if ( typeof data.lon == 'undefined' ) { 
    // data.data.lat
    // const getCoord  = () => { 
    // }
}


export default SimpleMap;