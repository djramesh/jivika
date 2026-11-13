import { Link } from "react-router-dom";
import { IMPACT_METRICS } from "../data/catalog";
import SmartImage from "./SmartImage";
import "../styles/about.css";

function About() {
  return (
    <div>
      <section className="jv-page-banner">
        <SmartImage
          src="/abt_bnr_img.jpg"
          alt="About Jeevika"
          className="jv-page-banner__bg"
        />
        <div className="jv-page-banner__scrim" />
        <div className="jv-container jv-page-banner__content">
          <span
            className="jv-eyebrow"
            style={{ background: "rgba(255,255,255,0.14)", color: "#f8d48b" }}
          >
            Oil India Limited CSR Initiative
          </span>
          <h1 className="jv-page-banner__title">About Project Jeevika</h1>
          <p className="jv-page-banner__desc">
            Launched on 19th December 2022 across 14 villages in Guijan and Hapjan blocks, Tinsukia, Assam.
          </p>
        </div>
      </section>

      <section className="jv-section">
        <div className="jv-container">
          {/* Metrics Strip */}
          <div className="row g-3 mb-5">
            {IMPACT_METRICS.map((m, idx) => (
              <div key={idx} className="col-6 col-lg-3">
                <div
                  className="p-4 rounded-4 h-100"
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div
                    className="font-display fw-bold mb-1"
                    style={{ fontSize: "2rem", color: "var(--bg-forest)" }}
                  >
                    {m.value}
                  </div>
                  <div className="fw-bold small mb-1">{m.label}</div>
                  <div className="text-muted" style={{ fontSize: "0.78rem" }}>
                    {m.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* About Project */}
          <div className="jv-about-card mb-4">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-lg-6">
                <span className="jv-eyebrow">The Initiative</span>
                <h2 className="font-display h2 mb-3">Empowering Rural Communities Through Value Chains</h2>
                <p className="text-muted lh-lg mb-0">
                  Jeevika Project, supported by <strong>Oil India Limited (OIL)</strong> under its CSR program, aims to enhance the quality of life of rural communities through economic upliftment, social inclusion, and sustainable enterprise building. Adopting a cluster value-chain approach across high-value agricultural and horticultural crops, the initiative creates both farm and non-farm entrepreneurs across <strong>14 villages in Guijan and Hapjan blocks, Tinsukia</strong>.
                </p>
              </div>
              <div className="col-12 col-lg-6">
                <div className="jv-about-img-frame">
                  <SmartImage src="/about_us_img.png" alt="Jeevika Project Overview" />
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="jv-about-card mb-4">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-lg-6 order-lg-2">
                <span className="jv-eyebrow jv-eyebrow--gold">Our Mission</span>
                <h2 className="font-display h2 mb-3">Transforming Smallholders into Micro-Enterprises</h2>
                <p className="text-muted lh-lg">
                  Oil India Limited (OIL) is committed to engaging with local communities to enhance economic opportunities through:
                </p>
                <ul className="jv-approach-list">
                  <li>Enhancement of net income of rural households.</li>
                  <li>Promotion of inclusive, collective, and sustainable growth across farm and non-farm sectors.</li>
                  <li>Equipping individuals and SHGs with practical tools, scientific training, and market access.</li>
                  <li>Transforming small and marginal farmers into resilient micro-enterprises.</li>
                </ul>
              </div>
              <div className="col-12 col-lg-6 order-lg-1">
                <div className="jv-about-img-frame">
                  <SmartImage src="/about-us-img-2.png" alt="Jeevika Mission" />
                </div>
              </div>
            </div>
          </div>

          {/* Approach & Interventions */}
          <div className="jv-about-card mb-4">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-lg-6">
                <span className="jv-eyebrow">Our Approach</span>
                <h2 className="font-display h2 mb-3">Cluster Strategy &amp; Key Interventions</h2>
                <ul className="jv-approach-list">
                  <li><strong>Crop Diversification:</strong> Multi-cropping systems &amp; commercial high-value horticulture.</li>
                  <li><strong>Productivity Enhancement:</strong> Tailored agronomic inputs across Tea, Citrus, Spices &amp; Bamboo.</li>
                  <li><strong>Scientific GAP &amp; Demo Plots:</strong> On-farm demonstration plots bridging extension knowledge gaps.</li>
                  <li><strong>Institution Building:</strong> Strengthening Self-Help Groups (SHGs) &amp; Farmer Producer Organizations (FPOs).</li>
                  <li><strong>Women-First Entrepreneurship:</strong> Prioritizing women participation in value addition &amp; marketing.</li>
                </ul>
              </div>
              <div className="col-12 col-lg-6">
                <div className="jv-about-img-frame">
                  <SmartImage src="/about-us-img-5.png" alt="Jeevika Cluster Approach" />
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Impact */}
          <div className="jv-about-card">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-lg-6 order-lg-2">
                <span className="jv-eyebrow jv-eyebrow--gold">Ground Results</span>
                <h2 className="font-display h2 mb-3">Farm &amp; Non-Farm Impact Highlights</h2>
                <ul className="jv-approach-list">
                  <li><strong>Khasi Mandarin:</strong> Average productivity up 51% (3.9 to 5.8 MT/ha; peak 11.7 MT/ha).</li>
                  <li><strong>Tea:</strong> 56% unit price realization &amp; 52% net farm income increase via direct BLF linkage.</li>
                  <li><strong>King Chilli:</strong> Commercial introduction achieving ₹400/kg to ₹1,000/kg price realization.</li>
                  <li><strong>900+ Farmers Trained:</strong> 60%–100% adoption of Good Agricultural Practices (GAP).</li>
                  <li><strong>Agarbatti &amp; Vermicompost:</strong> 20-member all-women SHG rolling unit &amp; 29 vermicompost enterprises (250 MT/yr).</li>
                  <li><strong>Spice Processing Unit:</strong> 150 kg/hr facility for dehydrated &amp; powdered ginger, turmeric, and black pepper.</li>
                </ul>
                <div className="mt-4 d-flex flex-wrap gap-2">
                  <Link to="/product" className="jv-btn jv-btn-primary">
                    Shop Jeevika Products
                  </Link>
                  <Link to="/gallery" className="jv-btn jv-btn-outline">
                    View Field Gallery
                  </Link>
                </div>
              </div>
              <div className="col-12 col-lg-6 order-lg-1">
                <div className="jv-about-img-frame">
                  <SmartImage src="/about-us-img-6.png" alt="Jeevika Impact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
