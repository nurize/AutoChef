import React, { useState, useCallback } from 'react';
import gallery from '../data/gallery';
import ImageModal from './ImageModal';
import classNames from 'classnames';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleImageClick = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handlePrevious = useCallback(() => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + gallery.length) % gallery.length);
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % gallery.length);
  }, []);

  return (
    <>
      <div className="column-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-1">
        {gallery.map((image, index) => (
          <div
            key={index}
            className={classNames('relative overflow-hidden mb-1', {
              'colspan-2 rowspan-2': index % 3 === 2,
            })}
            onClick={() => handleImageClick(index)}
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

export default React.memo(Gallery);
