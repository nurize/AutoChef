// src/components/ServicesSection.js
import React from 'react';
import { useService } from '../context/ServiceContext';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const ServicesSection = ({ id, title, description, points, image, icon, alignRight }) => {
  const { setSelectedService } = useService();
  const navigate = useNavigate();
  const containerAlignmentClass = alignRight ? 'ml-auto lg:ml-auto' : 'mr-auto lg:mr-auto';

  const handleBookService = () => {
    setSelectedService(title);
    navigate('/booking');
  };

  return (
    <section 
      id={id}
      className="relative flex items-center justify-center bg-black text-white bg-cover bg-center p-3 md:p-10"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${image})`,
        fontFamily: 'Inter'
      }}
    >
      <div className={`relative z-10 p-8 sm:p-12 md:p-16 lg:w-2/3 xl:w-7/12 rounded-lg ${containerAlignmentClass}`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-4 md:pb-6 lg:pb-8 font-bold mb-4 flex italic items-center">
          {title} 
          <span className="ml-2 text-xl h-20 w-20 " role="img" aria-label="icon">
            <img src={icon} alt='service icon'/></span>
        </h2>
        <p className="mb-4 text-base sm:text-lg">{description}</p>
        <ul className="list-disc list-inside mb-8 text-base sm:text-lg">
          {points.map((point, index) => (
            <li key={index} className='mb-2 md:mb-4'><span className="font-bold">{point.title}:</span> {point.text}</li>
          ))}
        </ul>
        
        <Button 
          styleProp={"bg-white hover:bg-red-700 text-red-700 hover:text-white text-base py-2 px-4 rounded focus:outline-none focus:shadow-outline"} 
          textProp={"Book A Service"}
          onClick={handleBookService}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
