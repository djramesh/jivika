import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faMap,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/contact.css";

function Contact() {
  return (
    <div className="container-fluid">
      <div className="products-section">
        <div className="product-bg">
          <img src="/contact_bnr_img.jpg" alt="products" />
        </div>
        <div className="product-overlay"></div>
        <div className="product-content">
          <h1 className="product-title">Contact us</h1>
        </div>
      </div>

      <div className="mt-5 d-flex flex-column flex-md-row justify-content-center align-items-center">
        <div>
          <h1 className="font-weight-bold">
            We’re Ready to Help You! <br /> Need Any Foods or <br />{" "}
            Consultations?
          </h1>
          <a href="mailto:lochan.dutta@schoolnetindia.com">
            <p className="mt-5">
              <span className="span-contact">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                lochan.dutta@schoolnetindia.com
              </span>
            </p>
          </a>
          <a href="tel:8133991098">
            <p>
              <span className="span-contact">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                +91 8133991098
              </span>
            </p>
          </a>{" "}
        </div>
        <div>
          <img src="/about-us-img-3.png" alt="" className="contact-img" />
        </div>
      </div>
      {/* <div className="contact-cards">
        <div className="email">
          <h3>Email</h3>
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />{" "}
          lochandutta@gmail.com
        </div>
        <div className="email">
          <h3>Email</h3>
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />{" "}
          lochandutta@gmail.com
        </div>
        <div className="email">
          <h3>Email</h3>
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />{" "}
          lochandutta@gmail.com
        </div>
      </div> */}
      <div className="location">
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(230, 255, 8, 0.71) 10%, transparent 60%)",
          }}
        >
          <h2>
            <FontAwesomeIcon icon={faMap} className="me-2" />
            Our Location
          </h2>
          <br />
          <h3>Locate us through map</h3>
          <address>
            <a
              href="https://www.google.com/maps/search/S.B.+Complex,+hatigaon/@26.137904,91.785799,5424m/data=!3m1!1e3?hl=en&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              SB Complex, H.no-5 <br />
              Brindavan Path, Hatigaon Main Road <br />
              Kamrup, Guwahati <br />
              Assam, 781038
            </a>
          </address>
        </div>

        <div className="map-container">
          <iframe
            width="98%"
            height="300"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=S.B.%20Complex,%20hatigaon+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
