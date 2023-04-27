/* eslint-disable react/prop-types */
const ServiceDetails = ({ service }) => {
  const { title, details_desc, key_services } = service;
  return (
    <div className="text-secondary-800 lg:mt-5 mb-8 lg:mb-0">
      <h2 className="text-4xl lg:text-[64px] font-semibold mt-8">{title}</h2>
      <div className="w-24 h-[5px] mt-6 bg-primary-600"></div>
      <p className="text-base lg:text-[20px] leading-[24px] lg:leading-[30px] mt-5">{details_desc}</p>
      <ul className="pt-8 space-y-4">
        {key_services.map((item, i) => (
          <div className="flex items-center space-x-3" key={i}>
            <div className="w-[25px] h-1 bg-primary-800"></div>
            <li className="text-[20px] lg:text-[25px] leading-[30px] lg:leading-[38px] font-semibold "> {item}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ServiceDetails;
