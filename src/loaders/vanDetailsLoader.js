// since you can't use the useParam hook outside of a functional component
// react-router-dom passes an object to the loader function which contains the params being passed to the route you are in
// similar to the useParam hook

import { defer } from "react-router-dom";
import { getVan } from "../api";
import requireAuth from "../utils";

const VanDetailsLoader = async ({ params: { name_id }, request }) => {
  await requireAuth(request);
  return defer({ vanDetailsPromise: getVan(name_id) });
};
export { VanDetailsLoader };
