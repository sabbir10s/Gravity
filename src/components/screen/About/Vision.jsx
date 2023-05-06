import visionImg from "../../../assets/aboutslide/vision.png";

const Vision = () => {
  return (
    <section className="grid md:block lg:block xl:grid gap-8 grid-cols-1 md:grid-cols-2 h-full lg:h-[947px] container text-secondary-800 relative ">
      <div className=" pt-8 lg:pt-28 order-2 lg:order-none">
        <h2 className="text-4xl md:text-5xl lg:text-[64px] font-semibold">Vision</h2>
        <div className="w-24 h-[7px] my-5 bg-primary-600"></div>
        <p className="text-base md:text-[20px] lg:text-[24px] xl:text-[22px] md:leading-relaxed lg:leading-[48px] text-justify">
          Gravity is a dynamic digital agency that specializes in delivering cutting-edge solutions for businesses of all sizes. With a team of
          skilled professionals and a focus on innovation and excellence, Gravity helps its clients achieve their digital goals and take their brands
          to new heights. From web design and development to branding and marketing, Gravity offers a comprehensive range of services that are
          tailored to meet the unique needs of each client. With a commitment to quality and customer satisfaction, Gravity is dedicated to helping
          businesses succeed in the ever-changing digital landscape.
        </p>
      </div>
      <div className="lg:mt-10 xl:mt-0 w-full h-full xl:w-[733px] xl:h-[813px] 2xl:h-[850px] order-1 lg:order-none pt-12 md:pt-0  rounded lg:rounded-none xl:absolute top-0 lg:-right-52 xl:-right-60 2xl:-right-80  block md:hidden lg:block">
        <img className="w-full h-full rounded lg:rounded-none" src={visionImg} alt="vision" />
      </div>
    </section>
  );
};

export default Vision;
