/* eslint-disable react/prop-types */
const ProcessDetails = ({process, index}) => {
    return (
        <article>
            <div className="text-secondary-800 items lg:w-[100vh] h-[60vh] lg:h-[100vh] ">
                <div className="w-[340px] lg:w-full ml-4 lg:container">
                    <h2 className="text-[#b6c2cf] text-[80px] lg:text-[150px] font-semibold">{index + 1}</h2>
                    <h2 className=" text-2xl lg:text-4xl my-3 font-semibold">{process.title}</h2>
                    <div>
                        <p className="text-base lg:text-lg">{process.desc}</p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProcessDetails;
