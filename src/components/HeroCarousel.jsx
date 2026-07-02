import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { IconArrow } from "./Icons.jsx";
import img1 from "../assets/ai-hero-1.png";
import img2 from "../assets/ai-hero-2.png";
import img3 from "../assets/ai-hero-3.png";
import img4 from "../assets/ai-hero-4.png";

const SLIDES = [
  {
    bg: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80",
    img: img1,
    kicker: "QCI-NABET ACCREDITED · CATEGORY-'A'",
    titleA: "Shaping a sustainable future for industry & ",
    hl: "infrastructure",
    titleB: "",
    text: "A QCI-NABET accredited Category-'A' EIA Consultant Organisation helping industry and infrastructure projects across India to secure environmental clearances, manage compliance and build a more sustainable future.",
    primary: { to: "/services", label: "Explore services" },
    secondary: { to: "/contact", label: "Start your clearance" },
  },
  {
    bg: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1920&q=80",
    img: img2,
    kicker: "NABET · MoEFCC Accredited",
    titleA: "India's Trusted Environmental Consultancy ",
    hl: "Partner",
    titleB: "",
    text: "Environmental solutions across India. EIA, forest clearance, GIS, ESG, and AI-driven environmental monitoring — all under one roof.",
    primary: { to: "/contact", label: "Request Proposal" },
    secondary: { to: "/services", label: "Explore Solutions" },
  },
  {
    bg: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80",
    img: img3,
    kicker: "REMOTE SENSING & GIS ASSESSMENT",
    titleA: "Advanced Geospatial ",
    hl: "Intelligence",
    titleB: "",
    text: "Cutting-edge satellite imagery, drone surveys, and AI-powered GIS analysis for land use assessment and continuous environmental monitoring.",
    primary: { to: "/about", label: "Learn More" },
    secondary: { to: "/services", label: "Discover More" },
  },
  {
    bg: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&q=80",
    img: img4,
    kicker: "ESG & CLIMATE ADVISORY",
    titleA: "Accelerating Sustainable ",
    hl: "Transformation",
    titleB: "",
    text: "ESG strategy, carbon accounting, climate risk assessment, and net zero roadmaps for India's leading corporations and public sector enterprises.",
    primary: { to: "/contact", label: "Talk to Expert" },
    secondary: { to: "/services", label: "Learn More" },
  },
];

const INTERVAL = 5000;

export default function HeroCarousel() {
  const [i, setI] = useState(0);
  const timer = useRef(null);
  const paused = useRef(false);

  const go = useCallback((n) => setI((n + SLIDES.length) % SLIDES.length), []);

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
          <div className="hero-bg" style={{ backgroundImage: `url(${s.bg})` }}></div>
          <div className="hero-overlay"></div>
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
          </div>
        </div>
      ))}

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
