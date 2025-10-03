import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-modern text-white py-5 mt-3">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-3 col-12 text-center text-md-start mb-4 mb-md-0">
            <img
              src="https://www.webappfactory.co/jeevika/assets/images/logo/logo.svg"
              alt="Jeevika Logo"
              className="footer-logo img-fluid"
            />
          </div>

          <div className="col-md-4 col-12 text-center mb-4 mb-md-0">
            <h3 className="footer-title">
              <FontAwesomeIcon icon={faMap} className="me-2" /> Our
              Location
            </h3>
            <p className="footer-text">
              <a
                href="https://www.google.com/maps/search/S.B.+Complex,+hatigaon/@26.137904,91.785799,5424m/data=!3m1!1e3?hl=en&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank" className="address"
              >
                SB Complex, H.no-5 <br />
                Brindavan Path, Hatigaon Main Road <br />
                Kamrup, Guwahati <br />
                Assam, 781038
              </a>
            </p>
          </div>

          <div className="col-md-4 col-12 text-center mb-4 mb-md-0">
            <h3 className="footer-title">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Get in
              Touch
            </h3>
            <a
              href="mailto:lochan.dutta@schoolnetindia.com"
              className="footer-link email-link"
            >
              lochan.dutta@schoolnetindia.com
            </a>{" "}
            <a href="tel:8133991098" className="footer-link email-link">
              {" "}
              +91 8133991098
            </a>
          </div>
        </div>

        <hr className="footer-divider my-4" />

        <div className="about row justify-content-between">
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <h4 className="footer-subtitle">About Jeevika</h4>
            <p className="footer-text">
              Jeevika Project, an initiative supported by Oil India Limited (OIL)
              under its CSR program aimed at enhancing quality of life of rural
              communities in the Project areas of OIL through their economic
              upliftment, social inclusion, and sustainable development leading to
              empowerment of the rural communities The project embraces a value
              chain development approach in select high value
              agri/horticulture-crops and creating entrepreneurs in both farm and
              non-farm sectors.
            </p>
          </div>

          <div className="col-md-3 col-12">
            <h4 className="footer-subtitle">Explore</h4>
            <ul className="list-unstyled footer-links">
              <li>
                <Link to='/about' className="footer-link">
                  → About Us
                </Link>
              </li>
              <li>
                <Link to='/gallery' className="footer-link">
                  → Gallery
                </Link>
              </li>
              <li>
                <Link to='/cluster/tea' className="footer-link">
                  → Cluster
                </Link>
              </li>
              <li>
                <Link to="/product" className="footer-link">
                  → Products
                </Link>
              </li>
              <li>
                <Link to='/contact' className="footer-link">
                  → Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Jeevika. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
