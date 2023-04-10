import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import placeholder from "../../assets/images/placeholder.png";
import "react-loading-skeleton/dist/skeleton.css";
const Vans = () => {
  const [vans, setVans] = useState([
    {
      id: "",
      name: "",
      imageUrl: "",
      price: "",
      type: "",
    },
  ]);
  React.useEffect(() => {
    fetch(`/api/host/vans`)
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
      });
  }, []);

  const vanElements = vans.map(({ id, name, imageUrl, price }, index) => (
    <div key={id || index} className="host-van-tile">
      <Link to={`./${name.replace(/ /g, "-").toLowerCase()}-${id}`}>
        {imageUrl ? (
          <img src={imageUrl} />
        ) : (
          <div className="vans-loader-container">
            <img src={placeholder} />
            <div className="dot-flashing" style={{ margin: "0 auto" }}></div>
          </div>
        )}
        <div className="van-info">
          <h2>{name || <Skeleton height="1.25em" width="30%" />}</h2>
          <p className="van-price">
            {price ? `$${price}/day` : <Skeleton width="15%" />}
          </p>
        </div>
      </Link>
    </div>
  ));
  return (
    <section className="host-van-list-container">
      <h1>Your listed vans</h1>
      <div className="host-van-list">{vanElements}</div>
    </section>
  );
};

export default Vans;
