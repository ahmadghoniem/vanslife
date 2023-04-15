import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;

      headerElement.style.transform =
        prevScrollPos > currentScrollPos
          ? "translateY(0)"
          : "translateY(-200px)";

      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /** By default, an active class is added to a <NavLink> component when it is active so you can use CSS to style it.
   * .header-nav a.active {
   * font-weight: bold;
   * text-decoration: underline;
   * color: #161616; }*/

  const styles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <header ref={headerRef}>
      <Link className="site-logo" to="/">
        #VANLIFE
      </Link>
      <nav className="header-nav">
        <NavLink
          /* style={({ isActive }) => (isActive ? styles : null)} */
          to="./host"
        >
          Host
        </NavLink>
        <NavLink to="./about">about</NavLink>
        <NavLink to="./vans">Vans</NavLink>
      </nav>
    </header>
  );
};
export default Header;
