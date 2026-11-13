import { useState } from "react";
import { GALLERY_ITEMS } from "../data/catalog";
import SmartImage from "./SmartImage";
import "../styles/gallery.css";

const GALLERY_CATEGORIES = ["All", "Community", "Tea", "Citrus", "Spices", "Bamboo", "Value Addition"];

function Gallery() {
  const [activeCat, setActiveCat] = useState("All");
  const [lightboxItem, setLightboxItem] = useState(null);

  const items =
    activeCat === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCat);

  return (
    <div>
      <section className="jv-page-banner">
        <SmartImage
          src="/glry_bnr_img.jpg"
          alt="Jeevika Field Gallery"
          className="jv-page-banner__bg"
        />
        <div className="jv-page-banner__scrim" />
        <div className="jv-container jv-page-banner__content">
          <span
            className="jv-eyebrow"
            style={{ background: "rgba(255,255,255,0.14)", color: "#f8d48b" }}
          >
            Stories from Tinsukia
          </span>
          <h1 className="jv-page-banner__title">Field &amp; Harvest Gallery</h1>
          <p className="jv-page-banner__desc">
            Glimpses of demonstration plots, farmer trainings, SHG workshops, and seasonal harvests across 14 villages.
          </p>
        </div>
      </section>

      <section className="jv-section">
        <div className="jv-container">
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-4">
            <div>
              <h2 className="jv-section-title mb-1">Insights from the Ground</h2>
              <p className="text-muted mb-0">
                Click any photograph to view in full detail.
              </p>
            </div>
            <div className="jv-filter-pills">
              {GALLERY_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`jv-filter-pill ${activeCat === cat ? "is-active" : ""}`}
                  onClick={() => setActiveCat(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="row g-4">
            {items.map((item) => (
              <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div
                  className="jv-gallery-card"
                  onClick={() => setLightboxItem(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setLightboxItem(item);
                  }}
                >
                  <SmartImage src={item.src} alt={item.title} />
                  <div className="jv-gallery-card__caption">
                    <span className="badge text-bg-warning mb-1">{item.category}</span>
                    <div className="small fw-semibold">{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxItem && (
        <div
          className="jv-lightbox"
          onClick={() => setLightboxItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="jv-lightbox__close"
            onClick={() => setLightboxItem(null)}
            aria-label="Close lightbox"
          >
            <i className="bi bi-x-lg" />
          </button>
          <div className="text-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxItem.src}
              alt={lightboxItem.title}
              className="jv-lightbox__img"
            />
            <div className="text-white mt-3 fw-semibold">{lightboxItem.title}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
