import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VANLIFE
      </Link>
      <nav>
        <Link to="/Host">Host</Link>
        <Link to="/about">about</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  );
};
export default Header;
