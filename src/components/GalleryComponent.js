import { useState } from 'react';
import gallery from '../data/gallery';

const GalleryComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    setSelectedIndex((selectedIndex - 1 + gallery.length) % gallery.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((selectedIndex + 1) % gallery.length);
  };

  return (
    <>
      <div className="column-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 pt-10 p-2 gap-1">
        {gallery.map((image, index) => (
          <div 
            key={index} 
            className={`relative overflow-hidden mb-1 ${
              (index + 1) % 3 === 2 ? 'col-span-2 row-span-2' : ''
            }`}
            onClick={() => handleImageClick(index)}
          >
            <img 
              src={image} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110 cursor-pointer"
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={handleCloseModal}>
          <button onClick={handlePrevious} className="absolute left-5 text-white text-2xl p-5">
            &#8249;
          </button>
          <img 
            src={gallery[selectedIndex]} 
            alt={`Selected image ${selectedIndex + 1}`} 
            className="w-full h-full p-5 object-contain"
            loading='lazy'
          />
          <button onClick={handleNext} className="absolute right-5 text-white text-2xl p-5">
            &#8250;
          </button>
          <button className="absolute top-5 right-5 text-white text-2xl" onClick={handleCloseModal}>
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default GalleryComponent;
