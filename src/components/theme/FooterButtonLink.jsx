/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FooterButtonLink = ({ path_name, route }) => {
  return (
    <button className="text-white hover:text-link-400 duration-300 group text-left">
      <Link className="text-xl" to={path_name}>
        {route}
      </Link>
    </button>
  );
};

export default FooterButtonLink;
