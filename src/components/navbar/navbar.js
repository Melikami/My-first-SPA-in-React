import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link exact to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/profile/meliakerman",
            }}
          >
            Meli
          </Link>
        </li>
        <li>
          <Link to="/cv">CV</Link>
        </li>
        <li>
          <Link to="/github">Github</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
