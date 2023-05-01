/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import twitter from "../../assets/icon/twitter.png";
import facebook from "../../assets/icon/facebook.png";
import linkedIn from "../../assets/icon/linkedIn.png";
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
      className="modal-overlay z-50 fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-start"
    >
      <div className="relative w-full bg-secondary-800 modal-content slide-in">
        <div className="w-full container h-screen flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center py-4">
              <Link onClick={handleCloseMenubar} to="/">
                <img src={logo} alt="" />
              </Link>
              <button onClick={handleCloseMenubar} className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                <AiOutlineClose className="text-xl text-black" />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <ul className="flex flex-col gap-[24px] lg:gap-[36px] text-white font-medium text-[24px] lg:text-[32px] ">
              <li onClick={handleCloseMenubar} className="hover:text-primary-500 duration-300">
                <Link to="/">Home.</Link>
              </li>
              <li onClick={handleCloseMenubar} className="hover:text-primary-500 duration-300">
                <Link to="/service">Service.</Link>
              </li>
              <li onClick={handleCloseMenubar} className="hover:text-primary-500 duration-300">
                {" "}
                <Link to="/about">About Us.</Link>
              </li>
              <li onClick={handleCloseMenubar} className="hover:text-primary-500 duration-300">
                {" "}
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-center pl-8 lg:justify-end">
            <div>
              <h3 className="text-white/40 text-[18px]">Lets talk</h3>
              <button className="text-white group">
                <span className="text-[24px]">gravity@ltd.co</span>
                <div className="bg-white w-1/4 group-hover:w-full duration-300 h-[2px]"></div>
              </button>
              <div className="flex items-center gap-[30px] mt-4 pb-14">
                <a href="#">
                  <img src={twitter} alt="twitter" />
                </a>
                <a href="#">
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="#">
                  <img src={linkedIn} alt="linkedIn" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
