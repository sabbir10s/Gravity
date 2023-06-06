import { reviews } from "../../../data/ReviewData";

import review_bg from "../../../assets/img/review.svg";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay, Navigation, A11y } from "swiper";
import SwiperNavBtn from "../../theme/SwiperNavBtn";
import AOS from "aos";
import { useEffect, useRef } from "react";

const Review = () => {
  const swiperRef = useRef(null);
  /*  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  }; */

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
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
          <h1 data-aos="fade-up" className="lg:w-2/3 text-secondary-800 text-[32px] lg:text-[64px] font-semibold">
            What others are saying
          </h1>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-aos="fade-up"
            className="lg:w-1/2 mt-[24px] lg:mt-0 relative cursor-pointer"
          >
            <div className=" absolute -top-4 lg:-top-20 lg:-left-10 w-2/5 md:w-full">
              <img src={review_bg} alt="" />
            </div>
            <Swiper
              ref={swiperRef}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay, Navigation, A11y]}
              className=""
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <p className="font-medium lg:font-normal p-2 text-[16px] md:text-[20px] xl:text-[28px] h-[170px] lg:h-[230px]">
                        <q>{review.message}</q>
                      </p>
                    </div>
                    <div className="pl-4">
                      <div>
                        <h3 className="font-semibold text-[16px] md:text-[20px] lg:text-[24px]">{review?.client?.name},</h3>
                        <p className="text-primary-800 font-medium text-[14px] lg:text-[20px]">{review?.client?.profession}</p>
                      </div>
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
