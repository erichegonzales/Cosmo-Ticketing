import { useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Nav = () => {
  return (
    <div className="nav-bar">
       <ul className="nav">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-link">
          <Link to='/profile'>Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
