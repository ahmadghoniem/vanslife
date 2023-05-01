import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useOutletContext } from "react-router-dom";

const HostVansPricing = () => {
  const {
    vanDetail: { price = "" },
  } = useOutletContext();
  return (
    <h3 className="host-van-price">
      price:
      {price ? <span>{price}$/day</span> : <Skeleton width="10%" />}
    </h3>
  );
};
export default HostVansPricing;
