import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import PartnerLogos from "./Partnering-logo";
import bgImage from "../assets/farmer-bg-1.jpeg";
// Import other images
import bgImage2 from "../assets/farmer-bg-2.jpeg";
import bgImage3 from "../assets/farmer-bg-3.jpeg";
import bgImage4 from "../assets/farmer-bg-4.jpeg";
import bgImage5 from "../assets/farmer-bg-5.jpeg";
import bgImage6 from "../assets/farmer-bg-6.jpeg";


const Hero = () => {
  const images = [bgImage, bgImage2, bgImage3, bgImage4, bgImage5, bgImage6];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="hero-section">
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      ></div>

      <div className="hero-overlay"></div>

      {/* Navigation Arrows */}
      <button className="slider-arrow left-arrow" onClick={prevSlide}>
        <i className="bi bi-chevron-left"></i>
      </button>
      <button className="slider-arrow right-arrow" onClick={nextSlide}>
        <i className="bi bi-chevron-right"></i>
      </button>

      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-12 text-center">
            <div className="hero-content">
              <h1 className="hero-title text-white mb-4">
                <span className="gradient-text">"Empowering </span> Rural Lives Through Sustainable <span className="gradient-text">Livelihoods</span>"<br />- An initiative of OIL INDIA Ltd.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
