import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  const location = useLocation();
  return (
    <div className="site-wrapper">
      <Header />
      <h4>{location.pathname}</h4>
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
