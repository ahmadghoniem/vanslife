import React, { useEffect, useState, Suspense } from "react";
import {
  Link,
  useLocation,
  useLoaderData,
  Await,
  useAsyncValue,
} from "react-router-dom";
import { VanDetailsSkeleton } from "../../skeletonScreens/VanDetailsSkeleton";

const VanDetails = () => {
  const location = useLocation();
  const search = location.state?.search || "";
  const typeFilter = location.state?.type || "all";
  const { vanDetailsPromise } = useLoaderData();

  const RenderVanDetails = () => {
    const { name, description, price, imageUrl, type } = useAsyncValue();

    return (
      <div className="van-detail">
        <img src={imageUrl} />
        <i className={`van-type ${type} selected`}>{type}</i>

        <h2>{name}</h2>
        <span className="van-price">{`$${price}/day`}</span>
        <p>{description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    );
  };
  return (
    <section className="van-detail-container">
      <Link className="back-button" to={`..${search}`}>
        &larr; back to {typeFilter} vans
      </Link>
      <Suspense fallback={<VanDetailsSkeleton />}>
        <Await resolve={vanDetailsPromise}>
          <RenderVanDetails />
        </Await>
      </Suspense>
    </section>
  );
};
export default VanDetails;
