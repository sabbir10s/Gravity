import visionImg from "../../../assets/aboutslide/vision.png";

const Vision = () => {
    return (
        <div className="relative">
            <div
                className="container text-secondary-800 flex flex-col lg:flex-row lg:gap-[130px] ">
                <div
                    className="pr-0 lg:pr-3 pt-[52px] lg:pt-[100px] order-2 lg:order-none lg:w-2/3">
                    <h2 className="text-4xl md:text-5xl lg:text-[64px] font-semibold">Vision</h2>
                    <div
                        className="w-14 lg:w-24 h-[7px] mb-[30px] lg:mb-[50px] mt-[9px] bg-primary-800"></div>
                    <p
                        className="text-base md:text-[20px] lg:text-[24px] xl:text-[22px] 2xl:text-[32px] md:leading-relaxed lg:leading-[48px] mt-[24px]">
                        Gravity is a dynamic digital agency that specializes in delivering cutting-edge
                        solutions for businesses of all sizes. With a team of skilled professionals and
                        a focus on innovation and excellence, Gravity helps its clients achieve their
                        digital goals and take their brands to new heights. From web design and
                        development to branding and marketing, Gravity offers a comprehensive range of
                        services that are tailored to meet the unique needs of each client. With a
                        commitment to quality and customer satisfaction, Gravity is dedicated to helping
                        businesses succeed in the ever-changing digital landscape.
                    </p>
                </div>

                <div className="mt-[55px] lg:mt-0 w-full h-full lg:w-1/3 lg:absolute right-0">
                    <img
                        className="w-full h-full object-cover object-center rounded lg:rounded-none"
                        src={visionImg}
                        alt="vision"/>
                </div>
            </div>
        </div>
    );
};

export default Vision;
