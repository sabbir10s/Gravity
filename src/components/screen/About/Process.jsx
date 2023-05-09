import {processData} from "../../../data/ProcessData";
import ProcessDetails from "./ProcessDetails";
const Process = () => {
    return (
        <div>
            <div className="container text-secondary-800">
                <h2 className="text-4xl md:text-5xl lg:text-[64px] font-semibold">
                    Our process
                </h2>
                <div className="w-24 lg:w-52 h-[7px] my-5 bg-primary-600"></div>
            </div>
            <div className=" container grid grid-cols-1 md:grid-cols-2 lg:gap-20">
                {processData.map((process, index) => (<ProcessDetails key={process.id} process={process} index={index}/>))}
            </div>
        </div>
    );
};

export default Process;
