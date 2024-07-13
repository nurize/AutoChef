// src/pages/ServicesPage.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import heroSections from '../data/heroSections';
import ServicesSection from '../components/ServiceSection';
import serviceData from '../data/serviceData';
import EmailSignUp from '../components/EmailSignUp';

const ServicesPage = () => {
  const heroData = heroSections.find(section => section.page === 'services');
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <HeroSection 
        backgroundImage={heroData.backgroundImage}
        title={heroData.title}
        description={heroData.description}
        description2={heroData.description2}
      />
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center p-2 sm:p-4 md:p-6 lg:p-8 font-semibold items-center">
        Our Services
      </h2>
      {serviceData.map((section, index) => (
        <ServicesSection
          key={index}
          id={section.path} // Assigning the id to the section
          title={section.title}
          description={section.description}
          points={section.points}
          image={section.image}
          icon={section.icon}
          alignRight={index % 2 === 0} 
        />
      ))}
      <EmailSignUp/>
    </div>
  );
};

export default ServicesPage;
