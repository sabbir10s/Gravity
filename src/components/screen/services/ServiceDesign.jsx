/* eslint-disable react/prop-types */
import ImageService from "./ImageService";
import ServiceDetails from "./ServiceDetails";

const ServiceDesign = ({ serviceDetails }) => {
  const { image, isReverse } = serviceDetails;

  return (
    <section className={`grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-10 lg:gap-x-24 mt-12 lg:mt-40`}>
      <div className={`${isReverse ? "md:order-first" : "md:order-last"}`}>
        <ImageService image={image} />
      </div>
      <div className={`${isReverse ? "md:order-last" : "md:order-fast"}`}>
        <ServiceDetails service={serviceDetails} />
      </div>
    </section>
  );
};

export default ServiceDesign;
