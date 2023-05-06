import { InlineWidget } from "react-calendly";

const Calender = () => {
  return (
    <div className="bg-[#f0f5fc]">
      <div className="container py-[44px] lg:py-[144px]">
        <h2 className="text-center text-[24px] md:text-[40px] lg:text-[64px] font-bold">
          Let’s talk about your
          <br />
          brand with a purpose.
        </h2>
        <p className="text-center text-[16px] md:text-[20px]">
          Discover the power of purposeful branding with Gravity - book a meeting with us today.
        </p>

        <div className="calender">
          <InlineWidget styles={{ overflowY: "hidden", height: "700px" }} url="https://calendly.com/gravityltd/30-minute-metting" />
        </div>
      </div>
    </div>
  );
};

export default Calender;
