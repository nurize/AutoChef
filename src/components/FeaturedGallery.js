import React, { useState } from 'react';
import Slider from 'react-slick';
import gallery from '../data/gallery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const featuredGallery = gallery.slice(0, 6);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    arrows: false,
    customPaging: (i) => (
      <div className="w-full h-[6px] bg-white m-7 "></div>
    ),
    dotsClass: 'slick-dots custom-dots',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: '0',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode: true,
          centerPadding: '0',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode: true,
          centerPadding: '0',
        },
      },
    ],
    afterChange: (index) => {
      if (selectedIndex === null) {
        setSelectedIndex(null);
      }
    },
  };

  return (
    <div className="container mx-auto px-2 md:px-4 pt-10 pb-16">
      <Slider {...settings}>
        {featuredGallery.map((image, index) => (
          <div key={index} className="px-2">
            <div className="relative overflow-hidden rounded-3xl shadow-lg">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 sm:h-80 2xl:h-96 object-cover transition-transform duration-500 transform hover:scale-110 cursor-pointer"
                onClick={() => setSelectedIndex(index)}
              />
            </div>
          </div>
        ))}
      </Slider>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <button
            onClick={() => setSelectedIndex((selectedIndex - 1 + gallery.length) % gallery.length)}
            className="absolute left-5 text-white text-2xl p-5 z-50"
          >
            &#8249;
          </button>
          <img
            src={gallery[selectedIndex]}
            alt={`Selected image ${selectedIndex + 1}`}
            className="max-w-full max-h-full object-contain transition-transform duration-500 transform p-10"
            onClick={() => setSelectedIndex(null)}
          />
          <button
            onClick={() => setSelectedIndex((selectedIndex + 1) % gallery.length)}
            className="absolute right-5 text-white text-2xl p-5 z-50"
          >
            &#8250;
          </button>
          <button
            className="absolute top-5 right-5 text-white text-2xl z-50"
            onClick={() => setSelectedIndex(null)}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedGallery;
