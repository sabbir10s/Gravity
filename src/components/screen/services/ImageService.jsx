/* eslint-disable react/prop-types */
const ImageService = ({ image }) => {
  return (
    <div className="lg:w-[560px] relative">
      <div className=" bg-primary-800 hover:bg-primary-600 duration-300 transition-all pr-1 lg:pr-2 pb-1 lg:pb-2 cursor-pointer rounded-md shadow-custom_secondary hover:shadow-custom">
        <img className="w-full relative -top-2 lg:-top-3 right-2 lg:right-3 rounded-md " src={image} alt="" />
      </div>
    </div>
  );
};

export default ImageService;
