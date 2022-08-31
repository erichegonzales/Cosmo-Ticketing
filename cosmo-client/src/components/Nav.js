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
        <Link to={ isAdmin ? '/admin' : '/user'}>Profile</Link>
      </li>
    </ul>
  );
};

export default Nav;
