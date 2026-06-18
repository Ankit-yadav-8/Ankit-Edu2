import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { IconArrow } from "./Icons.jsx";
import hero1 from "../assets/hero-1.png";
import hero2 from "../assets/hero-2.png";
import hero3 from "../assets/hero-3.png";

const SLIDES = [
  {
    img: hero1,
    kicker: "Water & Hydrology",
    titleA: "The total water budget is a ",
    hl: "comprehensive",
    titleB: " accounting of inflows & outflows",
    text: "Hydrodynamic studies, watershed modelling and water-balance assessments that keep industrial operations sustainable.",
    primary: { to: "/services", label: "Explore Services" },
    secondary: { to: "/contact", label: "Request a Proposal" },
  },
  {
    img: hero2,
    kicker: "Environmental Policy",
    titleA: "Protecting biodiversity, resources & ",
    hl: "ecosystems",
    titleB: "",
    text: "From waste management to wildlife protection — turnkey environmental policy, clearances and compliance support.",
    primary: { to: "/services", label: "Our Expertise" },
    secondary: { to: "/contact", label: "Talk to an Expert" },
  },
  {
    img: hero3,
    kicker: "A Greener Tomorrow",
    titleA: "Building a greener, more ",
    hl: "sustainable",
    titleB: " future together",
    text: "Helping 3,000+ industrial units across 50+ sectors turn compliance into a genuine green advantage.",
    primary: { to: "/about", label: "About RGPL" },
    secondary: { to: "/contact", label: "Get a Quote" },
  },
];

const INTERVAL = 5000;

export default function HeroCarousel() {
  const [i, setI] = useState(0);
  const timer = useRef(null);
  const paused = useRef(false);

  const go = useCallback((n) => setI((n + SLIDES.length) % SLIDES.length), []);
  const next = useCallback(() => setI((p) => (p + 1) % SLIDES.length), []);
  const prev = useCallback(() => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!paused.current) setI((p) => (p + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(timer.current);
  }, []);

  return (
    <section
      className="hero-carousel"
      aria-roledescription="carousel"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {SLIDES.map((s, idx) => (
        <div key={idx} className={`hero-slide ${idx === i ? "active" : ""}`} aria-hidden={idx !== i}>
          <div className="container hero-slide__grid">
            <div className="hero-slide__text">
              <span className="hero-kicker">🌿 {s.kicker}</span>
              <h1>
                {s.titleA}
                <span className="hl">{s.hl}</span>
                {s.titleB}
              </h1>
              <p className="hero-lead">{s.text}</p>
              <div className="hero-actions">
                <Link to={s.secondary.to} className="btn btn-primary">{s.secondary.label} <IconArrow size={18} /></Link>
                <Link to={s.primary.to} className="btn btn-ghost">{s.primary.label}</Link>
              </div>
            </div>
            <div className="hero-slide__media">
              <img src={s.img} alt={s.kicker} loading={idx === 0 ? "eager" : "lazy"} />
            </div>
          </div>
        </div>
      ))}

      <button className="hero-arrow prev" aria-label="Previous slide" onClick={prev}>
        <IconArrow size={20} style={{ transform: "rotate(180deg)" }} />
      </button>
      <button className="hero-arrow next" aria-label="Next slide" onClick={next}>
        <IconArrow size={20} />
      </button>

      <div className="hero-dots">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={idx === i ? "active" : ""}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => go(idx)}
          />
        ))}
      </div>
    </section>
  );
}
