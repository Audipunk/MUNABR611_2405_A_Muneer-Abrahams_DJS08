import { Outlet, NavLink } from "react-router-dom";

function HostDashboard() {
  return (
    <div>
      <h1>Host Dashboard</h1>
      <nav>
        <NavLink to="income">Income</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default HostDashboard;
