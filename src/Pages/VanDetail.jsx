import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const VanDetail = () => {
  const params = useParams();
  const [vanDetail, setVanDetail] = useState({});
  useEffect(() => {
    fetch(`/api/vans/${params.name}`)
      .then((res) => res.json())
      .then((data) => {
        setVanDetail(data.vans);
      });
  }, [params.name]);
  return (
    <section className="van-detail-container">
      {!!Object.keys(vanDetail).length ? (
        <div className="van-detail">
          <img src={vanDetail.imageUrl} />
          <i className={`van-type ${vanDetail.type} selected`}>
            {vanDetail.type}
          </i>
          <h2>{vanDetail.name}</h2>
          <p className="van-price">
            <span>${vanDetail.price}</span>/day
          </p>
          <p>{vanDetail.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
};
export default VanDetail;
