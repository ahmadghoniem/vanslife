import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <section className="home-container">
      <h1>You got the travel plans, we got the travel vans.</h1>
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link to="/about">Find your van</Link>
    </section>
  );
};
export default Homepage;
