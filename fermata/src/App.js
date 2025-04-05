import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FermataHome from './pages/FermataHome';
import Coaching from './pages/Offerings/Coaching';
import Detox from './pages/Offerings/Detox';
import Faith from './pages/Offerings/Faith';
import Retreat from './pages/Offerings/Retreat';
import Wellness from './pages/Offerings/Wellness';
import Workshop from './pages/Offerings/Workshop';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FermataHome />} />
        <Route path="/offerings/coaching" element={<Coaching />} />
        <Route path="/offerings/detox" element={<Detox />} />
        <Route path="/offerings/faith" element={<Faith />} />
        <Route path="/offerings/retreat" element={<Retreat />} />
        <Route path="/offerings/wellness" element={<Wellness />} />
        <Route path="/offerings/workshop" element={<Workshop />} />
      </Routes>
    </Router>
  );
}

export default App;