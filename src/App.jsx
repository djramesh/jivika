import { Routes, Route } from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import Clusters from "./components/Clusters";
import ClusterDetails from "./components/ClusterDetails";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

const ToastNotification = () => {
  const { toast, dismissToast, openCart } = useCart();
  if (!toast) return null;

  return (
    <div className="jv-toast" role="status" aria-live="polite">
      <i className="bi bi-check-circle-fill fs-5" style={{ color: "#f3c46b" }} />
      <div className="flex-grow-1">
        <div className="fw-semibold small">{toast.message}</div>
        {toast.subtext && (
          <div style={{ fontSize: "0.76rem", opacity: 0.82 }}>{toast.subtext}</div>
        )}
      </div>
      <button
        type="button"
        className="btn btn-sm text-warning fw-bold p-0 ms-1"
        onClick={() => {
          dismissToast();
          openCart();
        }}
      >
        View Bag
      </button>
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <div className="app-container">
        <Navbar />
        <ScrollToTop />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/clusters" element={<Clusters />} />
            <Route path="/product" element={<Products />} />
            <Route path="/shop" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cluster/:clusterId" element={<ClusterDetails />} />
            <Route path="/product-details/:productId" element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer />
        <CartDrawer />
        <ToastNotification />
      </div>
    </CartProvider>
  );
}

export default App;
