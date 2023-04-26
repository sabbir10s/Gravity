// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

import slider1 from "../../../assets/aboutslide/slider1.png";
import slider2 from "../../../assets/aboutslide/slider2.png";
import slider3 from "../../../assets/aboutslide/slider3.png";

const AboutSlide = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        rewind={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <div className="w-[263px] lg:w-[616px] h-[221px] lg:h-[517px]">
            <img loading="lazy" className="w-full h-full object-fill object-center" src={slider1} alt="slider1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[263px] lg:w-[616px] h-[221px] lg:h-[517px]">
            <img loading="lazy" className="w-full h-full object-fill object-center" src={slider2} alt="slider2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[263px] lg:w-[616px] h-[221px] lg:h-[517px]">
            <img loading="lazy" className="w-full h-full object-fill object-center" src={slider3} alt="slider3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[263px] lg:w-[616px] h-[221px] lg:h-[517px]">
            <img loading="lazy" className="w-full h-full object-fill object-center" src={slider1} alt="slider3" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AboutSlide;
