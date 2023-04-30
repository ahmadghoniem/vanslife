import { defer } from "react-router-dom";
import { getHostVans } from "../api";
import requireAuth from "../utils";

const HostVansLoader = async ({ request }) => {
  await requireAuth(request);
  return defer({ hostVansPromise: getHostVans() });
};

export { HostVansLoader };
