import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { IconArrow } from "./Icons.jsx";

/* A calm, hand-drawn-style nature scene rendered as inline SVG so the hero
   stays asset-free and crisp at any size. Palette varies per slide. */
function NatureScene({ p }) {
  return (
    <svg viewBox="0 0 1440 620" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`sky-${p.id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.sky1} />
          <stop offset="1" stopColor={p.sky2} />
        </linearGradient>
      </defs>
      {/* sky */}
      <rect width="1440" height="620" fill={`url(#sky-${p.id})`} />
      {/* sun */}
      <circle cx="1140" cy="150" r="78" fill={p.sun} opacity="0.85" />
      <circle cx="1140" cy="150" r="110" fill={p.sun} opacity="0.18" />
      {/* far hills */}
      <path d="M0 430 Q 360 330 720 410 T 1440 380 V620 H0 Z" fill={p.hill3} />
      {/* mid hills */}
      <path d="M0 480 Q 300 400 640 470 T 1440 450 V620 H0 Z" fill={p.hill2} />
      {/* near hill */}
      <path d="M0 540 Q 420 470 860 540 T 1440 520 V620 H0 Z" fill={p.hill1} />
      {/* trees on the near hill */}
      {[
        [220, 528], [300, 540], [1010, 532], [1095, 524], [1180, 540],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <rect x="-4" y="0" width="8" height="34" rx="3" fill={p.trunk} />
          <circle cx="0" cy="-10" r="26" fill={p.tree} />
          <circle cx="-16" cy="2" r="18" fill={p.tree} />
          <circle cx="16" cy="2" r="18" fill={p.tree} />
        </g>
      ))}
      {/* birds */}
      <g stroke={p.bird} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7">
        <path d="M340 150 q 12 -12 24 0 q 12 -12 24 0" />
        <path d="M430 110 q 9 -9 18 0 q 9 -9 18 0" />
      </g>
    </svg>
  );
}

const SLIDES = [
  {
    palette: { id: "a", sky1: "#dff3e6", sky2: "#bfe6c9", hill3: "#a9d9b0", hill2: "#7cc489", hill1: "#4ea862", tree: "#2f8b4a", trunk: "#7a5a3a", sun: "#f7e9a8", bird: "#2f6b46" },
    kicker: "Water & Hydrology",
    titleA: "The total water budget is a ",
    hl: "comprehensive",
    titleB: " accounting of inflows & outflows",
    text: "Hydrodynamic studies, watershed modelling and water-balance assessments that keep industrial operations sustainable.",
    primary: { to: "/services", label: "Explore Services" },
    secondary: { to: "/contact", label: "Request a Proposal" },
  },
  {
    palette: { id: "b", sky1: "#e6f4dd", sky2: "#c9e8b6", hill3: "#bfe0a0", hill2: "#94cf78", hill1: "#5fb45a", tree: "#2e8b46", trunk: "#7a5a3a", sun: "#eef3b0", bird: "#37734a" },
    kicker: "Environmental Policy",
    titleA: "Protecting biodiversity, resources & ",
    hl: "ecosystems",
    titleB: "",
    text: "From waste management to wildlife protection — turnkey environmental policy, clearances and compliance support.",
    primary: { to: "/services", label: "Our Expertise" },
    secondary: { to: "/contact", label: "Talk to an Expert" },
  },
  {
    palette: { id: "c", sky1: "#e3f5ea", sky2: "#bfe7cf", hill3: "#a6dcb8", hill2: "#74c699", hill1: "#3fa172", tree: "#277e57", trunk: "#7a5a3a", sun: "#f3edb0", bird: "#2c6b4d" },
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

  const go = useCallback((n) => setI((prev) => (n + SLIDES.length) % SLIDES.length), []);
  const next = useCallback(() => go(i + 1), [go, i]);
  const prev = useCallback(() => go(i - 1), [go, i]);

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
          <div className="hero-slide__bg"><NatureScene p={s.palette} /></div>
          <div className="container">
            <div className="hero-slide__inner">
              <span className="hero-kicker">🌿 {s.kicker}</span>
              <h1>
                {s.titleA}
                <span className="hl">{s.hl}</span>
                {s.titleB}
              </h1>
              <p className="hero-lead">{s.text}</p>
              <div className="hero-actions">
                <Link to={s.secondary.to} className="btn btn-light">{s.secondary.label} <IconArrow size={18} /></Link>
                <Link to={s.primary.to} className="btn btn-outline-light">{s.primary.label}</Link>
              </div>
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
