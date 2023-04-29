import logo from '../../assets/img/logo.png'
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import Menubar from './Menubar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenubar, setShowMenubar] = useState(false);
  const handleCloseMenubar = () => {
    const modalContent = document.querySelector('.modal-content');
    modalContent.classList.add('slide-out');
    modalContent.addEventListener('animationend', () => {
      modalContent.style.display = 'none';
      // setShowModal(false);
      setShowMenubar(false);
    }, {once: true});
};
  return (
    <div className="bg-primary-800">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <Link to='/'> <img src={logo} alt="" /></Link>
          <button onClick={() => setShowMenubar(true)} className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
            <HiOutlineMenuAlt4 className="text-xl" />
          </button>
        </div>
      </div>
      <Menubar handleCloseMenubar={handleCloseMenubar} visible={showMenubar} />
    </div>
  );
};

export default Navbar;
