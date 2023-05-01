import React, { Suspense } from "react";
import {
  Link,
  Outlet,
  NavLink,
  useLoaderData,
  Await,
  useAsyncValue,
} from "react-router-dom";
import { HostVansDetailsSkeleton } from "../../skeletonScreens/HostVansDetailsSkeleton";

const HostVanDetails = () => {
  const { hostVanDetailsPromise } = useLoaderData();
  const RenderHostVanDetails = () => {
    const { name, price, imageUrl, type } = useAsyncValue();

    return (
      <div style={{ backgroundColor: "#fff", padding: "2rem" }}>
        <div className="host-van-detail">
          <img src={imageUrl} />

          <div className="host-van-info">
            <i className={`van-type ${type} selected`}>{type}</i>

            <h2>{name}</h2>
            <span className="van-price">
              <b>${price}</b>/day
            </span>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink end to=".">
            Details
          </NavLink>
          <NavLink to="pricing">Pricing</NavLink>
          <NavLink to="photos">Photos</NavLink>
        </nav>
        <Outlet context={{ vanDetail: useAsyncValue() }} />
      </div>
    );
  };
  return (
    <section className="host-van-detail-container">
      <Link className="back-button" to="..">
        &larr; back to all vans
      </Link>
      <Suspense fallback={<HostVansDetailsSkeleton />}>
        <Await resolve={hostVanDetailsPromise}>
          <RenderHostVanDetails />
        </Await>
      </Suspense>
    </section>
  );
};
export default HostVanDetails;

{
  /** by default Links are relative to the parent route Not the path in your browser
   *  if we wan't to back one level into the path we are in and not to the parent router
   *  we add relative and set it to "path" instead of the default route
   * note: it will go back one level from /vans/modest-explorer-1/pricing to /vans/modest-explorer-1
   * so a relative path may not be the optimal solution
   * instead you can either use an absolute path to="/host/vans" or use relative="route" with a nested route for the vans
   * which is what's implemented so it can be the parent instead of host  */
}
