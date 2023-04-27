import visionImg from "../../../assets/aboutslide/vision.png";

const Vision = () => {
  return (
    <section className="grid gap-8 grid-cols-1 md:grid-cols-2 h-full lg:h-[947px] container text-secondary-800 ">
      <div className=" pt-8 lg:pt-28 order-2 md:order-none">
        <h2 className="text-4xl md:text-5xl lg:text-[77px] font-semibold">Vision</h2>
        <div className="w-20 h-1 my-5 bg-primary-600"></div>
        <p className="text-2xl md:text-[28px] lg:text-[32px] md:leading-relaxed lg:leading-[48px] ">
          Gravity is a dynamic digital agency that specializes in delivering cutting-edge solutions for businesses of all sizes. With a team of
          skilled professionals and a focus on innovation and excellence, Gravity helps its clients achieve their digital goals and take their brands
          to new heights. From web design and development to branding and marketing, Gravity offers a comprehensive range of services that are
          tailored to meet the unique needs of each client. With a commitment to quality and customer satisfaction, Gravity is dedicated to helping
          businesses succeed in the ever-changing digital landscape.
        </p>
      </div>
      <div className="w-full h-full lg:w-[950px] lg:h-[947px] order-1 md:order-none pt-12 md:pt-0  rounded lg:rounded-none">
        <img className="w-full h-full rounded lg:rounded-none" src={visionImg} alt="vision" />
      </div>
    </section>
  );
};

export default Vision;
