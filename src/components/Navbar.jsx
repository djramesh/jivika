import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import BrandLogo from "./BrandLogo";
import "../styles/navbar.css";

const Navbar = () => {
  const { cartCount, openCart, wishlist } = useCart();
  const [isClusterOpen, setIsClusterOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsClusterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    navigate(trimmed ? `/product?q=${encodeURIComponent(trimmed)}` : "/product");
    setIsMobileOpen(false);
  };

  return (
    <header className="jv-header">
      <div className="jv-announcement">
        <span>
          Direct from <strong>14 Villages in Tinsukia, Assam</strong> • Single-Origin Produce &amp; Crafts • Retail &amp; B2B Wholesale
        </span>
      </div>

      <nav className={`jv-navbar ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="jv-container jv-nav-inner">
          <Link to="/" onClick={() => setIsMobileOpen(false)} aria-label="Jeevika Home">
            <BrandLogo variant="dark" />
          </Link>

          <ul className="jv-nav-links d-none d-lg-flex">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => `jv-nav-link ${isActive ? "is-active" : ""}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className={({ isActive }) => `jv-nav-link ${isActive ? "is-active" : ""}`}
              >
                Marketplace
              </NavLink>
            </li>
            <li
              className="jv-dropdown-wrap"
              ref={dropdownRef}
              onMouseEnter={() => setIsClusterOpen(true)}
              onMouseLeave={() => setIsClusterOpen(false)}
            >
              <button
                type="button"
                className="jv-nav-link"
                onClick={() => setIsClusterOpen((prev) => !prev)}
                aria-expanded={isClusterOpen}
              >
                Clusters <i className="bi bi-chevron-down small" />
              </button>
              {isClusterOpen && (
                <ul className="jv-dropdown-menu">
                  <li>
                    <Link
                      to="/clusters"
                      className="jv-dropdown-item"
                      onClick={() => setIsClusterOpen(false)}
                    >
                      <i className="bi bi-grid-fill text-success" />
                      All 4 Crop Clusters
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cluster/tea"
                      className="jv-dropdown-item"
                      onClick={() => setIsClusterOpen(false)}
                    >
                      <img src="/tea-leaf.png" alt="" />
                      Tea Cluster (250+ Growers)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cluster/citrus"
                      className="jv-dropdown-item"
                      onClick={() => setIsClusterOpen(false)}
                    >
                      <img src="/citrus.png" alt="" />
                      Citrus — Mandarin &amp; Lemon
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cluster/spice"
                      className="jv-dropdown-item"
                      onClick={() => setIsClusterOpen(false)}
                    >
                      <img src="/spices-img.png" alt="" />
                      Spices — Ginger, Turmeric, Pepper
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cluster/bamboo"
                      className="jv-dropdown-item"
                      onClick={() => setIsClusterOpen(false)}
                    >
                      <img src="/bamboo.png" alt="" />
                      Bamboo &amp; SHG Crafts
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `jv-nav-link ${isActive ? "is-active" : ""}`}
              >
                About &amp; Impact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) => `jv-nav-link ${isActive ? "is-active" : ""}`}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `jv-nav-link ${isActive ? "is-active" : ""}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="jv-nav-actions">
            <form onSubmit={handleSearch} className="jv-search-form d-none d-xl-flex">
              <i className="bi bi-search" />
              <input
                type="search"
                placeholder="Search turmeric, tea, chilli..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search products"
              />
            </form>

            <Link
              to="/product"
              className="jv-icon-btn d-none d-md-inline-flex"
              title={`Saved items (${wishlist.length})`}
              aria-label={`Saved items (${wishlist.length})`}
            >
              <i className="bi bi-heart" />
              {wishlist.length > 0 && (
                <span
                  className="jv-cart-badge"
                  style={{ position: "absolute", top: -4, right: -4 }}
                >
                  {wishlist.length}
                </span>
              )}
            </Link>

            <button
              type="button"
              className="jv-cart-btn"
              onClick={openCart}
              aria-label="Open shopping bag"
            >
              <i className="bi bi-bag" />
              <span className="d-none d-sm-inline">Bag</span>
              <span className="jv-cart-badge">{cartCount}</span>
            </button>

            <button
              type="button"
              className="jv-icon-btn d-lg-none"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileOpen}
            >
              <i className={`bi ${isMobileOpen ? "bi-x-lg" : "bi-list"} fs-5`} />
            </button>
          </div>
        </div>

        {isMobileOpen && (
          <div className="jv-mobile-drawer d-lg-none">
            <form onSubmit={handleSearch} className="jv-search-form mb-3 w-100">
              <i className="bi bi-search" />
              <input
                type="search"
                className="w-100"
                placeholder="Search Assam spices, tea, bamboo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
            <Link to="/" className="jv-mobile-link" onClick={() => setIsMobileOpen(false)}>
              Home <i className="bi bi-chevron-right small text-muted" />
            </Link>
            <Link to="/product" className="jv-mobile-link" onClick={() => setIsMobileOpen(false)}>
              Marketplace <i className="bi bi-chevron-right small text-muted" />
            </Link>
            <Link to="/clusters" className="jv-mobile-link" onClick={() => setIsMobileOpen(false)}>
              Crop Clusters <i className="bi bi-chevron-right small text-muted" />
            </Link>
            <Link to="/about" className="jv-mobile-link" onClick={() => setIsMobileOpen(false)}>
              About &amp; Impact <i className="bi bi-chevron-right small text-muted" />
            </Link>
            <Link to="/gallery" className="jv-mobile-link" onClick={() => setIsMobileOpen(false)}>
              Gallery <i className="bi bi-chevron-right small text-muted" />
            </Link>
            <Link
              to="/contact"
              className="jv-mobile-link border-0"
              onClick={() => setIsMobileOpen(false)}
            >
              Contact &amp; Wholesale <i className="bi bi-chevron-right small text-muted" />
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
