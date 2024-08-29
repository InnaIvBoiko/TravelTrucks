//import css from './App.module.css';
import { lazy } from 'react';
import Layout from '../Layout/Layout.jsx';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const Catalog = lazy(() => import('../../pages/Catalog/Catalog.jsx'));
const CamperDetailsPage = lazy(() => import('../../pages/CamperDetailsPage/CamperDetailsPage.jsx'));
const CamperFeatures = lazy(() => import('../CamperFeatures/CamperFeatures.jsx'));
const CamperReviews = lazy(() => import('../CamperReviews/CamperReviews.jsx'));

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/:id' element={<CamperDetailsPage />} >
          <Route path='features' element={<CamperFeatures />} />
          <Route path='reviews' element={<CamperReviews />} />
        </Route>
      </Routes>
    </Layout>
  )
}

