import React from 'react';

import styles from './CityList.module.css';

import Spinner from '../UI/Spinner';
import Message from '../UI/Message';
import CityItem from './CityItem';

import PropTypes from 'prop-types';

const CityList = ({ isLoading, cities }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message>Add your first city by clicking on a city on the map</Message>
    );

  return (
    <ul className={styles.cityList}>
      {cities.map(el => (
        <CityItem key={el.id} city={el} />
      ))}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default CityList;
