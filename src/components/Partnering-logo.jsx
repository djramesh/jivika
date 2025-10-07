import React from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";

const PartnerLogos = () => {
  return (
    <section className="partner-section">
      <h2 className="partner-heading">Partnering Institutions</h2>
      <div className="partner-logos-container">
        <div className="partner-logos">
          <div className="logo-track">
            {[1, 2].map((set) => (
              <div key={set} className="logo-set">
                <img src={logo1} alt="Partner Logo 1" className="partner-logo" />
                <img src={logo2} alt="Partner Logo 2" className="partner-logo" />
                <img src={logo3} alt="Partner Logo 3" className="partner-logo" />
                <img src={logo4} alt="Partner Logo 4" className="partner-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;

