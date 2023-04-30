import React, { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useParams,
  useLoaderData,
  Await,
} from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import imgPlaceholder from "../../assets/images/placeholder.png";

const VanDetails = () => {
  const location = useLocation();
  const search = location.state?.search || "";
  const typeFilter = location.state?.type || "all";
  const { vanDetailsPromise } = useLoaderData();

  return (
    <section className="van-detail-container">
      <Link className="back-button" to={`..${search}`}>
        &larr; back to {typeFilter} vans
      </Link>
      <React.Suspense fallback={<h1>loading van details...</h1>}>
        <Await resolve={vanDetailsPromise}>
          {(vanDetails) => {
            const { name, description, price, imageUrl, type } = vanDetails[0];

            return (
              <div className="van-detail">
                <img src={imageUrl || imgPlaceholder} />
                {type ? (
                  <i className={`van-type ${type} selected`}>{type}</i>
                ) : (
                  <Skeleton width="15%" height="2em" />
                )}
                <h2>{name || <Skeleton width="30%" />}</h2>
                <span className="van-price">
                  {price ? `$${price}/day` : <Skeleton width="15%" />}
                </span>
                <p>
                  {description || (
                    <>
                      <Skeleton height="1em" width={"100%"} />
                      <Skeleton height="1em" width={"80%"} />
                      <Skeleton height="1em" width={"90%"} />
                    </>
                  )}
                </p>
                {name ? (
                  <button className="link-button">Rent this van</button>
                ) : (
                  <Skeleton height="2.5em" width="100%" />
                )}
              </div>
            );
          }}
        </Await>
      </React.Suspense>
    </section>
  );
};
export default VanDetails;
/* 
  const [vanDetail, setVanDetail] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    type: "",
  }); */

// as far as now i can't use skeleton loading with data loaders
/*   useEffect(() => {
    fetch(`/api/vans/${name_id}`)
      .then((res) => res.json())
      .then((data) => {
        setVanDetail(
          data.vans ?? {
            name: "",
            description: "",
            price: "",
            imageUrl: "",
            type: "",
          }
        );
      });
  }, [name_id]); */
