import { Navigate } from "react-router-dom";

const Nav = () => {
  let isAdmin = false;

  return (
    <ul className="nav">
      <li className="nav-link">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-link">
        <Link to="/login">Login</Link>
      </li>
      <li className="nav-link">
        isAdmin ?<Navigate to="/admin">Profile</Navigate> :
        <Navigate to="/user">Profile</Navigate>
        {/* test later */}
      </li>
    </ul>
  );
};

export default Nav;
