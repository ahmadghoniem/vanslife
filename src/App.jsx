import React from "react";
import Home from "./Pages/Homepage";
import About from "./Pages/About";
import Vans from "./Pages/Vans";
import VanDetail from "./Pages/VanDetail";
import Footer from "./Components/Footer";
import "./server";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:name" element={<VanDetail />} />
        </Route>
        {/** react router will look at any sections of the path that have a colon before it
         *   and it will add that as the key in the key/value pair in the object that we get from Useparams()  */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
