import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PRODUCTS, CATEGORIES } from "../data/catalog";
import ProductCard from "./ProductCard";
import SmartImage from "./SmartImage";
import "../styles/products.css";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const initialCat = searchParams.get("category") || "All";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(
    CATEGORIES.includes(initialCat) ? initialCat : "All"
  );
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    setSearchQuery(searchParams.get("q") || "");
    const cat = searchParams.get("category");
    if (cat && CATEGORIES.includes(cat)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    const next = new URLSearchParams(searchParams);
    if (cat === "All") next.delete("category");
    else next.set("category", cat);
    setSearchParams(next, { replace: true });
  };

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    let list = PRODUCTS.filter((p) => {
      const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.scientificName.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.origin.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });

    if (sortBy === "name-asc") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      list = [...list].sort((a, b) => b.name.localeCompare(a.name));
    }

    return list;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div id="products">
      {/* Page Header Banner */}
      <section className="jv-page-banner">
        <SmartImage
          src="/cluster_hero_img.webp"
          alt="Jeevika Assam Harvest Marketplace"
          className="jv-page-banner__bg"
        />
        <div className="jv-page-banner__scrim" />
        <div className="jv-container jv-page-banner__content">
          <span
            className="jv-eyebrow"
            style={{ background: "rgba(255,255,255,0.14)", color: "#f8d48b" }}
          >
            Farm-to-Buyer Catalog
          </span>
          <h1 className="jv-page-banner__title">Jeevika Marketplace</h1>
          <p className="jv-page-banner__desc">
            Single-origin Assam spices, tea, citrus, bamboo crafts, and bio-inputs harvested by our 900+ partner farmers.
          </p>
        </div>
      </section>

      <section className="jv-section">
        <div className="jv-container">
          {/* Filter & Search Bar */}
          <div className="jv-shop-toolbar">
            <div className="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center justify-content-between gap-3">
              <div className="jv-filter-pills">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={`jv-filter-pill ${selectedCategory === category ? "is-active" : ""}`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2">
                <div className="jv-shop-search">
                  <i className="bi bi-search" />
                  <input
                    type="search"
                    placeholder="Filter by crop or origin..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Filter catalog products"
                  />
                </div>
                <select
                  className="jv-sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  aria-label="Sort products"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <p className="small text-muted mb-0">
              Showing <strong>{filteredProducts.length}</strong> of {PRODUCTS.length} products
              {selectedCategory !== "All" ? ` in ${selectedCategory}` : ""}
            </p>
            {(searchQuery || selectedCategory !== "All") && (
              <button
                type="button"
                className="btn btn-link btn-sm text-success fw-semibold p-0"
                onClick={() => {
                  setSearchQuery("");
                  handleCategoryChange("All");
                }}
              >
                Reset filters
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div
              className="text-center py-5 px-3 rounded-4"
              style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}
            >
              <i className="bi bi-search fs-1 text-muted d-block mb-3" />
              <h2 className="h4 mb-2">No matching products found</h2>
              <p className="text-muted mb-4">
                Try clearing your search or switching to another crop category.
              </p>
              <button
                type="button"
                className="jv-btn jv-btn-primary"
                onClick={() => {
                  setSearchQuery("");
                  handleCategoryChange("All");
                }}
              >
                Show All Products
              </button>
            </div>
          ) : (
            <div className="row g-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="col-12 col-md-6 col-lg-4">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}

          {/* Wholesale / B2B Callout */}
          <div className="jv-wholesale-cta d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-4">
            <div>
              <span
                className="jv-eyebrow"
                style={{ background: "rgba(255,255,255,0.14)", color: "#f8d48b" }}
              >
                B2B &amp; Institutional Procurement
              </span>
              <h2 className="font-display text-white h3 mb-2">
                Looking for Bulk Spices, Tea Lots, or SHG Bamboo Supplies?
              </h2>
              <p className="mb-0" style={{ color: "rgba(255,255,255,0.8)", maxWidth: 640 }}>
                Connect directly with our Guwahati coordination office for commercial lots, custom dehydration/powdering via our Spice Processing Unit, or corporate gifting hampers.
              </p>
            </div>
            <Link to="/contact" className="jv-btn jv-btn-gold flex-shrink-0">
              Request Wholesale Quote
              <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
