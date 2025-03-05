import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/farmer-bg.jpg";

const Hero = () => {
  return (
    <div className="hero-section">
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      <div className="hero-overlay"></div>

      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-12 text-center">
            <div className="hero-content">
              <h1 className="hero-title text-white mb-4">
                <span className="gradient-text">Enhancing</span> high-value
                <br />
                crop-value chains.
              </h1>
              <div className="d-flex justify-content-center gap-4 mt-5">
                <Link to="/contact" className="custom-btn btn-primary-gradient">
                  <span>Enquire</span>
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
                <Link to="/about" className="custom-btn btn-glass">
                  <span>About us</span>
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
