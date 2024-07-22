import { useNavigate, useLocation } from 'react-router-dom';
import Button from './BookButton';

const HeroSection = ({ title, description, description2, backgroundImage }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine if the current page is the home or services page
  const isHomePage = location.pathname === '/';
  const isServices = location.pathname === '/services';

  // Navigate to the contact page
  const handleTalkToUsClick = () => {
    navigate('/contact');
  };

  return (
    <section
      // Set background properties and height based on page type
      className={`bg-cover bg-center bg-black ${isHomePage || isServices ? 'h-screen' : 'h-[60vh]'} flex items-center`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-10 w-full h-full flex items-center">
        <div className="text-left text-white w-11/12 md:w-2/3 lg:w-2/5 mx-4 md:ml-28 p-4 md:p-8">
          {/* Main title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold my-4 md:my-10">
            {title}
          </h1>
          {/* Main description */}
          <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-8">
            {description}
          </p>
          {/* Optional second description */}
          {description2 && (
            <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-8">
              {description2}
            </p>
          )}
          <div className="flex flex-col md:flex-row">
            {/* Button to book a schedule */}
            <Button
              styleProp="bg-red-600 hover:bg-red-700 w-full md:w-auto px-6 py-3 mb-4 md:mb-0 md:mr-4 rounded text-sm md:text-lg"
              textProp="Book A Schedule"
            />
            {/* Button to navigate to contact page */}
            <button
              className="bg-white text-red-600 w-full md:w-auto px-6 py-3 rounded text-sm md:text-lg"
              onClick={handleTalkToUsClick}
            >
              Talk To Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
