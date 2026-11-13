/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import SmartImage from "./SmartImage";
import "../styles/productCard.css";

const ProductCard = ({ product }) => {
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const selectedVariant = product.variants[selectedVariantIdx] || product.variants[0];
  const isWishlisted = wishlist.includes(product.id);

  return (
    <article className="jv-product-card">
      <div className="jv-product-card__media">
        <Link to={`/product-details/${product.id}`} className="d-block w-100 h-100">
          <SmartImage
            src={product.img}
            alt={product.name}
            className="jv-product-card__img"
          />
        </Link>
        <div className="jv-product-card__badges">
          <span className="jv-product-card__badge">{product.badge}</span>
          <button
            type="button"
            className={`jv-product-card__wish ${isWishlisted ? "is-active" : ""}`}
            onClick={() => toggleWishlist(product)}
            aria-label={isWishlisted ? "Remove from wishlist" : "Save to wishlist"}
          >
            <i className={`bi ${isWishlisted ? "bi-heart-fill" : "bi-heart"}`} />
          </button>
        </div>
      </div>

      <div className="jv-product-card__body">
        <div className="jv-product-card__meta">
          <span className="jv-product-card__cat">
            {product.category} • {product.origin}
          </span>
        </div>

        <Link to={`/product-details/${product.id}`}>
          <h3 className="jv-product-card__title">{product.name}</h3>
        </Link>
        <div className="jv-product-card__sci">{product.scientificName}</div>
        <p className="jv-product-card__desc">{product.shortDescription}</p>

        <div className="jv-product-card__variants" role="group" aria-label="Select pack size">
          {product.variants.map((variant, idx) => (
            <button
              key={variant.id}
              type="button"
              className={`jv-variant-chip ${idx === selectedVariantIdx ? "is-selected" : ""}`}
              onClick={() => setSelectedVariantIdx(idx)}
            >
              {variant.label}
            </button>
          ))}
        </div>

        <div className="jv-product-card__footer">
          <span className="small text-muted fw-semibold">
            {selectedVariant.label}
          </span>

          <div className="jv-product-card__actions">
            <Link
              to={`/product-details/${product.id}`}
              className="jv-view-btn"
              title="View product details"
              aria-label={`View ${product.name} details`}
            >
              <i className="bi bi-arrow-up-right" />
            </Link>
            <button
              type="button"
              className="jv-add-btn"
              onClick={() => addToCart(product, selectedVariant, 1)}
            >
              <i className="bi bi-bag-plus" />
              Add
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

