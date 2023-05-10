import {processData} from "../../../data/ProcessData";
import ProcessDetails from "./ProcessDetails";
const Process = () => {
    return (
        <div>
            <div className="container text-secondary-800">
                <h2 className="text-4xl md:text-5xl lg:text-[64px] font-semibold">
                    Process
                </h2>
                <div className="w-16 lg:w-28 h-[7px] mb-[30px] lg:mb-[50px] mt-[5px] lg:mt-[9px] bg-primary-800"></div>
            </div>
            <div className=" container grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-10 lg:gap-20">
                {processData.map((process, index) => (<ProcessDetails key={process.id} process={process} index={index}/>))}
            </div>
        </div>
    );
};

export default Process;
