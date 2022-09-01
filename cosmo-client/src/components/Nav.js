import { Link } from "react-router-dom";
import '../App.css';

const Nav = () => {
  let isAdmin = false;

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
          <Link to={ isAdmin ? '/admin' : '/user'}>Profile</Link>
        </li>
        <li className="nav-link">
          <Link to="/add-event">addevent</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
