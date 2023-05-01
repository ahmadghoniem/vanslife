import { Outlet, NavLink } from "react-router-dom";
const HostLayout = () => {
  return (
    <div>
      <nav className="host-nav">
        <NavLink end to=".">
          Dashboard
        </NavLink>
        <NavLink to="./income">Income</NavLink>
        <NavLink to="./vans">Vans</NavLink>
        <NavLink to="./reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
export default HostLayout;
