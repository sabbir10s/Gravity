/* eslint-disable react/prop-types */
import { useSwiper } from "swiper/react";
import { BsArrowUp } from "react-icons/bs";

const SwiperNavBtn = () => {
  const swiper = useSwiper();

  return (
    <div className=" space-x-1 absolute bottom-0 right-2 z-10 bg-[#FAFCFE]">
      <button
        className={` group py-1 px-4 rounded-3xl `}
        onClick={() => swiper.slidePrev()}
        // disabled={isPrev}
      >
        <BsArrowUp
          className={`text-3xl lg:text-5xl -rotate-90 inline-block text-[#787A90] group-hover:text-primary-800 duration-200 transition-colors `}
        />
      </button>
      <button
        className={` group py-1 px-4 rounded-3xl `}
        onClick={() => swiper.slideNext()}
        // disabled={isNext}
      >
        <BsArrowUp
          className={`text-3xl lg:text-5xl rotate-90 inline-block text-[#787A90] group-hover:text-primary-800 duration-200 transition-colors`}
        />
      </button>
    </div>
  );
};

export default SwiperNavBtn;
