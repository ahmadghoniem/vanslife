import { defer } from "react-router-dom";
import { getVans } from "../api";
// previously vansLoader was an async function and we would await the getVans() promise till it get resolved then we would returns vans data
// and that would cause a delay in the transition to the Route because we were awaiting the promise to be resolved

// right not we are defering the vans to a later time (after the route transition happens)
// so now vansLoader is no longer an async function that will await the getVans async function and return the resolved promise (the vans)
// as we will be using the promise itself and won't wait till it get resolved this time
const vansLoader = () => defer({ vansPromise: getVans() });
export { vansLoader };
//defering the loading of our vans to after the route transition happens
// meaning that we will transition to the route first then load the data
// think of it like how the useEffect runs

// return defer({ vans: getVans(), user: await getUser() })

/* the API that React Router exposes for this is extremely ergonomic.
You can literally switch between whether something is going to be deferred or not based on whether you include the await keyword: */

// if there's information that's crucial to being loaded before the route transition happens
// or data that won't take much time and can provide better UX we can use the await keyword to wait the data (users)
// and whenever the getVans promise is resolved it's data will be available for use
