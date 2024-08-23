import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

const LazyImage = ({ src, alt, isUserGallery }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative overflow-hidden group">
      <img
        src={src}
        alt={alt}
        className={classNames(
          isUserGallery ? "h-full" : "h-52  group-hover:opacity-75",
          "w-full object-cover bg-slate-100 group-hover:scale-110 transition-transform duration-500 transform",
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-95",
          error && "opacity-50"
        )}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
      {!loaded && !error && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-100 animate-pulse">
          <div className="h-8 w-8 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-200 text-red-600">
          Failed to load
        </div>
      )}
    </div>
  );
};

const ImageGrid = ({ images, onImageClick, onDeleteClick }) => {
  const location = useLocation();
  const isUserGallery = location.pathname === '/gallery';

  const gridClass = isUserGallery
    ? "columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-[3px] xl:gap-1"
    : "grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-[90%] gap-3 mx-auto";

  const imageContainerClass = isUserGallery ? "rounded-lg mb-[2px] xl:mb-1" : "rounded-xl";

  return (
    <div className={classNames(gridClass, "p-[1px]")}>
      <TransitionGroup component={null}>
        {images.map((image, index) => (
          <CSSTransition
            key={index}
            timeout={300}
            classNames="fade"
          >
            <div
              className={classNames(imageContainerClass, "relative overflow-hidden group")}
              onClick={() => onImageClick(index)}
            >
              <LazyImage
                src={image}
                alt={`Gallery item ${index + 1}`}
                isUserGallery={isUserGallery}
              />
              {!isUserGallery && (
                <button
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteClick(index);
                  }}
                >
                  Delete
                </button>
              )}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default ImageGrid;
