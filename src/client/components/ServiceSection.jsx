import React from 'react';
import PropTypes from 'prop-types';
import { useService } from '../context/ServiceContext';
import Button from './BookButton';
import { useNavigate } from 'react-router-dom';

// Component for the services section
const ServicesSection = ({ id, title, description, points, image, icon, alignRight }) => {
  const { setSelectedService } = useService(); // Context hook to set the selected service
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Determine the alignment of the container based on the 'alignRight' prop
  const containerAlignmentClass = alignRight ? 'ml-auto lg:ml-auto' : 'mr-auto lg:mr-auto';

  // Define the background style for the section
  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${image})`,
    fontFamily: 'Inter'
  };

  return (
    <section 
      id={id}
      className="relative flex items-center justify-center bg-black text-white bg-cover bg-center p-3 md:p-10"
      style={sectionStyle}
    >
      <div className={`relative z-10 p-8 sm:p-12 md:p-16 lg:w-2/3 xl:w-7/12 rounded-lg ${containerAlignmentClass}`}>
        {/* Service title with icon */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-4 md:pb-6 lg:pb-8 font-bold mb-4 flex italic items-center">
          {title} 
          <span className="ml-2 text-xl h-20 w-20" role="img" aria-label="icon">
            <img src={icon} alt="service icon" />
          </span>
        </h2>
        {/* Service description */}
        <p className="mb-4 text-base sm:text-lg">{description}</p>
        {/* List of service points */}
        <ul className="list-disc list-inside mb-8 text-base sm:text-lg">
          {points.map((point, index) => (
            <li key={index} className="mb-2 md:mb-4">
              <span className="font-bold">{point.title}:</span> {point.text}
            </li>
          ))}
        </ul>
        {/* 'Book A Service' button */}
        <Button
          styleProp="bg-white hover:bg-red-700 text-red-700 hover:text-white text-base py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          textProp="Book A Service"
          onClick={() => {
            setSelectedService(title); // Set the selected service in the context
            navigate('/booking'); // Navigate to the booking page
          }}
        />
      </div>
    </section>
  );
};

// Define the prop types for the component
ServicesSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  image: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alignRight: PropTypes.bool.isRequired,
};

export default ServicesSection;
