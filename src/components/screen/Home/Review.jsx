import { reviews } from "../../../data/ReviewData";

import review_bg from "../../../assets/img/review.svg";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Navigation, A11y } from "swiper";
import SwiperNavBtn from "../../theme/SwiperNavBtn";
import AOS from "aos";
import { useEffect, useState } from "react";

const Review = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-[#fafcfe]">
      <div className="container relative py-[60px] lg:py-[144px] ">
        <div className="lg:flex gap-10 justify-between">
          <h1 data-aos="zoom-in-right" className="lg:w-1/3 text-secondary-800 text-[32px] lg:text-[64px] font-semibold">
            What others are saying
          </h1>
          <div data-aos="zoom-in-left" className="lg:w-1/2 mt-[24px] lg:mt-0 relative">
            <div className=" absolute -top-4 lg:-top-20 lg:-left-10 w-2/5 md:w-full">
              <img src={review_bg} alt="" />
            </div>
            <Swiper loop={true} onSlideChange={handleSlideChange} modules={[Navigation, A11y]} className="">
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div>
                    <p className=" font-medium lg:font-normal p-2 text-[16px] lg:text-[31px] text-justify">
                      <q>{review.message}</q>
                    </p>
                    <div className="flex items-center justify-between mt-[40px] ml-2">
                      <div>
                        <h3 className="font-semibold text-[16px] lg:text-[24px]">{review?.client?.name},</h3>
                        <p className="text-primary-800 font-medium text-[14px] lg:text-[20px]">{review?.client?.profession}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SwiperNavBtn isPrev={activeSlide === 0} isNext={activeSlide === reviews.length - 1} />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
