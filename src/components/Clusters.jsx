import { Link } from "react-router-dom";
import { CLUSTERS } from "../data/catalog";
import SmartImage from "./SmartImage";
import "../styles/clusters.css";

const Clusters = () => {
  return (
    <div>
      <section className="jv-page-banner">
        <SmartImage
          src="/cluster_hero_img.webp"
          alt="Jeevika Agricultural Clusters"
          className="jv-page-banner__bg"
        />
        <div className="jv-page-banner__scrim" />
        <div className="jv-container jv-page-banner__content">
          <span
            className="jv-eyebrow"
            style={{ background: "rgba(255,255,255,0.14)", color: "#f8d48b" }}
          >
            Integrated Value Chains
          </span>
          <h1 className="jv-page-banner__title">Our Four Crop Clusters</h1>
          <p className="jv-page-banner__desc">
            Fostering sustainable rural self-employment across Tea, Citrus, Spices, and Bamboo in Tinsukia, Assam.
          </p>
        </div>
      </section>

      <section className="jv-section">
        <div className="jv-container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 740 }}>
            <span className="jv-eyebrow">Cluster-Based Development</span>
            <h2 className="jv-section-title">From Farm Productivity to Direct Market Access</h2>
            <p className="text-muted lh-lg mb-0">
              Project Jeevika adopts an integrated cluster-based approach to foster sustainable income generation—introducing high-value crops, revitalizing traditional orchards, enabling local value addition, and transitioning toward demand-driven production systems.
            </p>
          </div>

          <div className="row g-4">
            {CLUSTERS.map((cluster) => (
              <div key={cluster.id} className="col-12 col-md-6">
                <div className="jv-cluster-showcase-card">
                  <div className="jv-cluster-showcase-card__media">
                    <SmartImage src={cluster.img} alt={cluster.name} />
                    <span className="jv-cluster-showcase-card__badge">{cluster.impactStat}</span>
                  </div>
                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h3 className="h4 mb-0">{cluster.name}</h3>
                      <img
                        src={cluster.iconImg}
                        alt=""
                        style={{ width: 28, height: 28, objectFit: "contain" }}
                      />
                    </div>
                    <div className="small fw-semibold text-success mb-2">{cluster.coverage}</div>
                    <p className="text-muted mb-4 flex-grow-1" style={{ lineHeight: 1.65 }}>
                      {cluster.description}
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <Link to={`/cluster/${cluster.id}`} className="jv-btn jv-btn-primary">
                        View Cluster Report
                        <i className="bi bi-arrow-right" />
                      </Link>
                      <Link to="/product" className="jv-btn jv-btn-outline">
                        Shop Harvests
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clusters;
