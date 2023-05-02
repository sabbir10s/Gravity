import { useSwiper } from "swiper/react";

const SwiperNavBtn = () => {
  const swiper = useSwiper();

  return (
    <div className="space-x-4 text-right pb-2 pt-6">
      <button className="bg-white shadow-custom_secondary hover:shadow-custom group py-1 px-4 rounded-3xl" onClick={() => swiper.slidePrev()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 inline-block group-hover:text-primary-800"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </button>
      <button className="bg-white shadow-custom_secondary hover:shadow-custom group py-1 px-4 rounded-3xl" onClick={() => swiper.slideNext()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 inline-block group-hover:text-primary-800"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </div>
  );
};

export default SwiperNavBtn;
