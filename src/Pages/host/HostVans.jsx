import React, { useState } from "react";
import { Await, Link, NavLink, useLoaderData } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import imgPlaceholder from "../../assets/images/placeholder.png";
import "react-loading-skeleton/dist/skeleton.css";

const HostVans = () => {
  // hard coding the hostId as if we have it after the user logged in
  const { hostVansPromise } = useLoaderData();
  /*   const [vans, setVans] = useState([
    {
      id: "",
      name: "",
      imageUrl: "",
      price: "",
      type: "",
    },
  ]); */
  /*   React.useEffect(() => {
    fetch(`/api/host/vans`)
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
      });
  }, []); */

  const vanElements = (vans) => {
    return vans.map(({ id, name, imageUrl, price }, index) => (
      <div key={id || index} className="host-van-tile">
        <Link to={`./${name.replace(/ /g, "-").toLowerCase()}-${id}`}>
          <img src={imageUrl || imgPlaceholder} />

          <div className="van-info">
            <h2>{name || <Skeleton height="1.25em" width="30%" />}</h2>
            <p className="van-price">
              {price ? `$${price}/day` : <Skeleton width="15%" />}
            </p>
          </div>
        </Link>
      </div>
    ));
  };
  return (
    <section className="host-van-list-container">
      <h1>Your listed vans</h1>
      <div className="host-van-list">
        <React.Suspense fallback={<h1>loading host vans..</h1>}>
          <Await resolve={hostVansPromise}>{(vans) => vanElements(vans)}</Await>
        </React.Suspense>
      </div>
    </section>
  );
};

export default HostVans;
