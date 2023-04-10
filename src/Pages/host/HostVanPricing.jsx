import { useOutletContext } from "react-router-dom";

const HostVansPricing = () => {
  const { vanDetail } = useOutletContext();
  return (
    <h3 className="host-van-price">
      ${vanDetail.price}
      <span>/day</span>
    </h3>
  );
};
export default HostVansPricing;
