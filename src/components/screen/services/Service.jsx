import { serviceData } from "../../../data/ServiceData";
import ServiceDesign from "./ServiceDesign";

const Service = () => {
  return (
    <div className="container py-12 lg:py-28">
      {serviceData.map((serviceDetails) => (
        <ServiceDesign key={serviceDetails._id} serviceDetails={serviceDetails} />
      ))}
    </div>
  );
};

export default Service;
