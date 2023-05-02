/* eslint-disable react/prop-types */
const ProcessDetails = ({ process }) => {
  return (
    <div className="text-secondary-800">
      <button className="bg-[#D9E4EF] rounded-full inline-block w-14 h-14 text-secondary-800 text-2xl relative lg:-top-8 font-semibold">
        {process.step}
      </button>
      <h2 className=" text-2xl lg:text-3xl my-3 font-semibold">{process.title}</h2>
      <div>
        <p>{process.desc}</p>
      </div>
    </div>
  );
};

export default ProcessDetails;
