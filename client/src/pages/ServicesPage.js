// src/pages/ServicesPage.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ServicesSection from '../components/ServiceSection';
import serviceData from '../data/serviceData';

const ServicesPage = () => {
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
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center p-2 sm:p-4 md:p-6 lg:p-8 font-semibold items-center">
        Our Services
      </h2>
      {serviceData.map((section, index) => (
        <ServicesSection
          key={index}
          id={section.path}
          title={section.title}
          description={section.description}
          points={section.points}
          image={section.image}
          icon={section.icon}
          alignRight={index % 2 === 0} 
        />
      ))}
    </div>
  );
};

export default ServicesPage;
