import { Link } from "react-router-dom";
import arrow1 from "../../assets/icon/arrow.png";
import arrow2 from "../../assets/icon/arrow2.png";
import facebook from "../../assets/icon/facebook.png";
import linkedIn from "../../assets/icon/linkedIn.png";
import twitter from "../../assets/icon/twitter.png";
import logo from "../../assets/img/full logo.png";
import "../../styles/Footer.css";
import { routeLinks } from "../../data/RouteLink";
import FooterButtonLink from "../theme/FooterButtonLink";
const Footer = () => {
  return (
    <div className="bg-secondary-800 text-white">
      <div className="pt-[60px]">
        <div className="flex items-center justify-between container">
          <div>
            <h3 className="text-[20px] lg:text-[30px]">Have a project in mind?</h3>
            <button className="text-white group">
              <h2 className="text-[24px] lg:text-[50px] font-semibold">Let’s connect!</h2>
              <div className="bg-white w-full group-hover:w-0 duration-300 h-[2px] mx-auto"></div>
            </button>
          </div>

          <div className="relative group">
            <Link to="/contact">
              <div className="progress-bar w-16 lg:w-[120px] h-16 lg:h-[120px] rounded-[50%] flex items-center justify-center relative z-10">
                <div className="relative group-hover:animate-pulse  ">
                  <img className="" src={arrow1} alt="" />
                  <img className="absolute top-[3px] left-0 w-[35px] h-[28px] hidden group-hover:inline-block" src={arrow2} alt="" />
                </div>
              </div>
            </Link>
            <div className="spinner_footer w-16 lg:w-[120px] h-16 lg:h-[120px] absolute top-0 z-0 hidden group-hover:block">
              <div className="spinner1_footer w-16 lg:w-[120px] h-16 lg:h-[120px]"></div>
            </div>
          </div>
        </div>

        <div className="mt-[40px] lg:mt-[65px] container space-y-4">
          <div className="space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 -mt-1 inline-block text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>

            <button className="text-white group">
              <Link className="text-xl" to="mailto:hello@gravityltd.co">
                hello@gravityltd.co
              </Link>
              <div className="bg-white/20 w-full h-[1px] mx-auto">
                <div className="bg-white w-0 group-hover:w-full duration-300 h-[1px] mx-auto"></div>
              </div>
            </button>
          </div>
          <div className="space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 -mt-1 inline-block text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>

            <button className="text-white group">
              <Link className="text-xl" to="tel:09638945755">
                09638-945755
              </Link>
              <div className="bg-white/20 w-full h-[1px] mx-auto">
                <div className="bg-white w-0 group-hover:w-full duration-300 h-[1px] mx-auto"></div>
              </div>
            </button>
          </div>
        </div>
        <div className="py-[50px]">
          <div className="h-[0.5px] bg-white/5"></div>
        </div>

        <div className="container lg:flex justify-between">
          <div className="text-[17px]">
            <img className="cursor-pointer" src={logo} alt="" />
            <p className="mt-[32px]">© Gravity 2023. All rights reserved.</p>
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
                <img className="hover:animate-pulse cursor-pointer hover:scale-110 transition duration-150" src={facebook} alt="" />
                <img className="hover:animate-pulse cursor-pointer hover:scale-110 transition duration-150" src={linkedIn} alt="" />
                <img className="hover:animate-pulse cursor-pointer hover:scale-110 transition duration-150" src={twitter} alt="" />
              </div>
            </div>
          </div>

          <div>
            <h2 className=" text-white/40 text-[16px] uppercase mt-[32px] lg:mt-0 lg:mb-2">Links</h2>
            <div className="flex flex-col gap-[12px] text-[20px] pb-[40px] lg:pb-[60px] mt-[32px] lg:mt-0">
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
