/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../../styles/Menubar.css";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { RiBehanceLine } from "react-icons/ri";
import { TfiDribbble } from "react-icons/tfi";
import ActiveLink from "../theme/ActiveLink";
const Menubar = ({ visible, handleCloseMenubar }) => {
  const handleCloseModal = (e) => {
    if (e.target.id === "container") handleCloseMenubar();
  };

  if (!visible) {
    return null;
  }

  return (
    <div id="container" onClick={handleCloseModal} className="w-full modal-overlay fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-end">
      <div className="w-full md:w-1/2 lg:w-1/3 bg-white modal-content slide-in">
        <div className="pl-0 md:pl-12 h-screen flex flex-col justify-between">
          <div className="w-full flex justify-end">
            <button
              onClick={handleCloseMenubar}
              className="mt-10 mr-10 lg:m-4 bg-primary-800 hover:bg-secondary-800 w-10 h-10 rounded-full flex justify-center items-center duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mx-auto md:mx-0 w-1/2">
            <ul className="flex flex-col gap-[24px] lg:gap-[30px] text-secondary-800 font-medium text-[24px] lg:text-[32px] ">
              <li onClick={handleCloseMenubar}>
              <ActiveLink to="/"> <span data-hover="Home">Home</span></ActiveLink>
              </li>
              <li onClick={handleCloseMenubar}>
                <ActiveLink to="/service">
                  <span data-hover="Service">Service</span>
                </ActiveLink>
              </li>
              <li onClick={handleCloseMenubar}>
                {" "}
                <ActiveLink to="/about">
                  <span data-hover="About Us">About Us</span>
                </ActiveLink>
              </li>
              <li onClick={handleCloseMenubar}>
                {" "}
                <ActiveLink to="/contact">
                  <span data-hover="Contact Us">Contact Us</span>
                </ActiveLink>
              </li>
            </ul>
          </div>

          <div className="mx-auto md:mx-0 w-1/2">
            <h3 className="text-gray-500 text-[16px]">Lets talk</h3>
            <button className="text-secondary-800 group">
              <span className="text-[20px]">hello@gravityltd.co</span>
              <div className="bg-secondary-800 w-1/4 group-hover:w-full duration-700 h-[2px]"></div>
            </button>
            <div className="flex items-center space-x-4 mt-6 pb-14">
              <Link target="_blank" to="https://www.facebook.com/gravityltd.co/">
                <FiFacebook className="footer_icons2" />
              </Link>
              <Link target="_blank" to="https://www.linkedin.com/company/gravityltd/">
                <FiLinkedin className="footer_icons2" />
              </Link>
              <Link target="_blank" to="https://dribbble.com/gravityltd">
                <TfiDribbble className="footer_icons2" />
              </Link>
              <Link target="_blank" to="https://www.behance.net/gravity-ltd">
                <RiBehanceLine className="footer_icons2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
