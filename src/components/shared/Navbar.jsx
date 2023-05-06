import {HiOutlineMenuAlt4} from "react-icons/hi";
import Menubar from "./Menubar";
import {useState} from "react";
import {Link} from "react-router-dom";
import '../../styles/Navbar.css'
const Navbar = () => {
    const body = document.body;
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            body
                .classList
                .remove("scroll-up");
            return;
        }

        if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
            body
                .classList
                .remove("scroll-up");
            body
                .classList
                .add("scroll-down");
        } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
            body
                .classList
                .remove("scroll-down");
            body
                .classList
                .add("scroll-up");
        }
        lastScroll = currentScroll;
    });

    const [showMenubar,
        setShowMenubar] = useState(false);

    const openModal = () => {
        setShowMenubar(true);
        document
            .body
            .classList
            .add('modal-open');
    };

    const handleCloseMenubar = () => {
        document
            .body
            .classList
            .remove('modal-open');
        const modalContent = document.querySelector(".modal-content");
        modalContent
            .classList
            .add("slide-out");
        modalContent.addEventListener("animationend", () => {
            modalContent.style.display = "none";
            setShowMenubar(false);
        }, {once: true});
    };

    return ( <> <nav>
        <div className={`w-full bg-primary-800`}>
            <div
                className="flex justify-between items-center h-[70px] md:h-[90px] container">
                <Link to="/">
                    <div>
                        <svg
                            className="w-[35px] lg:w-[50px]"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M33.1853 29.6845L39.9996 31.907C39.0775 33.2706 38.0016 34.5339 36.7209 35.6448C35.4911 36.7564 34.1595 37.7156 32.6734 38.5238C31.2388 39.3319 29.7018 39.9382 28.011 40.3419C26.3717 40.7965 24.6808 40.9984 22.8876 40.9984C17.2008 40.9984 12.436 38.9777 8.44001 35.038C4.44402 31.0989 2.39453 26.4012 2.39453 20.7944C2.39453 15.2378 4.39253 10.4899 8.44001 6.55021C12.3851 2.55971 17.2008 0.589844 22.8876 0.589844C25.7053 0.589844 28.3697 1.09515 30.8802 2.15594C33.3392 3.21672 35.5426 4.68128 37.4382 6.55021L32.5195 11.2981C29.8551 8.67119 26.6788 7.35834 22.8876 7.35834C19.1479 7.35834 15.9201 8.62101 13.2048 11.2981C10.5404 13.925 9.25968 17.1067 9.25968 20.7944C9.25968 24.4815 10.5404 27.7146 13.2048 30.3409C15.8692 32.9678 19.1479 34.2304 22.8876 34.2304C24.9371 34.2304 26.8327 33.8261 28.5744 33.0687C30.3168 32.2606 31.8537 31.1496 33.1853 29.6845ZM22.8876 17.4609H39.9996L33.1853 24.1786H22.8876V17.4609Z"
                                fill="white"
                                fillOpacity="0.2"/>
                            <path
                                d="M30.7908 29.0946L37.605 31.3171C36.683 32.6808 35.607 33.944 34.3263 35.055C33.0965 36.1665 31.7649 37.1258 30.2789 37.9339C28.8443 38.7421 27.3073 39.3483 25.6165 39.7521C23.9771 40.2066 22.2863 40.4085 20.4931 40.4085C14.8062 40.4085 10.0415 38.3879 6.04547 34.4481C2.04949 30.509 0 25.8113 0 20.2045C0 14.648 1.99799 9.90009 6.04547 5.96036C9.99057 1.96987 14.8062 0 20.4931 0C23.3107 0 25.9751 0.505306 28.4856 1.56609C30.9447 2.62688 33.148 4.09144 35.0436 5.96036L30.125 10.7082C27.4606 8.08135 24.2843 6.7685 20.4931 6.7685C16.7533 6.7685 13.5255 8.03117 10.8102 10.7082C8.14585 13.3351 6.86515 16.5169 6.86515 20.2045C6.86515 23.8916 8.14585 27.1248 10.8102 29.751C13.4746 32.3779 16.7533 33.6406 20.4931 33.6406C22.5425 33.6406 24.4382 33.2362 26.1799 32.4789C27.9222 31.6707 29.4592 30.5598 30.7908 29.0946ZM20.4931 16.8711H37.605L30.7908 23.5888H20.4931V16.8711Z"
                                fill="white"/>
                        </svg>

                    </div>
                </Link>
                <button onClick={openModal} className="flex items-center gap-2 group">
                    <span className="text-white text-xl hidden lg:block">Menu</span>
                    <span
                        className="bg-white lg:bg-transparent group-hover:bg-white text-secondary-800 lg:text-white group-hover:text-secondary-800 duration-700 w-10 h-10 rounded-full flex justify-center items-center"><HiOutlineMenuAlt4 className="text-[25px]"/></span>
                </button>
            </div>
        </div>
    </nav> < Menubar handleCloseMenubar = {
        handleCloseMenubar
    }
    visible = {
        showMenubar
    } /> </>);
};

export default Navbar;
