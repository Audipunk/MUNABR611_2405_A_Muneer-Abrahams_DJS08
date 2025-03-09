import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/vans">Vans</NavLink>
      <NavLink to="/host">Host</NavLink>
    </nav>
  );
}

export default Navbar;
