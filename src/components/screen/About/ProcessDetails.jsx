/* eslint-disable react/prop-types */
const ProcessDetails = ({process, index}) => {
    return (
        <article>
            <div className="text-secondary-800">
                <h2 className="text-[#b6c2cf] text-[80px] lg:text-[130px]">{index + 1}</h2>
                <h2 className=" text-2xl lg:text-3xl mb-3">{process.title}</h2>
                <div>
                    <p className="text-base">{process.desc}</p>
                </div>
            </div>
        </article>
    );
};

export default ProcessDetails;
