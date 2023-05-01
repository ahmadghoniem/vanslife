import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import imgPlaceholder from "../assets/images/placeholder.png";

const VansSkeleton = () => {
  const skeletonVans = Array(2)
    .fill(0)
    .map((_, id) => (
      <div key={id} className="van-tile">
        <img src={imgPlaceholder} />
        <div className="van-info">
          <h3>{<Skeleton width="30%" />}</h3>
          <p className="van-price">{<Skeleton width="15%" />}</p>
        </div>
        <Skeleton width="20%" />
      </div>
    ));
  return <div className="van-list">{skeletonVans}</div>;
};
export { VansSkeleton };
