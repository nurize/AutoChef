import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames';

const ImageGrid = ({ images, onImageClick }) => (
  <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-[90%] gap-3 mx-auto">
    <TransitionGroup component={null}>
      {images.map((image, index) => (
        <CSSTransition
          key={index}
          timeout={300}
          classNames="fade"
        >
          <div
            className={classNames('relative rounded-xl overflow-hidden mb-3')}
            onClick={() => onImageClick(index)}
          >
            <img
              src={image}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-52 object-cover transition-transform duration-500 transform hover:scale-110 cursor-pointer"
              loading="lazy"
            />
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  </div>
);

export default ImageGrid;
