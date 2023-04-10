import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const VanDetail = () => {
  const { name_id } = useParams();
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
  const { name, description, price, imageUrl, type } = vanDetail;
  return (
    <section className="van-detail-container">
      <Link className="back-button" to="..">
        back to all vans
      </Link>
      <div className="van-detail">
        {imageUrl ? (
          <img src={imageUrl} />
        ) : (
          <span className="loader-container">
            <div className="dot-flashing" style={{ margin: "0 auto" }}></div>
          </span>
        )}
        {type ? (
          <i className={`van-type ${type} selected`}>{type}</i>
        ) : (
          <Skeleton width="15%" height="2em" inline={true} />
        )}
        <h2>{name || <Skeleton width="30%" />}</h2>
        <span className="van-price">
          {price ? `$${price}/day` : <Skeleton width="15%" inline={true} />}
        </span>
        <p>
          {description || (
            <>
              <Skeleton height="1em" width={"100%"} inline={true} />
              <Skeleton height="1em" width={"80%"} inline={true} />
              <Skeleton height="1em" width={"90%"} inline={true} />
            </>
          )}
        </p>
        {Object.keys(vanDetail).length > 0 ? (
          <button className="link-button">Rent this van</button>
        ) : (
          <Skeleton height="2.5em" width="100%" style={{ margin: "0 auto" }} />
        )}
      </div>
    </section>
  );
};
export default VanDetail;
