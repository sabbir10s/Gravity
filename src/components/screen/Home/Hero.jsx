import play from "../../../assets/icon/Play.png";
import video from "../../../assets/video/Final.mp4"
import {useEffect, useRef, useState} from "react";
const Hero = () => {
    const sectionRef = useRef(null);
    const [isVisible,
        setIsVisible] = useState(false);

    const [height,
        setHeight] = useState(window.innerHeight);

    useEffect(() => {
        function handleResize() {
            setHeight(window.innerHeight);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset >= height && window.pageYOffset <= height*2) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-primary-800 text-white">
            <div>
                <div className="container h-screen flex items-center">
                    <div>
                        <h1
                            className="font-medium text-3xl md:text-[40px] lg:text-[100px] lg:leading-[110px]">
                            Ideas transformed into
                            <br/>
                            masterpieces
                        </h1>
                        <p className="text-[16px] lg:text-[24px] mt-[16px] lg:mt-[24px]">
                            Gravity is a digital agency offering IT and digital branding
                            <br/>
                            services. We provide customized solutions to achieve business
                            <br/>
                            goals with outstanding results.
                        </p>
                        <p>{height}</p>
                    </div>
                </div>

                <section ref={sectionRef}>
                    {isVisible
                        ? (
                            <div
                                className="mt-[32px] lg:mt-[60px] flex items-center justify-center relative z-0 duration-1000">
                                {/* <img className=" p-20 lg:p-28 " src={logo} alt="" /> */}
                                <button className="absolute z-10">
                                    <img
                                        className=" cursor-pointer w-[56px] md:w-[100px] lg:w-[200px] h-[56px] md:h-[100px] lg:h-[200px]"
                                        src={play}
                                        alt=""/>
                                </button>
                                <video autoPlay muted loop>
                                    <source src={video} type="video/mp4"></source>
                                </video>

                            </div>
                        )
                        : (
                            <div
                                className="container mt-[32px] lg:mt-[60px] w-full flex items-center justify-center relative z-0 duration-1000">
                                {/* <img className=" p-20 lg:p-28 " src={logo} alt="" /> */}
                                <button className="absolute z-10">
                                    <img
                                        className=" cursor-pointer w-[56px] md:w-[100px] lg:w-[200px] h-[56px] md:h-[100px] lg:h-[200px]"
                                        src={play}
                                        alt=""/>
                                </button>
                                <video autoPlay muted loop>
                                    <source src={video} type="video/mp4"></source>
                                </video>

                            </div>
                        )}
                </section>

                <div
                    className="container lg:flex justify-between items-start mt-[40px] md:mt-[50px] lg:py-[80px]">
                    <h2 className="text-[20px] md:text-[24px] lg:text-[50px]">About</h2>
                    <p
                        className="mt-[12px] lg:mt-0 lg:w-3/4 text-[16px] md:text-[19px] lg:text-[24px]">
                        Gravity is a fast growing digital agency that specializes in providing
                        first-rate
                        <span className="text-[#1DFF77]">IT</span>
                        and{" "}
                        <span className="text-[#1DFF77]">digital branding services</span>. With a team
                        of experienced professionals who are passionate about technology and creativity,
                        Gravity has made a name for itself for providing innovative solutions that help
                        businesses of all sizes grow and succeed in todays digital landscape.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
