import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { trustedPartners } from "../../../data/trusted_partners";

const FeaturedClients = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-[#fafcfe]">
      <div className="py-[60px] lg:py-[144px] container">
        <div>
          <div className="relative">
            <h2 data-aos="fade-up" className=" text-secondary-800 text-[36px] lg:text-[64px] font-semibold pb-[24px] lg:pb-[48px]">
              Trusted Partners
            </h2>
          </div>
          <div className="mt-[16px] lg:mt-[26px] grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-6 lg:gap-[40px]">
            {trustedPartners.map((partnerImg) => (
              <div className="feature_img_hover_styles" key={partnerImg.id}>
                <img className="px-5 lg:p-10" src={partnerImg.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedClients;
