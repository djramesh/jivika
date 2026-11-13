import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="jv-footer">
      <div className="jv-container">
        <div className="row g-4 justify-content-between">
          <div className="col-12 col-lg-4">
            <Link to="/" className="d-inline-block mb-3">
              <BrandLogo variant="light" />
            </Link>
            <p className="small lh-lg mb-3" style={{ color: "rgba(255,255,255,0.75)" }}>
              Supported by Oil India Limited (OIL) under its CSR program, Jeevika empowers rural communities in Tinsukia, Assam through high-value crop value chains and women-led micro-enterprises.
            </p>
            <div className="d-flex flex-wrap gap-2 small">
              <span
                className="px-3 py-1 rounded-pill"
                style={{ background: "rgba(255,255,255,0.08)", color: "#f8d48b" }}
              >
                14 Villages
              </span>
              <span
                className="px-3 py-1 rounded-pill"
                style={{ background: "rgba(255,255,255,0.08)", color: "#f8d48b" }}
              >
                900+ Farmers
              </span>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <h3 className="jv-footer__heading">Marketplace</h3>
            <ul className="jv-footer__list">
              <li>
                <Link to="/product" className="jv-footer__link">All Products</Link>
              </li>
              <li>
                <Link to="/product?category=Spices" className="jv-footer__link">Assam Spices</Link>
              </li>
              <li>
                <Link to="/product?category=Tea" className="jv-footer__link">Small-Grower Tea</Link>
              </li>
              <li>
                <Link to="/product?category=Citrus" className="jv-footer__link">Mandarin &amp; Lemon</Link>
              </li>
              <li>
                <Link to="/product?category=Bamboo%20%26%20Craft" className="jv-footer__link">Bamboo &amp; SHG Crafts</Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <h3 className="jv-footer__heading">Explore</h3>
            <ul className="jv-footer__list">
              <li>
                <Link to="/clusters" className="jv-footer__link">Crop Clusters</Link>
              </li>
              <li>
                <Link to="/about" className="jv-footer__link">About &amp; Impact</Link>
              </li>
              <li>
                <Link to="/gallery" className="jv-footer__link">Field Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="jv-footer__link">Wholesale Inquiry</Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4 col-lg-3">
            <h3 className="jv-footer__heading">Coordination Office</h3>
            <p className="small mb-2" style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              SB Complex, H.No-5, Brindavan Path<br />
              Hatigaon Main Road, Kamrup<br />
              Guwahati, Assam 781038
            </p>
            <div className="d-flex flex-column gap-1 small">
              <a
                href="mailto:lochan.dutta@schoolnetindia.com"
                className="jv-footer__link text-break"
              >
                <i className="bi bi-envelope me-2" />
                lochan.dutta@schoolnetindia.com
              </a>
              <a href="tel:8133991098" className="jv-footer__link">
                <i className="bi bi-telephone me-2" />
                +91 8133991098
              </a>
            </div>
          </div>
        </div>

        <div className="jv-footer__bottom d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
          <span>© {new Date().getFullYear()} Project Jeevika — Oil India Limited CSR Initiative.</span>
          <span>Empowering Rural Assam • Farm to Table</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
