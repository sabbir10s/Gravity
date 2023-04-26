import logo from '../../assets/logo.png'
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import Menubar from './Menubar';
import { useState } from 'react';

const Navbar = () => {
  const [showMenubar,
    setShowMenubar] = useState(false);
  const handleCloseMenubar = () => {
    setShowMenubar(false);
};
    return <div className='bg-primary-800'>
        <div className='container'>
            <div className='flex justify-between items-center py-4'>
                <img src={logo} alt=""/>
                <button onClick={() => setShowMenubar(true)} className='bg-white w-10 h-10 rounded-full flex justify-center items-center'>
                    <HiOutlineMenuAlt4 className='text-xl'/>
                </button>
            </div>
        </div>
        <Menubar handleCloseMenubar={handleCloseMenubar} visible={showMenubar}/>
    </div>;
};

export default Navbar;
