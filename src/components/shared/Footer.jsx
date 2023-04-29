import { Link } from "react-router-dom";
import arrow from "../../assets/icon/arrow.png";
import facebook from "../../assets/icon/facebook.png";
import linkedIn from "../../assets/icon/linkedIn.png";
import twitter from "../../assets/icon/twitter.png";
import logo from "../../assets/img/full logo.png";
const Footer = () => {
  return (
    <div className="bg-secondary-800 text-white">
      <div className="pt-[60px]">
        <div className="flex items-center justify-between container">
          <div>
            <h3 className="text-[20px] lg:text-[30px]">Have a project in mind?</h3>
            <h2 className="text-[24px] lg:text-[45px] font-semibold">Let’s connect!</h2>
            <div className="h-[3px] bg-white w-[150px] lg:w-[280px]"></div>
          </div>
          <a href="#">
            <img src={arrow} alt="" />
          </a>
        </div>

        <div className="mt-[40px] lg:mt-[65px] lg:flex justify-between container">
          <div>
            <p className=" text-white/40 text-[16px] lg:text-[20px] uppercase">Email</p>
            <h4 className="text-[20px] lg:text-[30px] lg:mt-[10px]">hello@gravityltd.co</h4>
          </div>
          <div className="mt-[20px] lg:mt-0">
            <p className=" text-white/40 text-[16px] lg:text-[20px] uppercase lg:text-end">Phone Number</p>
            <h4 className="text-[20px] lg:text-[30px] lg:mt-[10px] lg:text-end">09638-945755</h4>
          </div>
        </div>
        <div className="py-[50px]">
          <div className="h-[0.5px] bg-white/20"></div>
        </div>

        <div className="container lg:flex justify-between">
          <div className="text-[17px]">
            <img src={logo} alt="" />
            <p className="mt-[32px]">© Gravity 2023. All rights reserved.</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <p className=" text-white/40 text-[16px] uppercase mt-[32px] lg:mt-0">Address</p>
            <p className=" text-[20px] mt-[10px]">
              Uttara, Sector- 4,
              <br />
              Dhaka, Bangladesh
            </p>
            <div className="mt-[32px]">
              <p className=" text-white/40 text-[16px] uppercase ">Follow</p>
              <div className="flex items-center gap-[30px] mt-[10px]">
                <img src={facebook} alt="" />
                <img src={linkedIn} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[12px] text-[20px] pb-[40px] lg:pb-[60px] mt-[32px] lg:mt-0">
            <Link to="/">Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
