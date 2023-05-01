import { useOutletContext } from "react-router-dom";
import imgPlaceholder from "../../assets/images/placeholder.png";
const HostVansPhotos = () => {
  const {
    vanDetail: { imageUrl = "" },
  } = useOutletContext();
  return (
    <img src={imageUrl || imgPlaceholder} className="host-van-detail-image" />
  );
};
export default HostVansPhotos;
