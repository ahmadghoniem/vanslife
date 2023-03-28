import React from "react";
import Home from "./Pages/Homepage";
import About from "./Pages/About";
import Dashboard from "./Pages/host/Dashboard";
import Income from "./Pages/host/Income";
import Reviews from "./Pages/host/Reviews";
import Vans from "./Pages/vans/Vans";
import VanDetail from "./Pages/vans/VanDetail";
import HostLayout from "./Components/HostLayout";
import "./server";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";

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
           * and because there's no shared UI it's not really recommended to nest the Routes
           */}
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":name" element={<VanDetail />} />
          </Route>

          <Route path="Host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="Income" element={<Income />} />
            <Route path="Reviews" element={<Reviews />} />
          </Route>
        </Route>
        {/** react router will look at any sections of the path that have a colon before it
         *   and it will add that as the key in the key/value pair in the object that we get from Useparams()  */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
