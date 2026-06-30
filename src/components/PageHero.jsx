import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import Counter from "./Counter.jsx";

/* Rich inner-page hero: heading on the left, and a single cohesive
   info panel on the right that holds all the data (optional image on top,
   then a 2-column grid of stats / info cells separated by hairline dividers). */
export default function PageHero({
  eyebrow,
  title,
  highlight,
  titleEnd,
  subtitle,
  breadcrumb,
  cards = [],
  cta,
  fullImage = false,
}) {
  const image = cards.find((c) => c.type === "image");
  const data = cards.filter((c) => c.type !== "image");

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
          <Reveal delay={1} className="hero-panel-wrap">
            <div className={`hero-panel ${fullImage ? "hero-panel--full-image" : ""}`}>
              {image && (
                <div className="hero-panel__img">
                  <img src={image.src} alt={image.alt || ""} loading="lazy" />
                </div>
              )}
              {data.length > 0 && (
                <div className="hero-panel__grid">
                  {data.map((c, i) => (
                    <div
                      key={i}
                      className={`hero-panel__item ${c.type === "stat" ? "is-stat" : ""} tone-${c.tone || "green"}`}
                    >
                      {c.type === "stat" ? (
                        <>
                          <div className="hp-num">
                            <Counter to={c.num} suffix={c.suffix || ""} />
                          </div>
                          <div className="hp-label">{c.label}</div>
                        </>
                      ) : (
                        <>
                          <span className="hp-ico">{c.icon}</span>
                          <div>
                            <b>{c.title}</b>
                            {c.sub && <small>{c.sub}</small>}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
