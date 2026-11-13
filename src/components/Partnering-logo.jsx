import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";

const PartnerLogos = () => {
  return (
    <section className="partner-section" aria-label="Partnering Institutions">
      <div className="jv-container">
        <h2 className="partner-heading">Partnering Institutions</h2>
        <p className="partner-subheading">
          Supported by leading public enterprises, agricultural research bodies, and grassroots collectives
        </p>
      </div>
      <div className="partner-logos-container">
        <div className="logo-track">
          {[1, 2].map((set) => (
            <div key={set} className="logo-set">
              <img src={logo1} alt="Oil India Limited & Implementing Partner" className="partner-logo" />
              <img src={logo2} alt="Agricultural Institutional Partner" className="partner-logo" />
              <img src={logo3} alt="Value Chain Technical Partner" className="partner-logo" />
              <img src={logo4} alt="Community Collective Partner" className="partner-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
