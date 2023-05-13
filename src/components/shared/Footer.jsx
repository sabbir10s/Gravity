import { Link } from "react-router-dom";
import logo from "../../assets/img/full-logo.svg";
import "../../styles/Footer.css";
import { routeLinks } from "../../data/RouteLink";
import FooterButtonLink from "../theme/FooterButtonLink";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { RiBehanceLine } from "react-icons/ri";
import { TfiDribbble } from "react-icons/tfi";
import { useEffect } from "react";
import AOS from "aos";
const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-secondary-800 text-white">
      <div className="pt-[60px] lg:pt-[144px] pb-[40px] lg:pb-[80px]">
        <div className="flex items-center justify-between container">
          <div data-aos="fade-up">
            <h3 className="text-[20px] lg:text-[54px]">Have a project in mind?</h3>
            <Link to="/contact">
              {" "}
              <button className="text-white group">
                <h2 className="text-[24px] lg:text-[76px] text-white group-hover:text-link-400 font-semibold duration-300 transition">
                  Let’s connect!
                </h2>
                <div className="bg-link-400 w-0 group-hover:w-full duration-300 h-[1px] mx-auto"></div>
              </button>
            </Link>
          </div>
        </div>

        <div data-aos="fade-up" className="pt-[60px] lg:pt-[120px] container lg:flex items-center justify-between">
          <div>
            <p className="uppercase text-white/40 mb-[12px] lg:mb-[17px] text-[16px] lg:text-[24px]">Email</p>
            <button className="text-white hover:text-link-400 duration-300 transition">
              <Link className="text-[20px] md:text-[30px] lg:text-[40px]" to="mailto:hello@gravityltd.co">
                hello@gravityltd.co
              </Link>
            </button>
          </div>
          <div className="mt-[24px] lg:mt-0 lg:text-end">
            <p className="uppercase text-white/40 mb-[12px] lg:mb-[17px] text-[16px] lg:text-[24px]">Phone</p>
            <button className="text-white hover:text-link-400 duration-300 transition">
              <Link className="text-[20px] md:text-[30px] lg:text-[40px]" to="tel:09638945755">
                09638-945755
              </Link>
            </button>
          </div>
        </div>
        <div className="py-[50px]">
          <div className="h-[0.5px] bg-white/5"></div>
        </div>

        <div data-aos="fade-up" className="container lg:flex justify-between">
          <div className="text-[17px]">
            <Link to="/">
              <img className="cursor-pointer w-[180px] lg:w-[271px]" src={logo} alt="" />
            </Link>
            <p className="mt-[32px] lg:mt-[50px] text-[17px]">© Gravity 2023. All rights reserved.</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <h2 className=" text-white/40 text-[16px] uppercase mt-[32px] lg:mt-0">Address</h2>
            <p className=" text-[20px] mt-[10px]">
              Uttara, Sector- 4,
              <br />
              Dhaka, Bangladesh
            </p>
            <div className="mt-[32px]">
              <p className=" text-white/40 text-[16px] uppercase ">Follow</p>
              <div className="flex items-center gap-[30px] mt-[10px]">
                <Link target="_blank" to="https://www.facebook.com/gravityltd.co/">
                  <FiFacebook className="footer_icons" />
                </Link>
                <Link target="_blank" to="https://www.linkedin.com/company/gravityltd/">
                  <FiLinkedin className="footer_icons" />
                </Link>
                <Link target="_blank" to="https://dribbble.com/gravityltd">
                  <TfiDribbble className="footer_icons" />
                </Link>
                <Link target="_blank" to="https://www.behance.net/gravity-ltd">
                  <RiBehanceLine className="footer_icons" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h2 className=" text-white/40 text-[16px] uppercase mt-[32px] lg:mt-0 lg:mb-2">Links</h2>
            <div className="flex flex-col gap-[12px] text-[20px] mt-[32px] lg:mt-0">
              {routeLinks.map((routes) => (
                <FooterButtonLink key={routes.id} route={routes.route} path_name={routes.path_name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
