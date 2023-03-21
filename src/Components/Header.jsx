import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VANLIFE
      </Link>
      <nav>
        <Link to="/vans">Vans</Link>
        <Link to="/about">about</Link>
      </nav>
    </header>
  );
};
export default Header;
