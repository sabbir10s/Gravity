// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

import slider1 from "../../../assets/aboutslide/slider (1).png";
import slider2 from "../../../assets/aboutslide/slider (2).png";
import slider3 from "../../../assets/aboutslide/slider (3).png";
import slider4 from "../../../assets/aboutslide/slider (4).png";
import slider5 from "../../../assets/aboutslide/slider (5).png";
import slider6 from "../../../assets/aboutslide/slider (6).png";

const AboutSlide = () => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        rewind={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          2560: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <div className="about_slide">
            <img loading="lazy" className="w-full h-full object-fill object-center" src={slider1} alt="slider1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="about_slide">
            <img loading="lazy" className="w-full h-full object-fill object-center" src={slider2} alt="slider2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="about_slide">
            <img loading="lazy" className="w-full h-full object-fill object-center" src={slider3} alt="slider3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="about_slide">
            <img loading="lazy" className="w-full h-full object-fill object-center" src={slider4} alt="slider1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="about_slide">
            <img loading="lazy" className="w-full h-full object-fill object-center" src={slider5} alt="slider2" />
          </div>
        </SwiperSlide>
        {/*   <SwiperSlide>
          <div className="w-full h-[230px] lg:w-[616px] 2xl:w-full lg:h-[517px] 2xl:h-[700px]">
            <img loading="lazy" className="w-full h-full object-fill object-center" src={slider6} alt="slider3" />
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default AboutSlide;
