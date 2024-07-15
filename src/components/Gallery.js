import React, { useState } from 'react';
import gallery from '../data/gallery';
import ImageModal from './ImageModal';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  const handlePrevious = () => {
    setSelectedIndex((selectedIndex - 1 + gallery.length) % gallery.length);
  };

  const handleNext = () => {
    setSelectedIndex((selectedIndex + 1) % gallery.length);
  };

  return (
    <>
      <div className="column-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-1">
        {gallery.map((image, index) => (
          <div 
            key={index} 
            className={`relative overflow-hidden mb-1 ${index % 3 === 2 ? 'colspan-2 rowspan-2' : ''}`}
            onClick={() => handleImageClick(index)}
          >
            <img 
              src={image} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110 cursor-pointer"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <ImageModal 
        isOpen={selectedIndex !== null} 
        image={gallery[selectedIndex]} 
        onClose={handleCloseModal} 
        onPrevious={handlePrevious} 
        onNext={handleNext} 
      />
    </>
  );
};

export default Gallery;
