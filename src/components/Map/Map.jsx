import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import styles from './Map.module.css';

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

import { useCities } from '../../contexts/CitiesContext';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import L from 'leaflet';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const navigate = useNavigate();
  const { cities } = useCities();

  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  const [mapPosition, setMapPosition] = useState([52, 13]);

  return (
    <div onClick={() => navigate('form')} className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map(el => (
          <Marker key={el.id} position={[el.position.lat, el.position.lng]}>
            <Popup>{el.notes ? el.notes : `A Trip to ${el.cityName}`}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
