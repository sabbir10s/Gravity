/* eslint-disable react/prop-types */
const EveryHero = ({ children }) => {
  return (
    <div className="container items-center pt-[140px] lg:pt-[200px] pb-[48px] lg:pb-[158px]">
      <h2 className="w-full lg:w-5/6 font-medium leading-[125%] lg:leading-[120%] text-[24px] lg:text-[80px] capitalize">{children}</h2>
    </div>
  );
};

export default EveryHero;
