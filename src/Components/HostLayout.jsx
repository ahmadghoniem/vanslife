import { Outlet, Link } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <>
      <nav className="host-nav">
        <Link to="/Host">Dashboard</Link>
        <Link to="/Host/Income">Income</Link>
        <Link to="/Host/Reviews">Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default DashboardLayout;
