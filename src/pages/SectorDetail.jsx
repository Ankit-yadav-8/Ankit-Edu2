import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import PageHero from "../components/PageHero.jsx";
import NotFound from "./NotFound.jsx";
import { SECTORS, getSector } from "../data/sectors.js";
import { IconArrow, IconCheck } from "../components/Icons.jsx";

export default function SectorDetail() {
  const { slug } = useParams();
  const sector = getSector(slug);

  useEffect(() => {
    if (sector) document.title = `${sector.name} | NABET Sector | Rejig GreenLogic`;
  }, [sector]);

  // Unknown slug → render the standard 404 page.
  if (!sector) return <NotFound />;

  const idx = SECTORS.findIndex((s) => s.slug === slug);
  const prev = SECTORS[(idx - 1 + SECTORS.length) % SECTORS.length];
  const next = SECTORS[(idx + 1) % SECTORS.length];

  return (
    <>
      <PageHero
        eyebrow={`NABET Sector ${sector.nabet} · Category ${sector.category}`}
        title="NABET-accredited:"
        highlight={sector.name}
        subtitle={sector.long}
        breadcrumb={sector.name}
        cta={[
          { to: "/contact", label: "Discuss your project", variant: "btn-primary" },
          { to: "/sectors", label: "All sectors", variant: "btn-ghost" },
        ]}
        cards={[
          { type: "image", src: sector.image, alt: sector.name },
          { type: "info", icon: sector.icon, title: sector.name, sub: sector.scope, tone: "green" },
          { type: "info", icon: "🏅", title: `Category ${sector.category}`, sub: "EIA Consultant Org.", tone: "amber" },
          { type: "info", icon: "📄", title: `NABET ${sector.nabet}`, sub: `MoEFCC ${sector.moefcc}`, tone: "teal" },
        ]}
      />

      {/* Overview */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Sector overview</span>
            <h2 className="section-title">{sector.name}</h2>
            <p className="body" style={{ marginTop: 14 }}>{sector.long}</p>
            <p className="body">{sector.desc}</p>
            <div className="lab-meta" style={{ marginTop: 18 }}>
              <span className="tag">NABET {sector.nabet}</span>
              <span className="tag">MoEFCC {sector.moefcc}</span>
              <span className={`sector-badge cat-${sector.category}`}>Category {sector.category}</span>
            </div>
            <div className="hero-actions" style={{ marginTop: 24 }}>
              <Link to="/contact" className="btn btn-primary">Request a proposal <IconArrow size={18} /></Link>
              <Link to="/services" className="btn btn-ghost">Related services</Link>
            </div>
          </Reveal>
          <Reveal delay={1} className="cert-frame">
            <img src={sector.image} alt={sector.name} loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* Key environmental aspects */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">What we assess</span>
            <h2 className="section-title">Key environmental aspects</h2>
            <p className="section-sub">The principal impacts our studies characterise and manage for this sector.</p>
          </Reveal>
          <div className="grid grid-2" style={{ marginTop: 40 }}>
            {sector.aspects.map((a, i) => (
              <Reveal key={a} delay={(i % 2) + 1} className="card">
                <span className="cap-index">{String(i + 1).padStart(2, "0")}</span>
                <h3 style={{ marginTop: 6 }}>{a}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How RGPL supports + approvals */}
      <section className="section">
        <div className="container split">
          <Reveal className="card">
            <div className="ico"><IconCheck size={26} /></div>
            <h3 style={{ marginBottom: 14 }}>How RGPL supports this sector</h3>
            <ul className="checklist">
              {sector.services.map((s) => (
                <li key={s}><span className="tick">✓</span> {s}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={1} className="card">
            <div className="ico"><IconArrow size={26} /></div>
            <h3 style={{ marginBottom: 14 }}>Approvals &amp; regulatory framework</h3>
            <ul className="checklist">
              {sector.approvals.map((a) => (
                <li key={a}><span className="tick">✓</span> {a}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Prev / next sector navigation */}
      <section className="section section--soft">
        <div className="container">
          <div className="sector-nav">
            <Link to={`/sectors/${prev.slug}`} className="sector-nav__btn">
              <span className="sector-nav__dir">← Previous sector</span>
              <span className="sector-nav__name">{prev.icon} {prev.name}</span>
            </Link>
            <Link to="/sectors" className="sector-nav__all">All {SECTORS.length} sectors</Link>
            <Link to={`/sectors/${next.slug}`} className="sector-nav__btn sector-nav__btn--next">
              <span className="sector-nav__dir">Next sector →</span>
              <span className="sector-nav__name">{next.icon} {next.name}</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="cta-band">
            <h2>Planning a project in the {sector.name.toLowerCase()} sector?</h2>
            <p>Our NABET Category-{sector.category} team can scope the right EIA, clearance and monitoring pathway for you.</p>
            <Link to="/contact" className="btn btn-light">Get in touch <IconArrow size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
