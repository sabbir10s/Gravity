/* eslint-disable react/prop-types */
const ProcessDetails = ({ process }) => {
  return (
    <div className="text-secondary-800">
      <button className="bg-primary-50 rounded-full inline-block w-10 h-10 font-medium text-secondary-800 text-xl relative -top-6">{process.step}</button>
      <h2 className=" text-2xl lg:text-3xl my-3 font-semibold">{process.title}</h2>
      <div>
        <p>{process.desc}</p>
      </div>
    </div>
  );
};

export default ProcessDetails;
