/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FooterButtonLink = ({ path_name, route }) => {
  return (
    <button className="text-white hover:text-[#6AA0FC] duration-300 group text-left">
      <Link className="text-xl" to={path_name}>
        {route}
      </Link>
    </button>
  );
};

export default FooterButtonLink;
