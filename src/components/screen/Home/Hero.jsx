import Video from "./Video";
const Hero = () => {

    return (
        <div className="bg-primary-800 text-white">
            <div>
                <div className="container flex items-center pt-[140px] lg:pt-[150px]">
                    <div className="">
                        <h1
                            className="font-medium text-3xl md:text-[40px] lg:text-[100px] lg:leading-[110px]">
                            Ideas transformed into <p className="hidden lg:block"></p> masterpieces
                        </h1>
                        <p className="text-[16px] lg:text-[32px] mt-[16px] lg:mt-[24px] md:w-3/4 lg:w-4/5">
                            Gravity is a digital agency offering IT and digital branding services. We
                            provide customized solutions to achieve business goals with outstanding results.
                        </p>
                    </div>
                </div>

                <div className="pt-[32px] lg:pt-[60px] pb-[60px] lg:pb-[101px]">
                    <Video/>
                </div>
                <div
                    className="container lg:flex justify-between items-start pb-[60px]">
                    <h2 className="text-[20px] md:text-[30px] lg:text-[64px]">About</h2>
                    <p
                        className="mt-[12px] lg:mt-0 lg:w-3/4 text-[16px] md:text-[25px] lg:text-[32px]">
                        Gravity is a fast growing digital agency that specializes in providing
                        first-rate IT and digital branding services. With a team
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
