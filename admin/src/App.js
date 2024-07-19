import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import BookedServices from './pages/BookedServices';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/booked-services" element={<BookedServices />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
