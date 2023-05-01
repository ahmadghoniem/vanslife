import { defer } from "react-router-dom";
import { getVan } from "../api";
import requireAuth from "../utils";
const HostVanDetailsLoader = async ({ params: { name_id }, request }) => {
  await requireAuth(request);
  return defer({ hostVanDetailsPromise: getVan(name_id) });
};
export { HostVanDetailsLoader };
