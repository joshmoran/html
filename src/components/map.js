import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

function MyMap ( lon, lat ) {
    const { loadMap } = useJsApiLoader( {
        id: 'google-maps-script',
        googleMapsApiKey: '',
    })

    const [map, setMap] = React.useState(null);

    const cityLocation = {
        lat: parseFloat(lat),
        lng: parseFloat(lon),
    }

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLng(cityLocation);

        map.fitBounds(bounds);

        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, []);

    return loadMap ? ( 
        <GoogleMap
            id="map"
            mapContainerStyle={{
                height: '100vh',
                width: '100vw',
            }}
            onLoad={onLoad}
            onUnmount={onUnmount}
            center={cityLocation}
            zoom={12}
        >
        </GoogleMap>
    ) : <div>Loading...</div>
}

export default React.memo( MyMap );