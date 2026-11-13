import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../data/catalog";
import ProductCard from "./ProductCard";
import SmartImage from "./SmartImage";
import "../styles/clusterDetails.css";

function ClusterDetails() {
  const { clusterId } = useParams();

  useEffect(() => {
    const sectionIds = {
      tea: "tea-cluster",
      citrus: "citrus-cluster",
      spice: "spices-cluster",
      bamboo: "bamboo-cluster",
    };

    const sectionId = sectionIds[clusterId];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [clusterId]);

  const clusterProducts = PRODUCTS.filter((p) => !clusterId || p.clusterId === clusterId);

  return (
    <div>
      <section className="jv-page-banner">
        <SmartImage
          src="/cluster_hero_img.webp"
          alt="Jeevika Clusters"
          className="jv-page-banner__bg"
        />
        <div className="jv-page-banner__scrim" />
        <div className="jv-container jv-page-banner__content">
          <span
            className="jv-eyebrow"
            style={{ background: "rgba(255,255,255,0.14)", color: "#f8d48b" }}
          >
            Field Interventions &amp; Value Chains
          </span>
          <h1 className="jv-page-banner__title">Cluster Impact &amp; Produce</h1>
          <p className="jv-page-banner__desc">
            Scientific agronomy, producer group mobilization, and transparent market linkages across Tinsukia.
          </p>
        </div>
      </section>

      <section className="jv-section">
        <div className="jv-container">
          {/* Quick Jump Pills */}
          <div className="jv-filter-pills mb-4">
            <a href="#tea-cluster" className={`jv-filter-pill ${clusterId === "tea" ? "is-active" : ""}`}>
              Tea Cluster
            </a>
            <a href="#citrus-cluster" className={`jv-filter-pill ${clusterId === "citrus" ? "is-active" : ""}`}>
              Citrus Cluster
            </a>
            <a href="#spices-cluster" className={`jv-filter-pill ${clusterId === "spice" ? "is-active" : ""}`}>
              Spices Cluster
            </a>
            <a href="#bamboo-cluster" className={`jv-filter-pill ${clusterId === "bamboo" ? "is-active" : ""}`}>
              Bamboo &amp; Value Addition
            </a>
          </div>

          {/* Tea Cluster */}
          <article className="jv-cluster-block" id="tea-cluster">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-lg-6">
                <span className="jv-eyebrow">100 Hectares • 8 Villages • 250+ Growers</span>
                <h2 className="font-display h2 mb-3">
                  Tea Cluster
                  <img src="/tea-leaf.png" alt="" className="ms-2" width="34" height="34" />
                </h2>
                <p className="text-muted lh-lg">
                  Empowering small tea growers through scientific soil health management, plucking discipline, and direct Bought Leaf Factory (BLF) linkages:
                </p>
                <ul className="jv-check-list mb-4">
                  <li><strong>Productivity Gains:</strong> 17% increase in green leaf yield.</li>
                  <li><strong>Income Growth:</strong> Average income per hectare increased by 54%.</li>
                  <li><strong>Improved Quality:</strong> Fine Leaf Count (FLC) improved from 0% to 28%.</li>
                  <li><strong>Efficient Transit:</strong> Nylon bag usage and dedicated transport preserve leaf freshness.</li>
                  <li><strong>Direct Market Linkages:</strong> Growers connected directly to BLFs, reducing middlemen.</li>
                </ul>
                <Link to="/product-details/7" className="jv-btn jv-btn-primary">
                  Shop Single-Origin Assam Tea
                </Link>
              </div>
              <div className="col-12 col-lg-6">
                <div className="jv-cluster-media-frame">
                  <SmartImage src="/tea_image.JPG" alt="Small Tea Growers in Tinsukia" />
                </div>
              </div>
            </div>
          </article>

          {/* Citrus Cluster */}
          <article className="jv-cluster-block" id="citrus-cluster">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-lg-6 order-lg-2">
                <span className="jv-eyebrow jv-eyebrow--gold">35 Hectares • Khasi Mandarin &amp; Assam Lemon</span>
                <h2 className="font-display h2 mb-3">
                  Citrus Cluster
                  <img src="/citrus.png" alt="" className="ms-2" width="34" height="34" />
                </h2>
                <p className="text-muted lh-lg">
                  Revitalizing traditional Khasi Mandarin orchards (25 ha) in Puroni Motapung and scaling native Kaji Nemu Assam Lemon plots (10 ha) in Borgaon:
                </p>
                <ul className="jv-check-list mb-4">
                  <li><strong>Khasi Mandarin Yield:</strong> Productivity rose 51% (to 5.8 MT/ha avg; 11.7 MT/ha peak).</li>
                  <li><strong>Quality &amp; Grading:</strong> Improved pruning, pest management, and grading tools.</li>
                  <li><strong>Assam Lemon (Queen of Citrus):</strong> Commercial scale cultivation under GAP practices.</li>
                  <li><strong>Market Exposure:</strong> Exhibitions and direct institutional buyer linkages.</li>
                </ul>
                <div className="d-flex flex-wrap gap-2">
                  <Link to="/product-details/4" className="jv-btn jv-btn-primary">
                    Shop Khasi Mandarin
                  </Link>
                  <Link to="/product-details/6" className="jv-btn jv-btn-outline">
                    Shop Assam Lemon
                  </Link>
                </div>
              </div>
              <div className="col-12 col-lg-6 order-lg-1">
                <div className="jv-cluster-media-frame">
                  <SmartImage src="/khasi_mandarine_1.jpeg" alt="Khasi Mandarin Orchard" />
                </div>
              </div>
            </div>
          </article>

          {/* Spices Cluster */}
          <article className="jv-cluster-block" id="spices-cluster">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-lg-6">
                <span className="jv-eyebrow">4 Heritage Spices • 150 kg/hr Processing Unit</span>
                <h2 className="font-display h2 mb-3">
                  Spices Cluster
                  <img src="/spices-img.png" alt="" className="ms-2" width="34" height="34" />
                </h2>
                <p className="text-muted lh-lg">
                  Assam’s naturally low-chemical agro-climate produces potent Ginger, Turmeric, Black Pepper (interplanted on tea shade trees), and Bhoot Jolokia:
                </p>
                <ul className="jv-check-list mb-4">
                  <li><strong>Black Pepper Intercropping:</strong> Diversifies small tea grower income using shade standards.</li>
                  <li><strong>Bhoot Jolokia Cash Crop:</strong> Realizing high-value returns with 4.4 MT/ha demo yield.</li>
                  <li><strong>Ginger &amp; Turmeric:</strong> Treated high-yielding rhizomes, spacing, and post-harvest curing.</li>
                  <li><strong>Spice Processing Plant:</strong> 150 kg/hr capacity unit for dehydrated &amp; powdered spices.</li>
                </ul>
                <Link to="/product?category=Spices" className="jv-btn jv-btn-primary">
                  Shop All Spices
                </Link>
              </div>
              <div className="col-12 col-lg-6">
                <div className="jv-cluster-media-frame">
                  <SmartImage src="/black-pepper-cluster-2.png" alt="Assam Spices Cluster" />
                </div>
              </div>
            </div>
          </article>

          {/* Bamboo & Value Addition Cluster */}
          <article className="jv-cluster-block" id="bamboo-cluster">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-lg-6 order-lg-2">
                <span className="jv-eyebrow jv-eyebrow--gold">30 Ha Bamboo • 29 Vermicompost &amp; SHG Units</span>
                <h2 className="font-display h2 mb-3">
                  Bamboo &amp; Value Addition
                  <img src="/bamboo.png" alt="" className="ms-2" width="34" height="34" />
                </h2>
                <p className="text-muted lh-lg">
                  Combining climate-positive Bambusa tulda &amp; balcooa plantations with women-led agarbatti rolling units and 29 circular vermicompost enterprises:
                </p>
                <ul className="jv-check-list mb-4">
                  <li><strong>Carbon Sink:</strong> 1 hectare absorbs 17–20 tonnes of CO₂ annually.</li>
                  <li><strong>Women Agarbatti SHG:</strong> 100% women-managed 20-member unit in Daisa &amp; Bor Rupai.</li>
                  <li><strong>Vermicompost Enterprises:</strong> 29 units producing 250 MT/year of organic soil conditioner.</li>
                </ul>
                <div className="d-flex flex-wrap gap-2">
                  <Link to="/product-details/10" className="jv-btn jv-btn-primary">
                    Shop Bamboo Culms
                  </Link>
                  <Link to="/product-details/8" className="jv-btn jv-btn-outline">
                    Shop SHG Agarbatti
                  </Link>
                </div>
              </div>
              <div className="col-12 col-lg-6 order-lg-1">
                <div className="jv-cluster-media-frame">
                  <SmartImage src="/bamboo-2.jpeg" alt="Bamboo Cluster Tinsukia" />
                </div>
              </div>
            </div>
          </article>

          {/* Shop Products from this Cluster */}
          {clusterProducts.length > 0 && (
            <div className="mt-5">
              <h3 className="font-display h3 mb-4">
                Available Harvests from {clusterId ? `${clusterId.toUpperCase()} Cluster` : "Our Clusters"}
              </h3>
              <div className="row g-4">
                {clusterProducts.map((product) => (
                  <div key={product.id} className="col-12 col-md-6 col-lg-4">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ClusterDetails;
