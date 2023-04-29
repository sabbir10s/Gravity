import { serviceData } from "../../../data/ServiceData";
import ServiceDesign from "./ServiceDesign";

const Service = () => {
  return (
    <div className="container">
      {serviceData.map((serviceDetails) => (
        <ServiceDesign key={serviceDetails._id} serviceDetails={serviceDetails} />
      ))}
    </div>
  );
};

export default Service;
