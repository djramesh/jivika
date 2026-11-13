import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import SmartImage from "./SmartImage";
import "../styles/cartDrawer.css";

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartCount,
  } = useCart();

  const [step, setStep] = useState("bag"); // "bag" | "checkout" | "confirmed"
  const [orderRef, setOrderRef] = useState("");
  const [submittedOrder, setSubmittedOrder] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    orderType: "Retail Order",
    cityState: "",
    address: "",
    notes: "",
  });

  if (!isCartOpen) return null;

  const handleClose = () => {
    setStep("bag");
    closeCart();
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const generatedId = `JV-${Date.now().toString().slice(-6)}`;
    setOrderRef(generatedId);
    setSubmittedOrder({
      ...formData,
      items: [...cartItems],
      orderId: generatedId,
    });
    clearCart();
    setStep("confirmed");
  };

  const buildOrderSummaryText = (order) => {
    if (!order) return "";
    const lines = order.items
      .map((it) => `• ${it.name} (${it.variantLabel}) × ${it.quantity}`)
      .join("\n");
    return `Hello Jeevika Team,\nOrder Ref: ${order.orderId}\nType: ${order.orderType}\nName: ${order.fullName}\nPhone: ${order.phone}\nAddress: ${order.address}, ${order.cityState}\n\nRequested Items:\n${lines}`;
  };

  return (
    <div
      className="jv-drawer-backdrop"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Bag"
    >
      <aside className="jv-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="jv-drawer__header">
          <h2 className="jv-drawer__title">
            {step === "bag" && `Your Harvest Bag (${cartCount})`}
            {step === "checkout" && "Order & Dispatch Details"}
            {step === "confirmed" && "Order Request Received"}
          </h2>
          <button
            type="button"
            className="jv-drawer__close"
            onClick={handleClose}
            aria-label="Close shopping bag"
          >
            <i className="bi bi-x-lg" />
          </button>
        </div>

        {step === "bag" && cartItems.length > 0 && (
          <div className="jv-drawer__shipping">
            <span>
              <i className="bi bi-box-seam me-1" />
              Direct dispatch from <strong>14 Villages in Tinsukia, Assam</strong>
            </span>
          </div>
        )}

        <div className="jv-drawer__body">
          {step === "bag" && cartItems.length === 0 && (
            <div className="text-center py-5">
              <div
                className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: 68,
                  height: 68,
                  background: "var(--bg-cream-alt)",
                  color: "var(--bg-forest)",
                }}
              >
                <i className="bi bi-bag fs-3" />
              </div>
              <h3 className="h5 mb-2">Your bag is empty</h3>
              <p className="text-muted small mb-4">
                Explore authentic Assam spices, small-grower tea, citrus, and women SHG crafts.
              </p>
              <Link to="/product" className="jv-btn jv-btn-primary" onClick={handleClose}>
                Browse Marketplace
              </Link>
            </div>
          )}

          {step === "bag" &&
            cartItems.map((item) => (
              <div key={`${item.productId}-${item.variantId}`} className="jv-cart-item">
                <SmartImage
                  src={item.image}
                  alt={item.name}
                  className="jv-cart-item__img"
                />
                <div className="jv-cart-item__info">
                  <div className="d-flex justify-content-between align-items-start gap-2">
                    <div className="jv-cart-item__name">{item.name}</div>
                    <button
                      type="button"
                      className="btn btn-link p-0 text-muted"
                      onClick={() => removeFromCart(item.productId, item.variantId)}
                      aria-label={`Remove ${item.name}`}
                    >
                      <i className="bi bi-trash3 small" />
                    </button>
                  </div>
                  <div className="jv-cart-item__variant">
                    {item.variantLabel} • {item.origin}
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="jv-qty-stepper">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.variantId, -1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.variantId, 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <span className="small text-muted fw-semibold">
                      Qty: {item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))}

          {step === "checkout" && (
            <form id="jv-checkout-form" onSubmit={handleSubmitOrder}>
              <div className="jv-checkout-field">
                <label htmlFor="jv-order-type">Order Category</label>
                <select
                  id="jv-order-type"
                  value={formData.orderType}
                  onChange={(e) => setFormData({ ...formData, orderType: e.target.value })}
                >
                  <option value="Retail Order">Retail / Household Order</option>
                  <option value="Wholesale / B2B Inquiry">Wholesale / B2B Trade Inquiry</option>
                  <option value="Corporate Gifting">Corporate &amp; CSR Gifting</option>
                </select>
              </div>
              <div className="jv-checkout-field">
                <label htmlFor="jv-name">Full Name / Organization *</label>
                <input
                  id="jv-name"
                  type="text"
                  required
                  placeholder="e.g., Ananya Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
              <div className="row g-2">
                <div className="col-6 jv-checkout-field">
                  <label htmlFor="jv-phone">Phone / WhatsApp *</label>
                  <input
                    id="jv-phone"
                    type="tel"
                    required
                    placeholder="+91 98XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="col-6 jv-checkout-field">
                  <label htmlFor="jv-email">Email *</label>
                  <input
                    id="jv-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="jv-checkout-field">
                <label htmlFor="jv-city">City, State &amp; PIN *</label>
                <input
                  id="jv-city"
                  type="text"
                  required
                  placeholder="Guwahati, Assam - 781038"
                  value={formData.cityState}
                  onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                />
              </div>
              <div className="jv-checkout-field">
                <label htmlFor="jv-address">Delivery Address *</label>
                <textarea
                  id="jv-address"
                  rows={2}
                  required
                  placeholder="House/Flat no, Street, Landmark"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>
              <div className="jv-checkout-field">
                <label htmlFor="jv-notes">Packaging / Wholesale Notes (Optional)</label>
                <input
                  id="jv-notes"
                  type="text"
                  placeholder="Custom weight, GST billing, or delivery slot"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>
            </form>
          )}

          {step === "confirmed" && submittedOrder && (
            <div className="text-center py-4">
              <div
                className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: 68,
                  height: 68,
                  background: "var(--accent-leaf-soft)",
                  color: "var(--accent-leaf)",
                }}
              >
                <i className="bi bi-check2-circle fs-2" />
              </div>
              <span className="jv-eyebrow">Reference #{orderRef}</span>
              <h3 className="h4 mb-2">Thank you, {submittedOrder.fullName}!</h3>
              <p className="text-muted small mb-4">
                Our Jeevika Producer Coordination Desk in Guwahati will confirm dispatch and payment
                details on <strong>{submittedOrder.phone}</strong>.
              </p>

              <div
                className="text-start p-3 rounded-3 mb-4"
                style={{ background: "var(--bg-cream)", border: "1px solid var(--border-subtle)" }}
              >
                <div className="d-flex justify-content-between small mb-1">
                  <span className="text-muted">Order Type</span>
                  <strong>{submittedOrder.orderType}</strong>
                </div>
                <div className="d-flex justify-content-between small mb-1">
                  <span className="text-muted">Items</span>
                  <strong>{submittedOrder.items.length} line(s)</strong>
                </div>
                <div className="d-flex justify-content-between small">
                  <span className="text-muted">Status</span>
                  <strong className="text-success">Inquiry Submitted</strong>
                </div>
              </div>

              <div className="d-grid gap-2">
                <a
                  href={`https://wa.me/919613466206?text=${encodeURIComponent(
                    buildOrderSummaryText(submittedOrder)
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="jv-btn jv-btn-primary"
                >
                  <i className="bi bi-whatsapp" />
                  Send Order via WhatsApp
                </a>
                <a
                  href={`mailto:tinsukiaspicesoiety@gmail.com?subject=${encodeURIComponent(
                    `Jeevika Order ${orderRef}`
                  )}&body=${encodeURIComponent(buildOrderSummaryText(submittedOrder))}`}
                  className="jv-btn jv-btn-outline"
                >
                  <i className="bi bi-envelope" />
                  Send via Email
                </a>
              </div>
            </div>
          )}
        </div>

        {step === "bag" && cartItems.length > 0 && (
          <div className="jv-drawer__footer">
            <div className="d-flex justify-content-between small mb-3">
              <span className="text-muted">Total Selected Items</span>
              <strong>
                {cartItems.reduce((acc, it) => acc + it.quantity, 0)} item{cartItems.reduce((acc, it) => acc + it.quantity, 0) > 1 ? "s" : ""}
              </strong>
            </div>
            <button
              type="button"
              className="jv-btn jv-btn-primary w-100"
              onClick={() => setStep("checkout")}
            >
              Proceed to Order &amp; Dispatch
              <i className="bi bi-arrow-right" />
            </button>
          </div>
        )}

        {step === "checkout" && (
          <div className="jv-drawer__footer d-flex gap-2">
            <button
              type="button"
              className="jv-btn jv-btn-outline"
              onClick={() => setStep("bag")}
            >
              Back
            </button>
            <button
              type="submit"
              form="jv-checkout-form"
              className="jv-btn jv-btn-gold flex-grow-1"
            >
              Confirm Order Request
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;

