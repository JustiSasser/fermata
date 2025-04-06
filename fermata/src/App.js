import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FermataHome from './pages/FermataHome';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FermataHome />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;