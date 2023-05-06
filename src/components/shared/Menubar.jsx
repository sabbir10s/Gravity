/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../../styles/Menubar.css";
const Menubar = ({ visible, handleCloseMenubar }) => {
  const handleCloseModal = (e) => {
    if (e.target.id === "container") handleCloseMenubar();
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      id="container"
      onClick={handleCloseModal}
      className="w-full modal-overlay z-50 fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-end"
    >
      <div className="w-full md:w-1/2 lg:w-1/3 bg-white modal-content slide-in">
        <div className="pl-0 md:pl-12 h-screen flex flex-col justify-between">
          <div className="w-full flex justify-end">
            <button
              onClick={handleCloseMenubar}
              className="m-5 lg:m-4 bg-primary-600 hover:bg-secondary-800 w-10 h-10 rounded-full flex justify-center items-center duration-300"
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
              <li onClick={handleCloseMenubar} className="flip-animate link">
                <Link to="/">
                  <span data-hover="Home">Home</span>
                </Link>
              </li>
              <li onClick={handleCloseMenubar} className="flip-animate link">
                <Link to="/service">
                  <span data-hover="Service">Service</span>
                </Link>
              </li>
              <li onClick={handleCloseMenubar} className="flip-animate link">
                {" "}
                <Link to="/about">
                  <span data-hover="About Us">About Us</span>
                </Link>
              </li>
              <li onClick={handleCloseMenubar} className="flip-animate link">
                {" "}
                <Link to="/contact">
                  <span data-hover="Contact Us">Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mx-auto md:mx-0 w-1/2">
            <h3 className="text-gray-500 text-[16px]">Lets talk</h3>
            <button className="text-secondary-800 group">
              <span className="text-[20px]">hello@gravityltd.co</span>
              <div className="bg-secondary-800 w-1/4 group-hover:w-full duration-700 h-[2px]"></div>
            </button>
            <div className="flex items-center gap-[30px] mt-6 pb-14">
              <a href="#">
                <svg
                  className="text-primary-600 stroke-secondary-800 hover:stroke-primary-600 duration-500"
                  width="22"
                  height="19"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.1671 1.0306C21.1671 1.0306 20.4618 3.14651 19.152 4.45636C20.7641 14.5321 9.68078 21.8874 1.01562 16.1442C3.23229 16.245 5.44896 15.5397 7.06108 14.1291C2.0232 12.6177 -0.495739 6.67302 2.0232 2.03818C4.23987 4.65787 7.66562 6.16924 11.0914 6.06848C10.1846 1.83666 15.1217 -0.581522 18.1444 2.23969C19.2527 2.23969 21.1671 1.0306 21.1671 1.0306Z"
                    strokeWidth="1.51136"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  className="text-primary-600 stroke-secondary-800 hover:stroke-primary-600 duration-500"
                  width="14"
                  height="22"
                  viewBox="0 0 14 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5452 1.01465H9.52252C8.18639 1.01465 6.90499 1.54542 5.9602 2.49021C5.01542 3.43499 4.48464 4.7164 4.48464 6.05253V9.07525H1.46191V13.1056H4.48464V21.1662H8.51495V13.1056H11.5377L12.5452 9.07525H8.51495V6.05253C8.51495 5.7853 8.6211 5.52902 8.81006 5.34006C8.99901 5.15111 9.2553 5.04495 9.52252 5.04495H12.5452V1.01465Z"
                    strokeWidth="1.51136"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  className="text-primary-600 stroke-secondary-800 hover:stroke-primary-600 duration-500"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className=""
                    d="M16.939 8.06152C18.5424 8.06152 20.08 8.69845 21.2138 9.8322C22.3475 10.9659 22.9845 12.5036 22.9845 14.107V21.16H18.9542V14.107C18.9542 13.5725 18.7419 13.06 18.3639 12.6821C17.986 12.3041 17.4735 12.0918 16.939 12.0918C16.4046 12.0918 15.892 12.3041 15.5141 12.6821C15.1362 13.06 14.9239 13.5725 14.9239 14.107V21.16H10.8936V14.107C10.8936 12.5036 11.5305 10.9659 12.6642 9.8322C13.798 8.69845 15.3357 8.06152 16.939 8.06152V8.06152Z"
                    strokeWidth="1.51136"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M6.86429 9.06836H2.83398V21.1593H6.86429V9.06836Z" strokeWidth="1.51136" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M4.84914 6.04495C5.96207 6.04495 6.86429 5.14274 6.86429 4.0298C6.86429 2.91686 5.96207 2.01465 4.84914 2.01465C3.7362 2.01465 2.83398 2.91686 2.83398 4.0298C2.83398 5.14274 3.7362 6.04495 4.84914 6.04495Z"
                    strokeWidth="1.51136"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
