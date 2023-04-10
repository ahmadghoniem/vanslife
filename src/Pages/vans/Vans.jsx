import React, { useState } from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/images/placeholder.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Vans = () => {
  const [vans, setVans] = useState(
    Array(2).fill({
      id: "",
      name: "",
      imageUrl: "",
      price: "",
      type: "",
    })
  );
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
      });
  }, []);
  const vanElements = vans.map(({ id, name, imageUrl, price, type }, index) => (
    <div key={id || index} className="van-tile">
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
          <h3>{name || <Skeleton height="1.25em" width="30%" />}</h3>
          <p className="van-price">
            {price ? `$${price}/day` : <Skeleton width="15%" />}
          </p>
        </div>
        {type ? (
          <i className={`van-type ${type} selected`}>{type}</i>
        ) : (
          <Skeleton width="20%" height="2em" />
        )}
      </Link>
    </div>
  ));
  return (
    <section className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </section>
  );
};
export default Vans;
