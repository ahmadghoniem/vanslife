import { useOutletContext } from "react-router-dom";

const HostVansPhotos = () => {
  const { vanDetail } = useOutletContext();
  return <img src={vanDetail.imageUrl} />;
};
export default HostVansPhotos;
