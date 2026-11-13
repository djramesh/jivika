import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HERO_SLIDES } from "../data/catalog";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section className="jv-hero" aria-label="Featured Assam Harvests">
      <div
        className="jv-hero__bg"
        style={{ backgroundImage: `url(${slide.image})` }}
      />
      <div className="jv-hero__scrim" />

      <div className="jv-container">
        <div className="jv-hero__content">
          <div className="jv-hero__tag">
            <i className="bi bi-patch-check-fill" />
            {slide.tag}
          </div>
          <h1 className="jv-hero__title">{slide.title}</h1>
          <p className="jv-hero__subtitle">{slide.subtitle}</p>
          <div className="d-flex flex-wrap gap-3">
            <Link to="/product" className="jv-btn jv-btn-gold">
              Shop Fresh Harvest
              <i className="bi bi-arrow-right" />
            </Link>
            <Link to="/clusters" className="jv-btn jv-btn-ghost-light">
              Explore 4 Crop Clusters
            </Link>
          </div>
        </div>
      </div>

      <div className="jv-hero__controls">
        <div className="jv-container d-flex align-items-center justify-content-between">
          <div className="jv-hero__dots" role="tablist" aria-label="Hero slides">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`jv-hero__dot ${idx === currentSlide ? "is-active" : ""}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="d-flex align-items-center gap-2">
            <button
              type="button"
              className="jv-hero__arrow"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <i className="bi bi-chevron-left" />
            </button>
            <button
              type="button"
              className="jv-hero__arrow"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <i className="bi bi-chevron-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
