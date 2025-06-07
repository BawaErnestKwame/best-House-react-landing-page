import React from 'react';
import name1 from '../assets/name1.jpeg';
import name2 from '../assets/name2.jpeg';
import name3 from '../assets/name3.jpeg';
import name4 from '../assets/name4.jpeg';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  { image: name1, name: 'Bawa Ernest' },
  { image: name2, name: 'Bawa Ernest' },
  { image: name3, name: 'Bawa Ernest' },
  { image: name4, name: 'Bawa Ernest' },
  { image: name1, name: 'Bawa Ernest' },
  { image: name3, name: 'Bawa Ernest' },
];

const TestimonialsSection = () => {
  return (
    <div className="px-4 md:px-8 lg:px-24 mt-12 mb-12">
      <h2 className="text-orange-400 font-bold underline text-center">TESTIMONIAL</h2>
      <h1 className="font-bold text-2xl text-center mb-8 mt-4">
        Hear From Your Neighbors, <br /> Why They Chose Us!
      </h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{
          type: '',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="flex gap-4 bg-gray-200 p-4 rounded-2xl w-80 mx-auto">
              <img src={t.image} alt={t.name} className="w-20 h-32 object-cover mt-3" />
              <div className="flex flex-col">
                <DoneOutlineIcon />
                <p className="text-gray-600 mt-1">
                  Needed a quick sale. Dream House delivered an amazing offer, exceeding expectations!
                </p>
                <div className="border-t border-t-gray-900 mt-2">
                  <h3 className="text-blue-900">{t.name}</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSection;
