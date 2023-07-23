import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import styles from './Map.module.css';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from 'react-leaflet';

import { useCities } from '../../contexts/CitiesContext';

import PropTypes from 'prop-types';

//
// ICON BUG FIX
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import L from 'leaflet';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;
//

const ChangeCenter = ({ position }) => {
  const map = useMap();
  map.setView(position);

  return null;
};

const DetectClick = () => {
  const navigate = useNavigate();

  useMapEvents({
    click: e => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
};

ChangeCenter.propTypes = {
  position: PropTypes.array,
};

const Map = () => {
  const { cities } = useCities();

  const [searchParams] = useSearchParams();
  const mapLat = +searchParams.get('lat');
  const mapLng = +searchParams.get('lng');

  const [mapPosition, setMapPosition] = useState([52, 12]);

  useEffect(() => {
    if (mapLat && mapLng) {
      setMapPosition([mapLat, mapLng]);
    }
  }, [mapLat, mapLng]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={6}
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
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

export default Map;
