import { createContext, useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

const BASE_API = 'http://localhost:8000';

const CitiesContext = createContext();

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_API}/cities`);
        const citiesData = await res.json();
        setCities(citiesData);
      } catch (e) {
        console.error(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

  const getCity = async id => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_API}/cities/${id}`);
      const cityData = await res.json();
      setCurrentCity(cityData);
    } catch (e) {
      console.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
};

CitiesProvider.propTypes = {
  children: PropTypes.node,
};

const useCities = () => {
  const ctx = useContext(CitiesContext);

  if (ctx === undefined)
    throw new Error('useCities was called outside the provider');

  return ctx;
};

export { CitiesProvider, useCities };
