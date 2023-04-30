import { defer } from "react-router-dom";
import { getHostVans } from "../api";
import requireAuth from "../utils";
const HostVanDetailsLoader = async ({ params: { name_id }, request }) => {
  await requireAuth(request);
  return defer({ hostVanDetailsPromise: getHostVans(name_id) });
};
export { HostVanDetailsLoader };
