import {processData} from "../../../data/ProcessData";
import ProcessDetails from "./ProcessDetails";
import '../../../styles/Process.css'
const Process = () => {
    return (
        <div>
            <div className="container text-secondary-800">
                <h2 className="text-4xl md:text-5xl lg:text-[64px] font-semibold">
                    A simple and
                    <br/>
                    streamlined process
                </h2>
                <div className="w-24 lg:w-52 h-[7px] my-5 bg-primary-600"></div>
            </div>
            <div className=" relative h-[40vh] lg:h-[30vh] mt-10 lg:mt-20">
                <div id="section">
                    {processData.map((process, index) => (<ProcessDetails key={process.id} process={process} index={index}/>))}
                </div>
            </div>
        </div>
    );
};

export default Process;
