import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const styles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  /** By default, an active class is added to a <NavLink> component when it is active so you can use CSS to style it.
   * .header-nav a.active {
   * font-weight: bold;
   * text-decoration: underline;
   * color: #161616; }*/
  return (
    <header>
      <Link className="site-logo" to="/">
        #VANLIFE
      </Link>
      <nav className="header-nav">
        <NavLink
          /* style={({ isActive }) => (isActive ? styles : null)} */
          to="/Host"
        >
          Host
        </NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/vans">Vans</NavLink>
      </nav>
    </header>
  );
};
export default Header;
