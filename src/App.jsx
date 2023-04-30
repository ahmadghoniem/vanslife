import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Homepage";
import About from "./pages/About";
// host page
import {
  Dashboard,
  Income,
  HostVans,
  HostVanDetail,
  HostVanPricing,
  HostVanPhotos,
  HostVanInfo,
  Reviews,
} from "./pages/host";
// vans page
import { VanDetail, Login, Vans } from "./pages/vans";

//components
import { ErrorElement, HostLayout, NotFound, Layout } from "./components";

// utilities
import requireAuth from "./utils";
import "./server";

// loaders
import {
  vansLoader,
  VanDetailsLoader,
  HostVansLoader,
  HostVanDetailsLoader,
  loginLoader,
  defaultLoader,
} from "./loaders";

//Actions
import { loginAction } from "./actions/loginAction";
{
  /**  createBrowserRouter
   * This is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack.
   * It also enables the v6.4 data APIs like loaders, actions, fetchers and more.
   * also a <Link> renders an accessible <a> element that doesn't reload the page with a real href that points to the resource it's linking to.
   * using loaders with protected routes you would need to redirect the user in every loader not only the parent loader
   * because they run asynchronously parallel to each other and one may return that the user for example not logged in
   * before the other therefor you will to need to use it in every loader */
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={Layout}>
      <Route index Component={Home} />
      <Route
        path="login"
        Component={Login}
        loader={loginLoader}
        action={loginAction}
      />
      <Route path="about" Component={About} />
      <Route path="vans">
        <Route
          index
          Component={Vans}
          ErrorBoundary={ErrorElement}
          // this ErrorBoundary shall be rendered instead of the actual vans element
          // if any problem occured in rendering the vans element or with the loader
          loader={vansLoader}
        />
        <Route
          loader={VanDetailsLoader}
          path=":name_id"
          Component={VanDetail}
        />
      </Route>
      <Route path="Host" loader={defaultLoader} Component={HostLayout}>
        <Route index loader={defaultLoader} Component={Dashboard} />

        <Route path="vans">
          <Route index Component={HostVans} loader={HostVansLoader} />
          <Route
            path=":name_id"
            loader={HostVanDetailsLoader}
            Component={HostVanDetail}
          >
            <Route loader={defaultLoader} index Component={HostVanInfo} />
            <Route
              loader={defaultLoader}
              path="pricing"
              Component={HostVanPricing}
            />
            <Route
              loader={defaultLoader}
              path="photos"
              Component={HostVanPhotos}
            />
          </Route>
        </Route>
        <Route loader={defaultLoader} path="Income" Component={Income} />
        <Route loader={defaultLoader} path="Reviews" Component={Reviews} />
      </Route>
      <Route path="*" Component={NotFound} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
