import React from "react";
import Home from "./Pages/Homepage";
import About from "./Pages/About";
import Dashboard from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
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
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:name" element={<VanDetail />} />

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
