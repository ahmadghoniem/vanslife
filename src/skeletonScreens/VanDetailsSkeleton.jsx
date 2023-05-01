import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import imgPlaceholder from "../assets/images/placeholder.png";

const VanDetailsSkeleton = () => (
  <div className="van-detail">
    <img src={imgPlaceholder} />
    <Skeleton width="15%" height="2em" />
    <h2>
      <Skeleton width="30%" />
    </h2>
    <span className="van-price">
      <Skeleton width="15%" />
    </span>
    <p>
      <Skeleton height="1em" width={"100%"} />
      <Skeleton height="1em" width={"80%"} />
      <Skeleton height="1em" width={"90%"} />
    </p>
    <Skeleton height="2.5em" width="100%" />
  </div>
);
export { VanDetailsSkeleton };
