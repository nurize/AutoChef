import React, { useState, useCallback, useEffect } from 'react';
import gallery from '../data/gallery';
import ImageModal from './ImageModal';
import ImageGrid from './ImageGrid';
import Pagination from './Pagination';

const IMAGES_PER_PAGE = 10;

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(gallery.length / IMAGES_PER_PAGE);

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

  const handlePageChange = useCallback((page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  }, [totalPages]);

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

  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const paginatedImages = gallery.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  return (
    <>
      <ImageGrid images={paginatedImages} onImageClick={handleImageClick} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
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
