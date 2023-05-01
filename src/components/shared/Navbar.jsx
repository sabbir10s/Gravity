import logo from "../../assets/img/logo.png";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Menubar from "./Menubar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNev] = useState(false);
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    const handleNavigation = () => {
      if (y > window.scrollY) {
        setNev(true);
      } else if (y < window.scrollY) {
        setNev(false);
      }
      setY(window.scrollY);
    };

    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [y]);

  const [showMenubar, setShowMenubar] = useState(false);

  const openModal = () => {
    setShowMenubar(true);
    document.body.classList.add('modal-open');
  };

  const handleCloseMenubar = () => {
    document.body.classList.remove('modal-open');
    const modalContent = document.querySelector(".modal-content");
    modalContent.classList.add("slide-out");
    modalContent.addEventListener(
      "animationend",
      () => {
        modalContent.style.display = "none";
        setShowMenubar(false);
      },
      { once: true }
    );
  };

  return (
    <div className={`${nav ? "fixed w-full top-0 bg-primary-800 z-50 transition-all duration-300 ease-in-out" : "bg-primary-800"}`}>
      <div className="border-b border-secondary-100/10">
        <div className="flex justify-between items-center py-4 container">
          <Link to="/">
            <div className=" w-10 lg:w-16   h-10 lg:h-16">
              <img className="w-full h-full object-center" loading="lazy" src={logo} alt="logo" />
            </div>
          </Link>
          <button onClick={openModal} className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
            <HiOutlineMenuAlt4 className="text-xl" />
          </button>
        </div>
      </div>
      <Menubar handleCloseMenubar={handleCloseMenubar} visible={showMenubar} />
    </div>
  );
};

export default Navbar;
