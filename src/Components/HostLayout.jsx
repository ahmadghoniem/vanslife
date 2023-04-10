import { Outlet, NavLink } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <>
      <nav className="host-nav">
        <NavLink end to=".">
          Dashboard
        </NavLink>
        <NavLink to="./income">Income</NavLink>
        <NavLink to="./vans">Vans</NavLink>
        <NavLink to="./reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
};
export default DashboardLayout;
