import ServiceDetails from "./ServiceDetails";
import ServiceImage from "./serviceImage";

/* eslint-disable react/prop-types */
const ServiceDesign = ({ serviceDetails }) => {
  const { image, isReverse } = serviceDetails;

  return (
    <section className={`grid grid-cols-1 md:grid-cols-2 lg:gap-x-24 mt-8 lg:mt-28`}>
      <div className={`${isReverse ? "md:order-first" : "md:order-last"}`}>
        <ServiceImage image={image} />
      </div>
      <div className={`${isReverse ? "md:order-last" : "md:order-fast"}`}>
        <ServiceDetails service={serviceDetails} />
      </div>
    </section>
  );
};

export default ServiceDesign;
