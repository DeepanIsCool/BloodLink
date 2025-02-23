import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import DonorRegistration from './pages/DonorRegistration';
import BloodBankDetails from './pages/BloodBankDetails';
import BloodRequest from './pages/BloodRequest';
import NearbyPage from './pages/NearbyPage';
import HistoryPage from './pages/HistoryPage';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/donor-registration" element={<DonorRegistration />} />
        <Route path="/blood-bank/:id" element={<BloodBankDetails />} />
        <Route path="/blood-request" element={<BloodRequest />} />
        <Route path="/nearby" element={<NearbyPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;