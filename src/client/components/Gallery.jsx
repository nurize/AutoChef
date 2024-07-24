import React, { useState, useCallback } from 'react';
import gallery from '../data/gallery';
import ImageModal from './ImageModal';
import classNames from 'classnames';

const Gallery = () => {
  // State to keep track of the currently selected image index
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Callback function to handle when an image is clicked
  const handleImageClick = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  // Callback function to close the modal
  const handleCloseModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Callback function to go to the previous image in the modal
  const handlePrevious = useCallback(() => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + gallery.length) % gallery.length);
  }, []);

  // Callback function to go to the next image in the modal
  const handleNext = useCallback(() => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % gallery.length);
  }, []);

  return (
    <>
      {/* Grid layout for the image gallery */}
      <div className="column-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-1">
        {gallery.map((image, index) => (
          <div
            key={index}
            className={classNames('relative overflow-hidden mb-1', {
              'colspan-2 rowspan-2': index % 3 === 2, // Larger grid item for every third image
            })}
            onClick={() => handleImageClick(index)} // Open modal on image click
          >
            <img
              src={image}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110 cursor-pointer"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Modal for displaying the selected image */}
      {selectedIndex !== null && (
        <ImageModal
          isOpen={selectedIndex !== null}
          image={gallery[selectedIndex]}
          onClose={handleCloseModal}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </>
  );
};

// Use React.memo to prevent unnecessary re-renders of the Gallery component
export default React.memo(Gallery);
