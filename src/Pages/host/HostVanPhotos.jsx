import { useOutletContext } from "react-router-dom";

const HostVansPhotos = () => {
  const { vanDetail } = useOutletContext();
  return <img src={vanDetail.imageUrl} className="host-van-detail-image" />;
};
export default HostVansPhotos;
