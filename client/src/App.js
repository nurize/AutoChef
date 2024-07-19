import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import GalleryPage from './pages/GalleryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import BookingPage from './pages/BookingPage';
import { ServiceProvider } from './context/ServiceContext';
import { UserProvider } from './context/UserContext';
import EmailSignUp from './components/EmailSignUp';
import heroSections from './data/heroSections';
import HeroSection from './components/HeroSection';

Modal.setAppElement('#root');

function App() {
  return (
    <UserProvider>
      <ServiceProvider>
        <Router>
          <div className="App">
            <Header />
            <CurrentHeroSection />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <ShowFooter />
          </div>
        </Router>
      </ServiceProvider>
    </UserProvider>
  );
}

const CurrentHeroSection = () => {
  const location = useLocation();
  const heroData = heroSections.find((section) => section.page === location.pathname);

  if (!heroData) return null;

  return (
    <HeroSection
      backgroundImage={heroData.backgroundImage}
      title={heroData.title}
      description={heroData.description}
      description2={heroData.description2}
    />
  );
};

const ShowFooter = () => {
  const location = useLocation();
  const hideFooter = location.pathname === '/gallery' || location.pathname === '/booking';
  return !hideFooter ? <> <EmailSignUp /> <Footer /> </> : null;
};

export default App;
