import React, { useEffect, useState, useRef } from 'react';

const ImageModal = ({ isOpen, image, onClose, onPrevious, onNext }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const touchStartXRef = useRef(0);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrevious();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrevious, onNext]);

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

  const handleTouchStart = (e) => {
    e.stopPropagation();
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    e.stopPropagation();
    const touchEndX = e.changedTouches[0].clientX;

    if (touchStartXRef.current - touchEndX > 50) {
      onNext();
    }

    if (touchStartXRef.current - touchEndX < -50) {
      onPrevious();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={onClose} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <button onClick={(e) => { e.stopPropagation(); onPrevious(); }} className="absolute left-5 text-white text-2xl p-5">
        &#8249;
      </button>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="loader">Loading...</div>
        </div>
      )}
      {hasError ? (
        <div className="text-white text-2xl">Failed to load image</div>
      ) : (
        <img 
          ref={imageRef}
          src={image} 
          alt="Selected image" 
          className={`max-w-full max-h-full object-contain transition-transform duration-500 transform p-10 ${isLoading ? 'hidden' : ''}`}
          onClick={(e) => e.stopPropagation()}
          loading="lazy"
        />
      )}
      <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-5 text-white text-2xl p-5">
        &#8250;
      </button>
      <button className="absolute top-5 right-5 text-white text-2xl" onClick={(e) => { e.stopPropagation(); onClose(); }}>
        &times;
      </button>
    </div>
  );
};

export default ImageModal;
