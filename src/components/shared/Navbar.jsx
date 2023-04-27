import logo from "../../assets/img/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import Menubar from "./Menubar";
import { useState } from "react";

const Navbar = () => {
  const [showMenubar, setShowMenubar] = useState(false);
  const handleCloseMenubar = () => {
    setShowMenubar(false);
  };
  return (
    <div className="bg-primary-800">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <img src={logo} alt="" />
          <button onClick={() => setShowMenubar(true)} className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
            <RxHamburgerMenu className="text-xl" />
          </button>
        </div>
      </div>
      <Menubar handleCloseMenubar={handleCloseMenubar} visible={showMenubar} />
    </div>
  );
};

export default Navbar;
