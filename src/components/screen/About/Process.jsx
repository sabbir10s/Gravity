import { processData } from "../../../data/ProcessData";
import ProcessDetails from "./ProcessDetails";

const Process = () => {
  return (
    <div className="">
      <div className="container text-secondary-800">
        <h2 className="text-4xl md:text-5xl lg:text-[64px] font-semibold">
          A simple and <br /> streamlined process
        </h2>
        <div className="w-24 lg:w-52 h-[7px] my-5 bg-primary-600"></div>
      </div>
      {/* steps line */}
      <div className="hidden lg:block steps py-1 bg-[#D9E4EF] mt-24"></div>
      {/* process description */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processData.map((process) => (
            <ProcessDetails key={process.id} process={process} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Process;
