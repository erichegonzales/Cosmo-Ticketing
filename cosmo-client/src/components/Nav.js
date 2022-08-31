import { Link } from "react-router-dom";

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
        isAdmin ?
        <Link to="/admin">Profile</Link> :
        <Link to="/user">Profile</Link>
        {/* test later */}
      </li>
    </ul>
  );
};

export default Nav;
