import React from 'react';

import styles from './CountryList.module.css';

import Spinner from '../UI/Spinner';
import Message from '../UI/Message';
import CountryItem from './CountryItem';

import PropTypes from 'prop-types';

const CountryList = ({ isLoading, cities }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message>Add your first country by clicking on a city on the map</Message>
    );

  // const countries = [];

  const countries = cities.reduce((acc, curr) => {
    if (!acc.map(el => el.country).includes(curr.country))
      return [
        ...acc,
        {
          country: curr.country,
          emoji: curr.emoji,
          id: curr.id,
        },
      ];
    return acc;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map(el => (
        <CountryItem country={el} key={el.country} />
      ))}
    </ul>
  );
};

CountryList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default CountryList;
