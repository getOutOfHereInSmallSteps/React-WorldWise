import React from 'react';

import styles from './Map.module.css';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Map = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div onClick={() => navigate('form')} className={styles.mapContainer}>
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>
      {}
    </div>
  );
};

export default Map;
