/* eslint-disable react/prop-types */
const EveryHero = ({ children }) => {
  return (
    <div className="container h-screen flex items-center">
      <h2 className="w-full lg:w-5/6 font-medium leading-[125%] lg:leading-[120%] text-[32px]  lg:text-[80px] ">{children}</h2>
    </div>
  );
};

export default EveryHero;
