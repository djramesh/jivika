import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css'

const Navbar = () => {
  const [isClusterOpen, setIsClusterOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-glass">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <span>
            <img
              src="https://www.webappfactory.co/jeevika/assets/images/logo/logo.svg"
              alt=""
            />
          </span>
        </Link>

        <button
          className={`navbar-toggler custom-toggler ${isNavOpen ? 'active' : ''}`}
          // type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link hover-underline">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link hover-underline">
                About
              </Link>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link hover-underline border-0 bg-transparent"
                onMouseEnter={() => setIsClusterOpen(true)}
                onMouseLeave={() => setIsClusterOpen(false)}
              >
                Clusters <i className="bi bi-chevron-down ms-1"></i>
              </button>
              <ul
                className={`dropdown-menu glass-dropdown ${
                  isClusterOpen ? "show" : ""
                }`}
                onMouseEnter={() => setIsClusterOpen(true)}
                onMouseLeave={() => setIsClusterOpen(false)}
              >
                <li>
                  <Link to="/cluster/tea" className="dropdown-item">
                    <img
                      src="https://www.webappfactory.co/jeevika/assets/images/icon/tea_leaf.svg"
                      alt=""
                      style={{ width: "18px", height: "18px" }}
                    />
                      Tea
                  </Link>
                </li>
                <li>
                  <Link to="/cluster/citrus" className="dropdown-item">
                    <img
                      src="https://www.webappfactory.co/jeevika/assets/images/icon/citrus.svg"
                      alt=""
                      style={{ width: "18px", height: "18px" }}
                    />
                      Citrus
                  </Link>
                </li>
                <li>
                  <Link to="/cluster/spice" className="dropdown-item">
                    <img
                      src="https://www.webappfactory.co/jeevika/assets/images/icon/spices.svg"
                      alt=""
                      style={{ width: "18px", height: "18px" }}
                    />
                      Spice
                  </Link>
                </li>
                <li>
                  <Link to="/cluster/bamboo" className="dropdown-item">
                    <img
                      src="https://www.webappfactory.co/jeevika/assets/images/icon/bamboo.svg"
                      alt=""
                      style={{ width: "18px", height: "18px" }}
                    />
                      Bamboo
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/product" className="nav-link hover-underline">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link hover-underline">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link hover-underline">
                Contact
              </Link>
            </li>
          </ul>

          <div className="d-none d-lg-flex align-items-center gap-4">
            <a href="https://www.google.com/maps/search/S.B.+Complex,+hatigaon/@26.137904,91.785799,5424m/data=!3m1!1e3?hl=en&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D" 
               target="_blank" 
               className="nav-icon-link"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </a>
            <a
              href="mailto:lochan.dutta@schoolnetindia.com"
              className="nav-icon-link"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;