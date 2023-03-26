import { Outlet, NavLink } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <>
      <nav className="host-nav">
        <NavLink end to="/Host">
          Dashboard
        </NavLink>
        <NavLink to="/Host/Income">Income</NavLink>
        <NavLink to="/Host/Reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
};
export default DashboardLayout;
