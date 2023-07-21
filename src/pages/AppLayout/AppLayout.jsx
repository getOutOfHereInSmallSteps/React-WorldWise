import React from 'react';

import styles from './AppLayout.module.css';

import AppNav from '../../components/AppNav/AppNav';
import Sidebar from '../../components/UI/Sidebar';
import Map from '../../components/Map/Map';

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
};

export default AppLayout;
