import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import Counter from "./Counter.jsx";

/* Rich inner-page hero: heading on the left, a staggered "mix card"
   collage on the right (College-Parichay / JEE-style). Pass `cards`
   as a flat array; they're split into two offset columns. */
function CollageCard({ c }) {
  if (c.type === "image") {
    return (
      <div className="collage-card collage-card--image">
        <img src={c.src} alt={c.alt || ""} loading="lazy" />
      </div>
    );
  }
  if (c.type === "stat") {
    return (
      <div className={`collage-card collage-card--stat tone-${c.tone || "green"}`}>
        <div className="collage-num">
          <Counter to={c.num} suffix={c.suffix || ""} />
        </div>
        <div className="collage-label">{c.label}</div>
      </div>
    );
  }
  // info
  return (
    <div className={`collage-card collage-card--info tone-${c.tone || "green"}`}>
      <span className="collage-ico">{c.icon}</span>
      <b>{c.title}</b>
      {c.sub && <small>{c.sub}</small>}
    </div>
  );
}

export default function PageHero({
  eyebrow,
  title,
  highlight,
  titleEnd,
  subtitle,
  breadcrumb,
  cards = [],
  cta,
}) {
  const colA = cards.filter((_, i) => i % 2 === 0);
  const colB = cards.filter((_, i) => i % 2 === 1);

  return (
    <section className="page-hero">
      <div className="container page-hero__grid">
        <Reveal className="page-hero__text">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1>
            {title} {highlight && <span className="gradient-text">{highlight}</span>}
            {titleEnd ? ` ${titleEnd}` : ""}
          </h1>
          {subtitle && <p className="page-hero__sub">{subtitle}</p>}
          {cta && (
            <div className="hero-actions">
              {cta.map((b) => (
                <Link key={b.to} to={b.to} className={`btn ${b.variant || "btn-primary"}`}>
                  {b.label}
                </Link>
              ))}
            </div>
          )}
          {breadcrumb && (
            <p className="breadcrumb" style={{ marginTop: 18 }}>
              <Link to="/">Home</Link> / {breadcrumb}
            </p>
          )}
        </Reveal>

        {cards.length > 0 && (
          <Reveal delay={1} className="hero-collage">
            <div className="collage-col">
              {colA.map((c, i) => (
                <div key={i} className="collage-wrap" style={{ animationDelay: `${i * 0.6}s` }}>
                  <CollageCard c={c} />
                </div>
              ))}
            </div>
            <div className="collage-col collage-col--offset">
              {colB.map((c, i) => (
                <div key={i} className="collage-wrap" style={{ animationDelay: `${i * 0.6 + 0.3}s` }}>
                  <CollageCard c={c} />
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
