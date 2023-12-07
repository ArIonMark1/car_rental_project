import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useState } from 'react';
import { fetchAdverts } from './redux/adverts/middleware';

import { Layout } from './pages/Layout';
import { useDispatch } from 'react-redux';
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage.jsx'));

function App() {
  const dispatch = useDispatch();

  useState(() => {
    dispatch(fetchAdverts());
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
