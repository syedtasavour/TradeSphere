import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductPage from "./landing_page/products/ProductPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";
import NavBar from "./landing_page/NavBar";
import Footer from "./landing_page/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <BrowserRouter>
  <NavBar/>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/pricing" element={<PricingPage/>} />
        <Route path="/product-page" element={<ProductPage/>}/>
        <Route path="/support-page" element={<SupportPage/>}/>
        <Route path="*" element={<NotFound />} />

    </Routes>
    <Footer/>
  </BrowserRouter>
);
