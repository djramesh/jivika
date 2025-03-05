import React from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Clusters from "./components/Clusters";
import ClusterDetails from "./components/ClusterDetails";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <ScrollToTop />
      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Clusters />
                <Products />
              </>
            }
          />
          <Route path="/about" element={<About/>} />
          <Route path="/product" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/cluster/:clusterId" element={<ClusterDetails />} />
          <Route
            path="/product-details/:productId"
            element={<ProductDetails />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
