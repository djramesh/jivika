import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import ProductCard from "./ProductCard";
import PartnerLogos from "./Partnering-logo";
import SmartImage from "./SmartImage";
import { PRODUCTS, CATEGORIES, CLUSTERS, IMPACT_METRICS } from "../data/catalog";
import "../styles/home.css";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS.slice(0, 6)
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div>
      <Hero />

      {/* Trust & Value Proposition Bar */}
      <section className="jv-trust-strip" aria-label="Jeevika Promises">
        <div className="jv-container">
          <div className="row g-4">
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="jv-trust-item">
                <div className="jv-trust-item__icon">
                  <i className="bi bi-geo-alt-fill" />
                </div>
                <div>
                  <h3>14 Villages, Tinsukia</h3>
                  <p>100% single-origin produce sourced directly from Guijan &amp; Hapjan producer groups.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="jv-trust-item">
                <div className="jv-trust-item__icon">
                  <i className="bi bi-award-fill" />
                </div>
                <div>
                  <h3>Scientific GAP Quality</h3>
                  <p>900+ farmers trained in Good Agricultural Practices for clean, high-potency crops.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="jv-trust-item">
                <div className="jv-trust-item__icon">
                  <i className="bi bi-people-fill" />
                </div>
                <div>
                  <h3>Women SHG Led</h3>
                  <p>Value-added craft units &amp; spice collectives empowering rural women entrepreneurs.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="jv-trust-item">
                <div className="jv-trust-item__icon">
                  <i className="bi bi-box-seam-fill" />
                </div>
                <div>
                  <h3>Retail &amp; B2B Ready</h3>
                  <p>Order household packs online or request commercial bulk crates with GST invoicing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Harvest & Marketplace Products */}
      <section className="jv-section">
        <div className="jv-container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end justify-content-between gap-3 mb-4">
            <div>
              <span className="jv-eyebrow">
                <i className="bi bi-bag-check-fill" /> Direct Harvest Marketplace
              </span>
              <h2 className="jv-section-title mb-1">Curated Assam Produce &amp; Crafts</h2>
              <p className="jv-section-subtitle mb-0">
                Select a pack size and add directly to your harvest bag — from kitchen jars to wholesale crates.
              </p>
            </div>
            <Link to="/product" className="jv-btn jv-btn-outline align-self-start align-self-lg-end">
              View All {PRODUCTS.length} Products
              <i className="bi bi-arrow-right" />
            </Link>
          </div>

          <div className="jv-filter-pills mb-4" role="tablist" aria-label="Filter featured products">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                className={`jv-filter-pill ${activeCategory === category ? "is-active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="row g-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-12 col-md-6 col-lg-4">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Value-Chain Clusters */}
      <section className="jv-section jv-section-alt">
        <div className="jv-container">
          <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3 mb-4">
            <div>
              <span className="jv-eyebrow jv-eyebrow--gold">Integrated Value Chains</span>
              <h2 className="jv-section-title mb-1">Shop by Agricultural Cluster</h2>
              <p className="jv-section-subtitle mb-0">
                Every Jeevika product originates from four high-impact rural clusters built for long-term sustainability.
              </p>
            </div>
            <Link to="/clusters" className="jv-btn jv-btn-outline align-self-start">
              Explore Cluster Insights
            </Link>
          </div>

          <div className="row g-4">
            {CLUSTERS.map((cluster) => (
              <div key={cluster.id} className="col-12 col-sm-6 col-lg-3">
                <Link to={`/cluster/${cluster.id}`} className="jv-home-cluster-card">
                  <div className="jv-home-cluster-card__media">
                    <SmartImage
                      src={cluster.img}
                      alt={cluster.name}
                      className="jv-home-cluster-card__img"
                    />
                    <span className="jv-home-cluster-card__stat">{cluster.impactStat}</span>
                  </div>
                  <div className="jv-home-cluster-card__body">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <h3 className="h5 mb-0">{cluster.name}</h3>
                      <img
                        src={cluster.iconImg}
                        alt=""
                        style={{ width: 24, height: 24, objectFit: "contain" }}
                      />
                    </div>
                    <div className="small text-success fw-semibold mb-2">{cluster.coverage}</div>
                    <p className="small text-muted mb-3 flex-grow-1">{cluster.description}</p>
                    <span className="small fw-bold" style={{ color: "var(--bg-forest)" }}>
                      Explore cluster <i className="bi bi-arrow-right ms-1" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rural Impact Story Band */}
      <section className="jv-section">
        <div className="jv-container">
          <div className="jv-impact-band">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-lg-5">
                <span
                  className="jv-eyebrow"
                  style={{ background: "rgba(255,255,255,0.14)", color: "#f8d48b" }}
                >
                  Measured Impact Since Dec 2022
                </span>
                <h2 className="font-display text-white mb-3" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                  Every Order Strengthens Assam’s Rural Collectives
                </h2>
                <p style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.65 }} className="mb-4">
                  Supported by Oil India Limited (OIL) under its CSR program, Project Jeevika connects smallholders, women Self-Help Groups, and Farmer Producer Organizations directly to discerning retail and wholesale buyers.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <Link to="/about" className="jv-btn jv-btn-gold">
                    Read Impact Report
                  </Link>
                  <Link to="/contact" className="jv-btn jv-btn-ghost-light">
                    Request B2B Partnership
                  </Link>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="row g-3">
                  {IMPACT_METRICS.map((metric, idx) => (
                    <div key={idx} className="col-6">
                      <div className="jv-impact-metric h-100">
                        <div className="jv-impact-metric__val">{metric.value}</div>
                        <div className="jv-impact-metric__label">{metric.label}</div>
                        <div className="jv-impact-metric__detail">{metric.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerLogos />
    </div>
  );
};

export default Home;

