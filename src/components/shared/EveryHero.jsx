/* eslint-disable react/prop-types */
const EveryHero = ({ children }) => {
  return (
    <div className="container items-center pb-10 pt-36 lg:pb-36">
      <h2 className="w-full lg:w-5/6 font-medium leading-[125%] lg:leading-[120%] text-[32px]  lg:text-[60px] ">{children}</h2>
    </div>
  );
};

export default EveryHero;
