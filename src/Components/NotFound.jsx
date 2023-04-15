import React from "react";
import notfoundImg from "../../src/assets/images/notfoundImg.jpg";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className="not-found">
      <h1>Whoops!</h1>
      <p>404 Page Not Found</p>
      <img src={notfoundImg} />
      <h1>Looks like this page went on a vacation.</h1>
      <p>
        try our <Link to="/">Homepage</Link> instead
      </p>
    </section>
  );
};
export default NotFound;
