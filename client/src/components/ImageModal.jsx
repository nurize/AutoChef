import React, { useEffect, useState, useRef } from 'react';

const ImageModal = ({ isOpen, image, onClose, onPrevious, onNext }) => {
  const [isLoading, setIsLoading] = useState(true); // State to track image loading
  const [hasError, setHasError] = useState(false); // State to track image loading errors
  const touchStartXRef = useRef(0); // Ref to store the initial touch position
  const imageRef = useRef(null); // Ref for the image element

  // Effect to handle keyboard navigation and closing modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose(); // Close modal on 'Escape' key
      } else if (e.key === 'ArrowLeft') {
        onPrevious(); // Show previous image on 'ArrowLeft' key
      } else if (e.key === 'ArrowRight') {
        onNext(); // Show next image on 'ArrowRight' key
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrevious, onNext]);

  // Effect to handle image loading and errors
  useEffect(() => {
    if (imageRef.current) {
      const handleLoad = () => setIsLoading(false);
      const handleError = () => {
        setIsLoading(false);
        setHasError(true);
      };

      const img = imageRef.current;
      img.addEventListener('load', handleLoad);
      img.addEventListener('error', handleError);

      return () => {
        img.removeEventListener('load', handleLoad);
        img.removeEventListener('error', handleError);
      };
    }
  }, [image]);

  // Handle touch gestures for navigation
  const handleTouchStart = (e) => {
    e.stopPropagation();
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    e.stopPropagation();
    const touchEndX = e.changedTouches[0].clientX;

    if (touchStartXRef.current - touchEndX > 50) {
      onNext(); // Swipe left to show next image
    }

    if (touchStartXRef.current - touchEndX < -50) {
      onPrevious(); // Swipe right to show previous image
    }
  };

  if (!isOpen) return null; // Return null if modal is not open

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose} // Close modal on overlay click
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Button to navigate to the previous image */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrevious(); }}
        className="absolute left-5 text-white text-2xl p-5"
      >
        &#8249;
      </button>
      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="loader">Loading...</div>
        </div>
      )}
      {/* Error message or image */}
      {hasError ? (
        <div className="text-white text-2xl">Failed to load image</div>
      ) : (
        <img 
          ref={imageRef}
          src={image} 
          alt="Selected item" 
          className={`max-w-full max-h-full object-contain transition-transform duration-500 transform p-10 ${isLoading ? 'hidden' : ''}`}
          onClick={(e) => e.stopPropagation()}
          loading="lazy"
        />
      )}
      {/* Button to navigate to the next image */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-5 text-white text-2xl p-5"
      >
        &#8250;
      </button>
      {/* Button to close the modal */}
      <button
        className="absolute top-5 right-5 text-white text-2xl"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
      >
        &times;
      </button>
    </div>
  );
};

export default ImageModal;
