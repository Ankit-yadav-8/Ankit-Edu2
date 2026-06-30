import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";
import PageHero from "../components/PageHero.jsx";
import { SECTORS, SECTOR_COUNT } from "../data/sectors.js";
import { IconArrow } from "../components/Icons.jsx";
import nabetCert from "../assets/nabet-certificate.png";

export default function Sectors() {
  const { hash } = useLocation();

  // Deep-link support: /sectors#thermal-power scrolls to that sector card.
  useEffect(() => {
    if (!hash) return;
    // Wait a tick so the page has laid out (and after ScrollToTop runs).
    const t = setTimeout(() => {
      const el = document.getElementById(hash.slice(1));
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("sector-card--flash");
      setTimeout(() => el.classList.remove("sector-card--flash"), 1600);
    }, 80);
    return () => clearTimeout(t);
  }, [hash]);

  const catA = SECTORS.filter((s) => s.category === "A").length;
  const catB = SECTORS.filter((s) => s.category === "B").length;

  return (
    <>
      <PageHero
        eyebrow="NABET Accredited Sectors"
        title="The sectors we are"
        highlight="accredited to assess"
        subtitle={`RGPL is a QCI-NABET Category-A accredited EIA Consultant Organisation, empanelled to prepare EIA/EMP reports across ${SECTOR_COUNT} industrial sectors.`}
        breadcrumb="Sectors"
        cards={[
          { type: "stat", num: SECTOR_COUNT, label: "NABET sectors", tone: "green" },
          { type: "info", icon: "🏅", title: "Category-A", sub: "EIA Consultant Org.", tone: "amber" },
          { type: "stat", num: catA, label: "Category-A sectors", tone: "teal" },
          { type: "stat", num: catB, label: "Category-B sectors", tone: "green" },
        ]}
      />

      {/* Sector cards */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Scope of accreditation</span>
            <h2 className="section-title">{SECTOR_COUNT} sectors under our NABET certificate</h2>
            <p className="section-sub">
              Each sector below carries its official NABET and MoEFCC schedule reference and project
              category, exactly as listed on our Certificate of Accreditation.
            </p>
          </Reveal>

          <div className="grid grid-3 sector-grid" style={{ marginTop: 44 }}>
            {SECTORS.map((s, i) => (
              <Reveal key={s.slug} id={s.slug} delay={(i % 3) + 1} className="card sector-card">
                <div className="sector-card__top">
                  <span className="sector-card__icon">{s.icon}</span>
                  <span className={`sector-badge cat-${s.category}`}>Category {s.category}</span>
                </div>
                <h3>{s.name}</h3>
                <p className="sector-card__scope">{s.scope}</p>
                <p>{s.desc}</p>
                <div className="sector-card__codes">
                  <span className="tag">NABET {s.nabet}</span>
                  <span className="tag">MoEFCC {s.moefcc}</span>
                </div>
                <Link to={`/sectors/${s.slug}`} className="sector-card__cta">
                  Explore sector <IconArrow size={15} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate proof */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">NABET Certificate</span>
            <h2 className="section-title">Verified Category-A accreditation</h2>
            <p className="section-sub">
              Our QCI-NABET Certificate of Accreditation (EIA Consultant Organization, Scheme Version 3)
              lists every sector and functional area we are authorised to cover.
            </p>
          </Reveal>
          <div className="cert-split" style={{ marginTop: 40 }}>
            <Reveal className="card">
              <div className="stats grid-2">
                <div className="stat"><div className="num"><Counter to={SECTOR_COUNT} /></div><div className="lbl">Accredited sectors</div></div>
                <div className="stat"><div className="num"><Counter to={catA} /></div><div className="lbl">Category-A</div></div>
                <div className="stat"><div className="num"><Counter to={3000} suffix="+" /></div><div className="lbl">Units served</div></div>
                <div className="stat"><div className="num"><Counter to={3} /></div><div className="lbl">Years of excellence</div></div>
              </div>
              <ul className="checklist" style={{ marginTop: 22 }}>
                <li><span className="tick">✓</span> QCI-NABET Category-A EIA Consultant Organisation</li>
                <li><span className="tick">✓</span> Recognised by MoEFCC for Environmental Clearance</li>
                <li><span className="tick">✓</span> Approved EIA Coordinators &amp; Functional Area Experts on record</li>
              </ul>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: 22 }}>
                More about RGPL <IconArrow size={18} />
              </Link>
            </Reveal>
            <Reveal delay={1} className="cert-frame">
              <img src={nabetCert} alt="NABET Certificate of Accreditation" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="cta-band">
            <h2>Operating in one of these sectors?</h2>
            <p>Talk to our team about the right EIA, clearance or monitoring pathway for your project.</p>
            <Link to="/contact" className="btn btn-light">Request a Proposal <IconArrow size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
