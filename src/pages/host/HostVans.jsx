import React, { Suspense } from "react";
import { Await, Link, useAsyncValue, useLoaderData } from "react-router-dom";
import { HostVansSkeleton } from "../../skeletonScreens/HostVansSkeleton";

const HostVans = () => {
  const { hostVansPromise } = useLoaderData();

  const RenderHostVans = () => {
    const vans = useAsyncValue();
    return vans.map(({ id, name, imageUrl, price }) => (
      <div key={id} className="host-van-tile">
        <Link to={`./${name.replace(/ /g, "-").toLowerCase()}-${id}`}>
          <img src={imageUrl} />
          <div className="van-info">
            <h2>{name}</h2>
            <p className="van-price">{`$${price}/day`}</p>
          </div>
        </Link>
      </div>
    ));
  };

  return (
    <section className="host-van-list-container">
      <h1>Your listed vans</h1>
      <div className="host-van-list">
        <Suspense fallback={<HostVansSkeleton />}>
          <Await resolve={hostVansPromise}>
            <RenderHostVans />
          </Await>
        </Suspense>
      </div>
    </section>
  );
};

export default HostVans;
