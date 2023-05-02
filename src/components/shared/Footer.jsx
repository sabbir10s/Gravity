import {Link} from "react-router-dom";
import arrow1 from "../../assets/icon/arrow.png";
import arrow2 from "../../assets/icon/arrow2.png";
import facebook from "../../assets/icon/facebook.png";
import linkedIn from "../../assets/icon/linkedIn.png";
import twitter from "../../assets/icon/twitter.png";
import logo from "../../assets/img/full logo.png";
import "../../styles/Footer.css";
import {routeLinks} from "../../data/RouteLink";
import FooterButtonLink from "../theme/FooterButtonLink";
const Footer = () => {
    return (
        <div className="bg-secondary-800 text-white">
            <div className="pt-[60px] lg:pt-[144px] pb-[40px] lg:pb-[80px]">
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
                            <div
                                className="progress-bar w-16 lg:w-[120px] h-16 lg:h-[120px] rounded-[50%] flex items-center justify-center relative z-10">
                                <div
                                    className="relative group-hover:animate-pulse group-hover:rotate-180 duration-300 transition">
                                    <img className="" src={arrow1} alt=""/>
                                    <img
                                        className="absolute top-[3px] left-0 w-[35px] h-[28px] hidden group-hover:inline-block"
                                        src={arrow2}
                                        alt=""/>
                                </div>
                            </div>
                        </Link>
                        <div
                            className="spinner_footer w-16 lg:w-[120px] h-16 lg:h-[120px] absolute top-0 z-0 hidden group-hover:block">
                            <div className="spinner1_footer w-16 lg:w-[120px] h-16 lg:h-[120px]"></div>
                        </div>
                    </div>
                </div>

                <div
                    className="mt-[40px] lg:mt-[65px] container lg:flex items-center justify-between">
                    <div>
                        <p className="uppercase text-white/40 mb-[12px] lg:mb-[17px] text-[16px] lg:text-[24px]">Email</p>
                        <button className="text-white">
                            <Link className="text-[20px] md:text-[30px] lg:text-[40px]" to="mailto:hello@gravityltd.co">
                                hello@gravityltd.co
                            </Link>

                        </button>
                    </div>
                    <div className="mt-[24px] lg:mt-0">
                        <p className="uppercase text-white/40 mb-[12px] lg:mb-[17px] text-[16px] lg:text-[24px]">Phone Number</p>
                        <button className="text-white">
                            <Link className="text-[20px] md:text-[30px] lg:text-[40px]" to="tel:09638945755">
                                09638-945755
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="py-[50px]">
                    <div className="h-[0.5px] bg-white/5"></div>
                </div>

                <div className="container lg:flex justify-between">
                    <div className="text-[17px]">
                        <img className="cursor-pointer w-[180px] lg:w-[271px]" src={logo} alt=""/>
                        <p className="mt-[32px] lg:mt-[50px] text-[17px]">© Gravity 2023. All rights reserved.</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div>
                        <h2 className=" text-white/40 text-[16px] uppercase mt-[32px] lg:mt-0">Address</h2>
                        <p className=" text-[20px] mt-[10px]">
                            Uttara, Sector- 4,
                            <br/>
                            Dhaka, Bangladesh
                        </p>
                        <div className="mt-[32px]">
                            <p className=" text-white/40 text-[16px] uppercase ">Follow</p>
                            <div className="flex items-center gap-[30px] mt-[10px]">
                                <img
                                    className="hover:animate-pulse cursor-pointer hover:scale-110 transition duration-150"
                                    src={facebook}
                                    alt=""/>
                                <img
                                    className="hover:animate-pulse cursor-pointer hover:scale-110 transition duration-150"
                                    src={linkedIn}
                                    alt=""/>
                                <img
                                    className="hover:animate-pulse cursor-pointer hover:scale-110 transition duration-150"
                                    src={twitter}
                                    alt=""/>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className=" text-white/40 text-[16px] uppercase mt-[32px] lg:mt-0 lg:mb-2">Links</h2>
                        <div className="flex flex-col gap-[12px] text-[20px] mt-[32px] lg:mt-0">
                            {routeLinks.map((routes) => (<FooterButtonLink
                                key={routes.id}
                                route={routes.route}
                                path_name={routes.path_name}/>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
