import React, {useRef, useEffect, useState} from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl"

import "./Map.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;
const Map = () => { 

    const mapContainer = useRef(null);
    const map = useRef(null);

    const [lng, setLng] = useState(-121.3);
    const [lat, setLat] = useState(44.05);
    const [zoom, setZoom] = useState(12);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });
    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return(
        <div className="mapbox-container">
            <div ref={mapContainer} className="map-container"></div>
        </div>
    );
}

export default Map;