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
    <div className="pt-8 lg:pt-16">
      <div className=" ">
        <div className="relative">
          <h2 className=" container text-[36px] lg:text-[64px] pb-6 md:py-6 lg:py-12 text-secondary-800 font-semibold z-30">Featured Clients</h2>
          <h2 className=" z-0 hidden lg:block lg:text-[146px] text-secondary-800/5 font-bold absolute -top-12 left-0 tracking-widest w-full">
            Featured Clients
          </h2>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-[40px] pb-8 lg:pb-16">
          <div className="feature_img_hover_styles">
            <img src={eximBank} alt="" />
          </div>
          <div className="feature_img_hover_styles">
            <img src={ai2} alt="" />
          </div>
          <div className="feature_img_hover_styles">
            <img className="w-[250px]" src={chew} alt="" />
          </div>
          <div className="feature_img_hover_styles">
            <img className="w-[250px]" src={may} alt="" />
          </div>
          <div className="feature_img_hover_styles">
            <img src={bosphorus} alt="" />
          </div>
          <div className="feature_img_hover_styles">
            <img src={tappware} alt="" />
          </div>
          <div className="feature_img_hover_styles">
            <img src={jobhirehub} alt="" />
          </div>
          <div className="feature_img_hover_styles">
            <img src={streamlare} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedClients;
