import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const {
    vanDetail: { name = "", type = "", description = "" },
  } = useOutletContext();

  return (
    <section className="host-van-detail-info">
      <h4>Name: {name ? <span>{name}</span> : <Skeleton width="15%" />}</h4>
      <h4>Category: {type ? <span>{type}</span> : <Skeleton width="15%" />}</h4>
      <h4>
        Description:
        {type ? <span>{description}</span> : <Skeleton width="15%" />}
      </h4>
      <h4>
        Visibility: {type ? <span>Public</span> : <Skeleton width="15%" />}
      </h4>
    </section>
  );
};
export default HostVanInfo;
