import React, { useState } from 'react';
import Slider from 'react-slick';
import gallery from '../data/gallery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageModal from './ImageModal';

const FeaturedGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [centerIndex, setCenterIndex] = useState(0);
  const featuredGallery = gallery.slice(0, 6);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: '0',
    arrows: false,
    customPaging: (i) => (
      <div
        className={`w-full h-[6px] ${
          i === centerIndex ? 'bg-red-600' : 'bg-gray-200'
        } m-7 transition-colors duration-500`}
      ></div>
    ),
    dotsClass: 'slick-dots custom-dots',
    beforeChange: (oldIndex, newIndex) => {
      setCenterIndex(newIndex);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-2 md:px-4 pt-10 pb-16">
      <Slider {...settings}>
        {featuredGallery.map((image, index) => (
          <div key={index} className="px-2 transition-transform duration-500 ease-in-out transform hover:scale-105">
            <div className="relative overflow-hidden rounded-3xl shadow-lg">
              <img
                src={image}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-64 sm:h-80 2xl:h-96 object-cover transition-transform duration-500 transform hover:scale-110 cursor-pointer"
                onClick={() => setSelectedIndex(index)}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </Slider>

      <ImageModal
        isOpen={selectedIndex !== null}
        image={gallery[selectedIndex]}
        onClose={() => setSelectedIndex(null)}
        onPrevious={() => setSelectedIndex((selectedIndex - 1 + gallery.length) % gallery.length)}
        onNext={() => setSelectedIndex((selectedIndex + 1) % gallery.length)}
      />
    </div>
  );
};

export default FeaturedGallery;
