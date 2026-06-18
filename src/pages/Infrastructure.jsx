import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import { CAPABILITIES, LAB } from "../data/infrastructure.js";
import { IconArrow, IconCheck, IconBeaker } from "../components/Icons.jsx";

export default function Infrastructure() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Infrastructure</span>
            <h1>Software, instruments &amp; a <span className="gradient-text">NABL-certified laboratory</span></h1>
            <p className="breadcrumb"><Link to="/">Home</Link> / Infrastructure</p>
          </Reveal>
        </div>
      </section>

      {/* Technical capabilities */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Technical capability</span>
            <h2 className="section-title">Software &amp; instruments we work with</h2>
            <p className="section-sub">Industry-standard modelling, geospatial and monitoring tools behind every RGPL study.</p>
          </Reveal>

          <div className="grid grid-3" style={{ marginTop: 44 }}>
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) + 1} className="card">
                <span className="cap-index">{String(i + 1).padStart(2, "0")}</span>
                <h3>{c.title}</h3>
                <ul className="checklist" style={{ marginTop: 14 }}>
                  {c.items.map((it) => (
                    <li key={it}><span className="tick">✓</span> {it}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NABL Laboratory */}
      <section className="section section--soft">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Laboratory</span>
            <h2 className="section-title">{LAB.name}</h2>
            <p className="body">{LAB.intro}</p>
            <div className="lab-meta">
              <span className="tag">{LAB.accreditation}</span>
              <span className="tag">{LAB.location}</span>
            </div>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 24 }}>
              Request lab services <IconArrow size={18} />
            </Link>
          </Reveal>

          <Reveal delay={1} className="card">
            <div className="ico"><IconBeaker size={26} /></div>
            <h3 style={{ marginBottom: 14 }}>Comprehensive range of services</h3>
            <ul className="checklist">
              {LAB.services.map((s) => (
                <li key={s}><span className="tick">✓</span> {s}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="cta-band">
            <h2>Need testing, monitoring or modelling support?</h2>
            <p>From AERMOD dispersion modelling to NABL-grade lab analysis — our infrastructure backs every assessment.</p>
            <Link to="/contact" className="btn btn-light">Talk to an Expert <IconArrow size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
