import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import imgPlaceholder from "../../assets/images/placeholder.png";
const VanDetail = () => {
  const { name_id } = useParams();
  const location = useLocation();
  const search = location.state?.search || "";
  const typeFilter = location.state?.type || "all";

  const [vanDetail, setVanDetail] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    type: "",
  });
  useEffect(() => {
    fetch(`/api/vans/${name_id}`)
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
  console.log(Object.keys(vanDetail));
  const { name, description, price, imageUrl, type } = vanDetail;
  return (
    <section className="van-detail-container">
      <Link className="back-button" to={`..${search}`}>
        &larr; back to {typeFilter} vans
      </Link>
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
    </section>
  );
};
export default VanDetail;
