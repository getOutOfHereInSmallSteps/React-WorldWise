import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProductPage from './pages/ProductPage';
import PricingPage from './pages/PricingPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AppLayout from './pages/AppLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
