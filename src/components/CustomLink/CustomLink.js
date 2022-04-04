import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          //   color: match ? "white" : "darkcyan",
          borderBottom: match
            ? "3px solid darkcyan"
            : "3px solid rgb(242, 252, 255)",
          color: match ? "darkcyan" : "rgb(242, 252, 255)",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}
export default CustomLink;
