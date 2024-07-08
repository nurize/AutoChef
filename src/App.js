import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import GalleryPage from './pages/GalleryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './pages/ServicesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
