import React, { useEffect, useState } from 'react';

// Array of reasons with titles and icons
const reasons = [
  { title: 'Exceptional Expertise', icon: require('../assets/game-icons_car-key.png') },
  { title: 'Comprehensive Services', icon: require('../assets/game-icons_car-key.png') },
  { title: 'Timely And Reliable', icon: require('../assets/game-icons_car-key.png') },
  { title: 'Outstanding Reputation', icon: require('../assets/game-icons_car-key.png') },
];

const WhyChooseUs = () => {
  // State to keep track of the scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Function to update scroll position state
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      // Section styling with background image and parallax effect
      className="relative bg-cover bg-center bg-gray-900 text-white py-16 lg:px-16"
      style={{
        backgroundImage: `url(${require('../assets/whyBackgroundImage.png')})`,
        backgroundPositionY: `${scrollPosition * 0.5}px`, // Parallax effect
      }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
          {/* Images displayed in a grid layout */}
          <div className="space-y-6">
            <img 
              src={require('../assets/mechanic.png')} 
              alt="Mechanic working under a car" 
              className="rounded-lg shadow-lg" 
            />
            <img 
              src={require('../assets/happy-mechanic.png')} 
              alt="Mechanic smiling" 
              className="rounded-lg shadow-lg" 
            />
          </div>
          <img 
            src={require('../assets/engine.png')} 
            alt="Car engine" 
            className="rounded-lg shadow-lg h-full" 
          />
        </div>
        <div className="w-full lg:w-1/2 p-4 lg:pl-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="mb-8">
            Choose us for a seamless automotive experience - where expertise meets excellence. 
            With a commitment to quality, choose us for a seamless automotive experience - where expertise meets excellence.
          </p>
          <ul>
            {/* List of reasons with icons */}
            {reasons.map((reason) => (
              <li key={reason.title} className="flex items-center mb-4">
                <img 
                  src={reason.icon} 
                  alt="service icon" 
                  className="h-6 w-6 mr-2" 
                />
                <span className="text-xl">{reason.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
