/* eslint-disable react/prop-types */
const ProcessDetails = ({process, index}) => {
    return (
        <article>
            <div className="text-secondary-800">
                <h2 className="text-[#b6c2cf] text-[7.5rem]">{index + 1}</h2>
                <h2 className="text-[28px] md:text-[32px] lg:text-[40px] mb-3">{process.title}</h2>
                <div>
                    <p className="text-[16px] md:text-[18px] lg:text-[20px]">{process.desc}</p>
                </div>
            </div>
        </article>
    );
};

export default ProcessDetails;
