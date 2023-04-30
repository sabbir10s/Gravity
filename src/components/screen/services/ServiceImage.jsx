/* eslint-disable react/prop-types */
const ServiceImage = ({ image }) => {
  return (
    <div className="lg:w-[560px] relative">
      <div className=" bg-primary-800 pr-1 lg:pr-2 pb-1 lg:pb-2">
        <img className="w-full relative -top-2 lg:-top-3 right-2 lg:right-3" src={image} alt="" />
      </div>
    </div>
  );
};

export default ServiceImage;
