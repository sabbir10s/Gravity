/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FooterButtonLink = ({ path_name, route }) => {
  return (
    <button className="text-white group text-left">
      <Link className="text-xl" to={path_name}>
        {route}
      </Link>
      <div className="bg-white/20 w-full h-[1px] mx-auto">
        <div className="bg-white w-0 group-hover:w-full duration-300 h-[1px] mx-auto"></div>
      </div>
    </button>
  );
};

export default FooterButtonLink;
