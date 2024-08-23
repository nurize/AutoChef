import React, { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ImageModal from './ImageModal';
import ImageGrid from './ImageGrid';
import Pagination from './Pagination';

const IMAGES_PER_PAGE = 10;

const Gallery = () => {
  const location = useLocation();
  const isGalleryPage = location.pathname === '/gallery';
  
  // State to manage the images fetched from the server
  const [images, setImages] = useState([]);
  
  // State to manage the currently selected image index
  const [selectedIndex, setSelectedIndex] = useState(null);
  
  // State to manage the current page number for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages based on the number of images and images per page
  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);

  // Fetch images from the server when the component mounts
  useEffect(() => {
    fetch('/api/gallery-images')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching gallery images:', error));
  }, []);

  // Handle image click to open the modal
  const handleImageClick = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  // Handle modal close
  const handleCloseModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Handle the 'previous' button click in the modal
  const handlePrevious = useCallback(() => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images]);

  // Handle the 'next' button click in the modal
  const handleNext = useCallback(() => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images]);

  // Handle page changes in the pagination component
  const handlePageChange = useCallback((page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  }, [totalPages]);

  // Handle keyboard events for pagination
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        handlePageChange(currentPage + 1);
      } else if (event.key === 'ArrowLeft') {
        handlePageChange(currentPage - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage, handlePageChange]);

  // Determine which images to show based on whether the user is on the gallery page or another page
  const imagesToShow = isGalleryPage 
    ? images 
    : images.slice((currentPage - 1) * IMAGES_PER_PAGE, currentPage * IMAGES_PER_PAGE);

  return (
    <>
      {/* Display the grid of images */}
      <ImageGrid images={imagesToShow} onImageClick={handleImageClick} />

      {/* Display pagination controls only if not on the gallery page */}
      {!isGalleryPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      {/* Display the image modal if an image is selected */}
      {selectedIndex !== null && (
        <ImageModal
          isOpen={selectedIndex !== null}
          image={images[selectedIndex]}
          onClose={handleCloseModal}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </>
  );
};

export default React.memo(Gallery);
