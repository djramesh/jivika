import { useState } from "react";
import SmartImage from "./SmartImage";
import "../styles/contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "Bulk / Wholesale Procurement",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="jv-page-banner">
        <SmartImage
          src="/contact_bnr_img.jpg"
          alt="Contact Jeevika"
          className="jv-page-banner__bg"
        />
        <div className="jv-page-banner__scrim" />
        <div className="jv-container jv-page-banner__content">
          <span
            className="jv-eyebrow"
            style={{ background: "rgba(255,255,255,0.14)", color: "#f8d48b" }}
          >
            Guwahati Coordination Desk
          </span>
          <h1 className="jv-page-banner__title">Contact &amp; Wholesale Desk</h1>
          <p className="jv-page-banner__desc">
            Reach out for retail assistance, B2B spice &amp; tea lots, corporate gifting, or agricultural partnerships.
          </p>
        </div>
      </section>

      <section className="jv-section">
        <div className="jv-container">
          <div className="row g-4 align-items-stretch">
            {/* Left: Contact Channels & Visual */}
            <div className="col-12 col-lg-5 d-flex flex-column gap-3">
              <div className="jv-contact-card flex-grow-1">
                <span className="jv-eyebrow">Direct Channels</span>
                <h2 className="font-display h3 mb-2">We’re Ready to Help You</h2>
                <p className="text-muted small mb-4">
                  Need farm-fresh Assam produce, wholesale pricing, or value-chain consultations? Connect with our team directly.
                </p>

                <div className="d-flex flex-column gap-3 mb-4">
                  <a
                    href="mailto:tinsukiaspicesoiety@gmail.com"
                    className="jv-contact-method"
                  >
                    <div className="jv-contact-method__icon">
                      <i className="bi bi-envelope-fill" />
                    </div>
                    <div>
                      <div className="small text-muted fw-semibold">Email Desk</div>
                      <div className="fw-bold text-break">tinsukiaspicesoiety@gmail.com</div>
                    </div>
                  </a>

                  <a href="tel:9613466206" className="jv-contact-method">
                    <div className="jv-contact-method__icon">
                      <i className="bi bi-telephone-fill" />
                    </div>
                    <div>
                      <div className="small text-muted fw-semibold">Phone &amp; Trade Desk</div>
                      <div className="fw-bold">+91 96134 66206</div>
                    </div>
                  </a>

                  <a
                    href="https://www.google.com/maps/search/S.B.+Complex,+hatigaon/@26.137904,91.785799,5424m"
                    target="_blank"
                    rel="noreferrer"
                    className="jv-contact-method"
                  >
                    <div className="jv-contact-method__icon">
                      <i className="bi bi-geo-alt-fill" />
                    </div>
                    <div>
                      <div className="small text-muted fw-semibold">Guwahati Office</div>
                      <div className="fw-semibold small">
                        SB Complex, H.No-5, Brindavan Path, Hatigaon Main Road, Kamrup, Guwahati, Assam 781038
                      </div>
                    </div>
                  </a>
                </div>

                <div className="text-center pt-2">
                  <SmartImage
                    src="/about-us-img-3.png"
                    alt="Jeevika Support Team"
                    style={{ maxHeight: 190, width: "auto", objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>

            {/* Right: Interactive Inquiry Form */}
            <div className="col-12 col-lg-7">
              <div className="jv-contact-card h-100">
                <span className="jv-eyebrow jv-eyebrow--gold">Send a Message</span>
                <h2 className="font-display h3 mb-2">Request a Quote or Consultation</h2>
                <p className="text-muted small mb-4">
                  Tell us what crops, pack sizes, or institutional quantities you need.
                </p>

                {submitted ? (
                  <div className="text-center py-5">
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
                    <h3 className="h4 mb-2">Inquiry Ready to Dispatch!</h3>
                    <p className="text-muted small mb-4">
                      Thank you, <strong>{form.name}</strong>. Send this directly via email or WhatsApp for immediate coordination with our Guwahati desk.
                    </p>
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                      <a
                        href={`mailto:tinsukiaspicesoiety@gmail.com?subject=${encodeURIComponent(
                          `Jeevika Inquiry: ${form.topic}`
                        )}&body=${encodeURIComponent(
                          `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nTopic: ${form.topic}\n\n${form.message}`
                        )}`}
                        className="jv-btn jv-btn-primary"
                      >
                        <i className="bi bi-envelope" /> Open in Email Client
                      </a>
                      <button
                        type="button"
                        className="jv-btn jv-btn-outline"
                        onClick={() => {
                          setSubmitted(false);
                          setForm({
                            name: "",
                            email: "",
                            phone: "",
                            topic: "Bulk / Wholesale Procurement",
                            message: "",
                          });
                        }}
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-12 col-md-6 jv-checkout-field mb-0">
                        <label htmlFor="c-name">Your Name *</label>
                        <input
                          id="c-name"
                          type="text"
                          required
                          placeholder="Full name or company"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                      </div>
                      <div className="col-12 col-md-6 jv-checkout-field mb-0">
                        <label htmlFor="c-phone">Phone / WhatsApp *</label>
                        <input
                          id="c-phone"
                          type="tel"
                          required
                          placeholder="+91 98XXXXXXXX"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                      </div>
                      <div className="col-12 col-md-6 jv-checkout-field mb-0">
                        <label htmlFor="c-email">Email Address *</label>
                        <input
                          id="c-email"
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                      <div className="col-12 col-md-6 jv-checkout-field mb-0">
                        <label htmlFor="c-topic">Inquiry Topic</label>
                        <select
                          id="c-topic"
                          value={form.topic}
                          onChange={(e) => setForm({ ...form, topic: e.target.value })}
                        >
                          <option value="Bulk / Wholesale Procurement">Bulk / Wholesale Procurement</option>
                          <option value="Retail Order Support">Retail Order Support</option>
                          <option value="Corporate / CSR Gifting">Corporate / CSR Gifting</option>
                          <option value="FPO / Institutional Partnership">FPO / Institutional Partnership</option>
                        </select>
                      </div>
                      <div className="col-12 jv-checkout-field mb-0">
                        <label htmlFor="c-msg">Requirements / Message *</label>
                        <textarea
                          id="c-msg"
                          rows={5}
                          required
                          placeholder="Mention products, estimated quantities (kg/crates), and delivery city..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                        />
                      </div>
                      <div className="col-12 pt-2">
                        <button type="submit" className="jv-btn jv-btn-primary">
                          Submit Inquiry
                          <i className="bi bi-send" />
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="mt-5">
            <h2 className="font-display h3 mb-3">Locate Our Guwahati Office</h2>
            <div className="jv-map-frame">
              <iframe
                title="Jeevika Office Location Map"
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=S.B.%20Complex,%20Hatigaon,%20Guwahati&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
