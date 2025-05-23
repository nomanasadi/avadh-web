// src/components/HeroSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSlider = () => {
  return (
    <div className="w-full h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        <SwiperSlide>
          <img
            src="images/slide-1.webp"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="images/slide-2.webp"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="images/slide-3.webp"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
