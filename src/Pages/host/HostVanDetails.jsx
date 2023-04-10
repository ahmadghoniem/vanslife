import { useEffect, useState } from "react";
import { Link, Outlet, useParams, NavLink } from "react-router-dom";
import placeholder from "../../assets/images/placeholder.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HostVanDetails = () => {
  const { name_id } = useParams();
  const [vanDetail, setVanDetail] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    type: "",
  });

  useEffect(() => {
    fetch(`/api/host/vans/${name_id}`)
      .then((res) => res.json())
      .then((data) => {
        setVanDetail(
          data.vans[0] ?? {
            name: "",
            description: "",
            price: "",
            imageUrl: "",
            type: "",
          }
        );
      });
  }, [name_id]);
  const { name, price, imageUrl, type } = vanDetail;

  return (
    <section className="host-van-detail-container">
      <Link className="back-button" relative="path" to="..">
        {/** by default Links are relative to the parent route Not the path in your browser
         *  if we wan't to back one level into the path we are in and not to the parent router
         *  we add relative and set it to "path" instead of the default route */}
        back to all vans
      </Link>
      <div style={{ backgroundColor: "#fff", padding: "2rem" }}>
        <div className="host-van-detail">
          {imageUrl ? (
            <img src={imageUrl} />
          ) : (
            <div className="vans-loader-container">
              <img src={placeholder} />
              <div className="dot-flashing" style={{ margin: "0 auto" }}></div>
            </div>
          )}
          <div className="host-van-info">
            {type ? (
              <i className={`van-type ${type} selected`}>{type}</i>
            ) : (
              <Skeleton width="15%" height="2em" inline={true} />
            )}
            <h2>{name || <Skeleton width="30%" />}</h2>
            <span className="van-price">
              {price ? (
                <>
                  <b>${price}</b>/day
                </>
              ) : (
                <Skeleton width="15%" />
              )}
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
        <Outlet context={{ vanDetail }} />
      </div>
    </section>
  );
};
export default HostVanDetails;
