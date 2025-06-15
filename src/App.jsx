import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Beranda from './pages/Beranda';
import Sejarah from './pages/Sejarah';
import Pimpinan from './pages/Pimpinan';
import Workshop from './pages/Workshop';
import WorkshopDetail from './pages/WorkshopDetail';
import Kontribusi from './pages/Kontribusi';
import Statistik from './pages/Statistik';
import StatistikDetail from './pages/StatistikDetail';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/sejarah" element={<Sejarah />} />
          <Route path="/pimpinan" element={<Pimpinan />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/workshop/:slug" element={<WorkshopDetail />} />
          <Route path="/kontribusi" element={<Kontribusi />} />
          <Route path="/statistik" element={<Statistik />} />
          <Route path="/statistik/:slug" element={<StatistikDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
