import jobhirehub from "../../../assets/img/jobhirehub.png";
import { reviews } from "../../../data/ReviewData";
import "../../../styles/review.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Navigation, A11y } from "swiper";
import SwiperNavBtn from "../../theme/SwiperNavBtn";

const Review = () => {
  return (
    <div className="bg-[#fafcfe]">
      <div className="container py-12 lg:py-[100px] relative ">
        <div className="lg:flex gap-10 backgroundImage justify-between">
          <h2 className="lg:w-1/3 text-secondary-800 text-[34px]  md:text-[36px] lg:text-[64px] font-semibold">What others are saying</h2>
          <div className="lg:w-1/2 mt-[40px] lg:mt-0 relative bg-primary-50 p-3 rounded shadow-custom_secondary lg:bg-transparent lg:shadow-transparent">
            <Swiper modules={[Navigation, A11y]} className="">
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div>
                    <p className=" text-[16px] lg:text-[24px]">
                      <q>
                        {" "}
                        <i>{review.message}</i>{" "}
                      </q>
                    </p>
                    <div className="flex items-center justify-between mt-[40px]">
                      <div>
                        <h3 className="font-semibold text-[16px] lg:text-[20px]">{review?.client?.name},</h3>
                        <p className="text-primary-800 font-medium text-[14px] lg:text-[16px]">{review?.client?.profession}</p>
                      </div>
                      <img className="w-[140px] lg:w-[180px]" src={jobhirehub} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SwiperNavBtn />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
