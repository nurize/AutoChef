import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import reviews from '../data/reviews';

const SwiperSlider = () => {
  return (
    <div className="relative h-full bg-gray-900 text-white py-16 lg:px-16 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(${require('../assets/Hero-bg-Image.png')})` }}>
      <Swiper
        style={{
          '--swiper-pagination-color': '#f11',
        }}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="box-border text-lg py-10 px-6 sm:px-10 md:px-16">
            <div className="flex flex-col md:flex-row justify-center items-center mb-5">
              <img
                src={review.image}
                alt="Car Engine"
                className="w-full md:w-[322px] h-[354px] object-cover rounded-lg mb-4 md:mb-0 md:mr-10"
                loading='lazy'
              />
              <div className="max-w-[400px] text-center md:text-left">
                <p className="text-base sm:text-lg md:text-xl">{review.text}</p>
                <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">{review.name}</h3>
                <p className="text-base sm:text-lg md:text-xl">{review.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
