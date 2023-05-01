import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import imgPlaceholder from "../assets/images/placeholder.png";
import { NavLink, Outlet } from "react-router-dom";

const HostVansDetailsSkeleton = () => (
  <div style={{ backgroundColor: "#fff", padding: "2rem" }}>
    <div className="host-van-detail">
      <img src={imgPlaceholder} />

      <div className="host-van-info">
        <h2>
          <Skeleton width="15%" />
        </h2>
        <h2>{<Skeleton width="30%" />}</h2>
        <span className="van-price">
          <Skeleton width="15%" />
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
    <Outlet context={{ vanDetail: {} }} />
  </div>
);

export { HostVansDetailsSkeleton };
