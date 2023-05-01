import React, { useState, useEffect } from "react";
import {
  Link,
  useSearchParams,
  useLoaderData,
  Await,
  ScrollRestoration,
  useAsyncValue,
} from "react-router-dom";
import { VansSkeleton } from "../../skeletonScreens/VansSkeleton";
// data fetching is now outside of our component and react router (through passing the loader function to the router prop)
// will delay rendering the component that's being passed to the element prop also transitioning to the route url untill
// the data is fetched from the api

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const { vansPromise } = useLoaderData();
  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      value === null ? prevParams.delete(key) : prevParams.set(key, value);
      return prevParams;
    });
  }
  const RenderVans = () => {
    const vans = useAsyncValue();

    const displayedVans = typeFilter
      ? vans.filter(
          ({ type }) => type.toLowerCase() === typeFilter.toLowerCase()
        )
      : vans;

    const vanElements = displayedVans.map(
      ({ id, name, imageUrl, price, type }) => (
        <div key={id} className="van-tile">
          <Link
            to={`${name.replaceAll(" ", "-").toLowerCase()}-${id}`}
            state={{
              search: `?${searchParams.toString()}`,
              type: typeFilter,
            }}
          >
            <img src={imageUrl} />
            <div className="van-info">
              <h3>{name}</h3>
              <p className="van-price">{`$${price}/day`}</p>
            </div>
            <i className={`van-type ${type} selected`}>{type}</i>
          </Link>
        </div>
      )
    );
    return <div className="van-list">{vanElements}</div>;
  };

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

      {/**Await is a react-router-dom component Used to render deferred values with automatic error handling.
       * React Suspense is a mechanism introduced in React 16 that allows components to "suspend" rendering while they're waiting for some asynchronous data to load. */}

      <React.Suspense fallback={<VansSkeleton />}>
        <Await
          /* errorElement={<h1>i can have an error element of my own!</h1>} */
          /**resolve Takes a promise returned from a deferred loader value to be resolved and rendered */
          resolve={vansPromise}
        >
          <RenderVans />
        </Await>
      </React.Suspense>
      <ScrollRestoration />
    </section>
  );
};
export default Vans;

//while trying built-in skeleton states with a loading prop the component re-rendered three times
// while a deidicated loading screen was the best solution because the component only runs and renders once
// also separating the loading screen from the vans component makes it more flexible and easier to manage
