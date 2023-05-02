import eximBank from "../../../assets/img/exim bank logo.png";
import ai2 from "../../../assets/img/a2i.png";
import chew from "../../../assets/img/chew.png";
import may from "../../../assets/img/may.png";
import bosphorus from "../../../assets/img/bosphorus.png";
import tappware from "../../../assets/img/tappware.png";
import jobhirehub from "../../../assets/img/jobhirehub.png";
import streamlare from "../../../assets/img/streamlare.png";

const FeaturedClients = () => {
  return (
    <div className="bg-[#fafcfe]">
      <div className="py-[60px] lg:py-[144px] container">
        <div>
          <div className="relative">
            <h2 className=" text-secondary-800 text-[36px] lg:text-[64px] font-semibold pb-[24px] lg:pb-[48px]">Trusted Partner</h2>
          </div>
          <div className="mt-[16px] lg:mt-[26px] grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-6 lg:gap-[40px]">
            <div className="feature_img_hover_styles">
              <img className=" w-[130px] lg:w-[200px] p-4" src={eximBank} alt="" />
            </div>
            <div className="feature_img_hover_styles">
              <img className=" w-[130px] lg:w-[200px] p-4" src={ai2} alt="" />
            </div>
            <div className="feature_img_hover_styles">
              <img className=" w-[130px] lg:w-[200px] p-4" src={chew} alt="" />
            </div>
            <div className="feature_img_hover_styles">
              <img className=" w-[130px] lg:w-[200px] p-4" src={may} alt="" />
            </div>
            <div className="feature_img_hover_styles">
              <img className=" w-[130px] lg:w-[200px] p-4" src={bosphorus} alt="" />
            </div>
            <div className="feature_img_hover_styles">
              <img className=" w-[130px] lg:w-[200px] p-4" src={tappware} alt="" />
            </div>
            <div className="feature_img_hover_styles">
              <img className=" w-[130px] lg:w-[200px] p-4" src={jobhirehub} alt="" />
            </div>
            <div className="feature_img_hover_styles">
              <img className=" w-[130px] lg:w-[200px] p-4" src={streamlare} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedClients;
