import React, { useState, useEffect } from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import getVans from "../../api";
import imgPlaceholder from "../../assets/images/placeholder.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// data fetching is now outside of our component and react router (through passing the loader function to the router prop)
// will delay rendering the component that's being passed to the element prop till the data is fetched from the api
export function loader() {
  return getVans();
}

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const vans = useLoaderData();
  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) prevParams.delete(key);
      else prevParams.set(key, value);
      return prevParams;
    });
  }

  /*   useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, []); */
  /*   if (error) {
    return <h1>There was an error:{error.msg} </h1>;
  } */
  const displayedVans = typeFilter
    ? vans.filter(({ type }) => type.toLowerCase() === typeFilter.toLowerCase())
    : vans;

  const vanElements = displayedVans.map(
    ({ id, name, imageUrl, price, type }, index) => (
      <div key={id || index} className="van-tile">
        <Link
          to={`./${name.replace(/ /g, "-").toLowerCase()}-${id}`}
          state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
        >
          <img src={imageUrl || imgPlaceholder} />

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
    )
  );

  return (
    <section className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`van-type luxury  ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`van-type rugged  ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
        >
          Rugged
        </button>
        {typeFilter && (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="van-type clear-filters"
          >
            Clear filter
          </button>
        )}
      </div>
      <div className="van-list">{vanElements}</div>
    </section>
  );
};
export default Vans;
