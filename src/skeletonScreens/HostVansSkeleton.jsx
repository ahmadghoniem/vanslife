import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import imgPlaceholder from "../assets/images/placeholder.png";

const HostVansSkeleton = () => {
  return [""].map((_, index) => (
    <div key={index} className="host-van-tile">
      <a>
        <img src={imgPlaceholder} />
        <div className="host-van-info">
          <h2>
            <Skeleton width="30%" />
          </h2>
          <p className="van-price">
            <Skeleton width="15%" />
          </p>
        </div>
      </a>
    </div>
  ));
};
export { HostVansSkeleton };
