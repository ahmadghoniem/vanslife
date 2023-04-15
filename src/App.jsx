import React from "react";
import Home from "./Pages/Homepage";
import About from "./Pages/About";
import Dashboard from "./Pages/host/Dashboard";
import Income from "./Pages/host/Income";
import HostVans from "./Pages/host/HostVans";
import HostVanDetails from "./Pages/host/HostVanDetails";
import HostVanPricing from "./Pages/host/HostVanPricing";
import HostVanPhotos from "./Pages/host/HostVanPhotos";
import HostVanInfo from "./Pages/host/HostVanInfo.jsx";
import Reviews from "./Pages/host/Reviews";
import Vans from "./Pages/vans/Vans";
import VanDetail from "./Pages/vans/VanDetail";
import HostLayout from "./Components/HostLayout";
import NotFound from "./Components/NotFound";

import "./server";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
{
  /** a <Link> renders an accessible <a> element that doesn't reload the page with a real href that points to the resource it's linking to.  */
}
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/**because there's no shared UI between the Van and the VanDetail components
           * there's no need to add an element prop with a layout component to the parent Route to be able to display the child components
           * when they match their urls
           * so you can just have the path prop and the child Routes relative to the parent path
           * and because there's no shared UI it's not really recommended to nest the Routes (this goes for hostVans and hostVansDetails aswell)
           * below is the nested route option
           */}

          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":name_id" element={<VanDetail />} />
          </Route>

          {/* <Route path="Vans" element={<Vans />} />
            <Route path="Vans/:name_id" element={<VanDetail />} /> */}

          <Route path="Host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:name_id" element={<HostVanDetails />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>

            <Route path="Income" element={<Income />} />
            <Route path="Reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        {/** react router will look at any sections of the path that have a colon before it
         *   and it will add that as the key in the key/value pair in the object that we get from Useparams()  */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
