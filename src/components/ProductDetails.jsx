import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { PRODUCTS, getProductById } from "../data/catalog";
import { useCart } from "../context/CartContext";
import SmartImage from "./SmartImage";
import ProductCard from "./ProductCard";
import "../styles/productDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const location = useLocation();
  const { addToCart, openCart, wishlist, toggleWishlist } = useCart();

  const product = getProductById(productId) || location.state?.product;

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    setSelectedImage(0);
    setSelectedVariantIdx(0);
    setQuantity(1);
  }, [productId]);

  if (!product) {
    return (
      <div className="jv-container py-5 text-center" style={{ minHeight: "60vh" }}>
        <h1 className="font-display mb-3">Product Not Found</h1>
        <p className="text-muted mb-4">
          The requested item could not be found in our current harvest catalog.
        </p>
        <Link to="/product" className="jv-btn jv-btn-primary">
          Return to Marketplace
        </Link>
      </div>
    );
  }

  const gallery =
    product.productImages && product.productImages.length > 0
      ? product.productImages
      : [product.img];
  const activeImg = gallery[selectedImage] || gallery[0];
  const activeVariant = product.variants[selectedVariantIdx] || product.variants[0];
  const isWishlisted = wishlist.includes(product.id);

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.clusterId === product.clusterId)
  ).slice(0, 3);

  const handleBuyNow = () => {
    addToCart(product, activeVariant, quantity);
    openCart();
  };

  return (
    <div className="jv-section pt-4">
      <div className="jv-container">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb small mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="text-muted">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/product" className="text-muted">Marketplace</Link>
            </li>
            <li className="breadcrumb-item">
              <Link
                to={`/product?category=${encodeURIComponent(product.category)}`}
                className="text-muted"
              >
                {product.category}
              </Link>
            </li>
            <li className="breadcrumb-item active fw-semibold" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="row g-5 align-items-start">
          {/* Left Column: Image Gallery */}
          <div className="col-12 col-lg-6">
            <div
              className="jv-pdp-main-img-wrap"
              onClick={() => setIsLightboxOpen(true)}
              title="Click to enlarge"
            >
              <SmartImage
                src={activeImg}
                alt={product.name}
                className="jv-pdp-main-img"
              />
              <span
                className="position-absolute bottom-0 end-0 m-3 px-3 py-1 rounded-pill small fw-semibold"
                style={{ background: "rgba(22,48,32,0.8)", color: "#fff" }}
              >
                <i className="bi bi-arrows-fullscreen me-1" /> Zoom
              </span>
            </div>

            {gallery.length > 1 && (
              <div className="jv-pdp-thumbs">
                {gallery.map((imgSrc, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`jv-pdp-thumb ${idx === selectedImage ? "is-active" : ""}`}
                    onClick={() => setSelectedImage(idx)}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <SmartImage src={imgSrc} alt={`${product.name} view ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}

            {product.missingPhotosHint && (
              <div
                className="mt-3 p-2 px-3 rounded-3 small d-flex align-items-center gap-2"
                style={{
                  background: "var(--accent-gold-soft)",
                  color: "#7a4e0b",
                  border: "1px solid rgba(200,138,43,0.35)",
                }}
              >
                <i className="bi bi-camera" />
                <span>
                  <strong>Photo Slot Notice:</strong> {product.missingPhotosHint}
                </span>
              </div>
            )}
          </div>

          {/* Right Column: Purchase & Details */}
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
              <span className="jv-eyebrow mb-0">{product.category}</span>
              <span className="jv-eyebrow jv-eyebrow--gold mb-0">{product.badge}</span>
            </div>

            <h1 className="font-display mb-1" style={{ fontSize: "clamp(1.85rem, 3vw, 2.5rem)" }}>
              {product.name}
            </h1>
            <p className="fst-italic text-muted mb-3">
              {product.scientificName} • Origin: {product.origin}
            </p>

            <div className="d-flex align-items-center gap-3 mb-3">
              <span className="small fw-semibold text-success">
                <i className="bi bi-check-circle-fill me-1" />
                In Stock
              </span>
              <span className="text-muted small">• Single-Origin Harvest</span>
            </div>

            {/* Product Meta */}
            <div className="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom">
              <span className="small text-muted">
                SKU: <strong className="text-dark">{activeVariant.sku}</strong>
              </span>
              <span
                className="badge rounded-pill"
                style={{ background: "var(--accent-leaf-soft)", color: "var(--accent-leaf)" }}
              >
                Direct Farmer Sourced
              </span>
            </div>

            <p className="mb-4" style={{ color: "var(--text-body)", lineHeight: 1.7 }}>
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-4">
              <div className="small fw-bold text-uppercase text-muted mb-2" style={{ letterSpacing: "0.08em" }}>
                Select Pack Size / Grade
              </div>
              <div className="d-flex flex-wrap gap-2">
                {product.variants.map((variant, idx) => (
                  <button
                    key={variant.id}
                    type="button"
                    className={`jv-pdp-variant-btn ${idx === selectedVariantIdx ? "is-active" : ""}`}
                    onClick={() => setSelectedVariantIdx(idx)}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
              <div className="jv-qty-stepper" style={{ height: 46 }}>
                <button
                  type="button"
                  style={{ width: 40, height: 44 }}
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span style={{ minWidth: 34 }}>{quantity}</span>
                <button
                  type="button"
                  style={{ width: 40, height: 44 }}
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                className="jv-btn jv-btn-primary flex-grow-1"
                onClick={() => addToCart(product, activeVariant, quantity)}
              >
                <i className="bi bi-bag-plus" />
                Add to Bag
              </button>

              <button
                type="button"
                className="jv-btn jv-btn-gold"
                onClick={handleBuyNow}
              >
                Order Now
              </button>

              <button
                type="button"
                className="jv-icon-btn"
                onClick={() => toggleWishlist(product)}
                aria-label="Save to wishlist"
              >
                <i
                  className={`bi ${isWishlisted ? "bi-heart-fill text-danger" : "bi-heart"}`}
                />
              </button>
            </div>

            {/* Key Highlights */}
            <ul className="list-unstyled mb-4">
              {product.highlights.map((item, idx) => (
                <li key={idx} className="d-flex align-items-start gap-2 mb-2 small">
                  <i className="bi bi-check-circle-fill text-success mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Product Specifications */}
            <h2 className="h6 fw-bold text-uppercase text-muted mb-2" style={{ letterSpacing: "0.08em" }}>
              Product Specifications
            </h2>
            <div className="jv-pdp-specs mb-4">
              {product.specs.map((spec, idx) => (
                <div key={idx} className="jv-pdp-spec-row">
                  <span className="text-muted">{spec.label}</span>
                  <strong className="text-end">{spec.value}</strong>
                </div>
              ))}
            </div>

            {/* Direct Coordination Card */}
            <div
              className="p-3 rounded-3 d-flex align-items-center justify-content-between gap-3"
              style={{
                background: "var(--bg-cream-alt)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div>
                <div className="fw-bold small">Need custom bulk grading or FPO invoicing?</div>
                <div className="small text-muted">
                  Call +91 96134 66206 or email tinsukiaspicesoiety@gmail.com
                </div>
              </div>
              <Link to="/contact" className="jv-btn jv-btn-outline btn-sm py-2 px-3">
                Inquire
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-5 pt-4 border-top">
            <div className="d-flex justify-content-between align-items-end mb-4">
              <div>
                <h2 className="font-display h3 mb-1">More from Our Value Chains</h2>
                <p className="text-muted small mb-0">
                  Combine crops in a single order for pan-India delivery &amp; wholesale dispatch.
                </p>
              </div>
              <Link to="/product" className="small fw-bold text-success">
                View all <i className="bi bi-arrow-right" />
              </Link>
            </div>
            <div className="row g-4">
              {relatedProducts.map((rel) => (
                <div key={rel.id} className="col-12 col-md-4">
                  <ProductCard product={rel} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="jv-lightbox"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="jv-lightbox__close"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close image preview"
          >
            <i className="bi bi-x-lg" />
          </button>
          <img
            src={activeImg}
            alt={product.name}
            className="jv-lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
