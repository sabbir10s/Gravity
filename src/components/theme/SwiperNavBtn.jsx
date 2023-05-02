import { useSwiper } from "swiper/react";

const SwiperNavBtn = () => {
  const swiper = useSwiper();
  return (
    <div className=" space-x-4 text-center mt-4">
      <button className="bg-primary-800 hover:bg-primary-600 py-1 px-4 rounded-3xl text-white" onClick={() => swiper.slidePrev()}>
        Prev
      </button>
      <button className="bg-primary-800 hover:bg-primary-600 py-1 px-4 rounded-3xl text-white" onClick={() => swiper.slideNext()}>
        Next
      </button>
    </div>
  );
};

export default SwiperNavBtn;
