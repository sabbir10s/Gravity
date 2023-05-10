import { Link, useMatch, useResolvedPath } from "react-router-dom";
import '../../styles/ActiveLink.css'
function ActiveLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <>
            <Link
                className={match ? 'flip-animate ActiveLink' : "flip-animate link"}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </>
    );

}

export default ActiveLink;
