import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import PageHero from "../components/PageHero.jsx";
import SmartImg from "../components/SmartImg.jsx";
import { SERVICES, SERVICE_CATEGORIES, CATEGORY_IMG } from "../data/services.js";
import { IconSearch, IconArrow } from "../components/Icons.jsx";

const getCatIcon = (cat) => {
  switch(cat) {
    case 'Assessment': return <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
    case 'Clearance': return <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><polyline points="16 13 8 13"></polyline><polyline points="16 17 8 17"></polyline><polyline points="10 9 9 9 8 9"></polyline></svg>;
    case 'Monitoring': return <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>;
    case 'Audit': return <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
    case 'Geospatial': return <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line></svg>;
    case 'ESG': return <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M2 22A20 20 0 0 1 22 2c0 0-5.3 0-10 4.7C7.3 11.4 2 22 2 22z"></path><path d="M2 22a20 20 0 0 0 20-20"></path><line x1="12" y1="12" x2="2" y2="22"></line></svg>;
    default: return <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>;
  }
}

export default function Services() {
  const [searchParams] = useSearchParams();
  const [cat, setCat] = useState(searchParams.get("cat") || "all");
  const [term, setTerm] = useState("");

  // Deep-link support: navbar/footer links like /services?cat=Clearance
  // pre-select the matching category each time the query param changes.
  useEffect(() => {
    const next = searchParams.get("cat");
    if (next) {
      setCat(next);
    }
  }, [searchParams]);

  const list = useMemo(() => {
    const q = term.toLowerCase().trim();
    return SERVICES.filter(
      (s) =>
        (cat === "all" || s.c === cat) &&
        (s.t.toLowerCase().includes(q) ||
          s.d.toLowerCase().includes(q) ||
          (s.more || "").toLowerCase().includes(q))
    );
  }, [cat, term]);

  return (
    <>
      <PageHero
        eyebrow="Product & Services"
        title="Everything you need for"
        highlight="environmental compliance"
        subtitle="From impact assessments to clearances, audits and ESG — a single partner across the entire compliance lifecycle. Click any service to see the full scope."
        breadcrumb="Product & Services"
        cards={[
          { type: "info", icon: "📋", title: "30+ Services", sub: "Full compliance lifecycle", tone: "green" },
          { type: "stat", num: 20, label: "NABET sectors", tone: "teal" },
          { type: "info", icon: "🌿", title: "EIA / ESIA", sub: "IFC & ADB aligned", tone: "amber" },
          { type: "stat", num: 6, label: "Service categories", tone: "green" },
        ]}
      />

      <section className="section" style={{ background: "var(--off)", padding: "60px 0 100px" }}>
        <div className="container">
          <div className="toolbar" style={{ marginBottom: "40px" }}>
            <div className="search-wrap">
              <IconSearch size={18} />
              <input
                placeholder="Search services & NABET sectors…"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
            </div>
            <div className="chips">
              {SERVICE_CATEGORIES.map((c) => (
                <button
                  key={c.key}
                  className={`chip ${cat === c.key ? "active" : ""}`}
                  onClick={() => setCat(c.key)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {list.length ? (
            <div className="grid grid-3" style={{ gap: "32px", alignItems: "stretch" }}>
              {list.map((s, i) => (
                <Reveal key={s.t} delay={i % 3}>
                  <div className="svc-card3">
                    <div className="svc-card3__top">
                      <div className={`svc-card3__icon cat-${s.c.replace(/[^a-zA-Z]/g, '')}`}>
                        {getCatIcon(s.c)}
                      </div>
                      <span className="svc-card3__tag">{s.c}</span>
                    </div>
                    <h3>{s.t}</h3>
                    <p className="svc-card3__d">{s.d}</p>
                    <hr className="svc-card3__divider" />
                    <p className="svc-card3__more">{s.more}</p>
                    <Link to="/contact" className="svc-card3__link">Enquire about this <IconArrow size={14} /></Link>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="empty-note">No services match your search. Try a different term or filter.</p>
          )}
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <Reveal className="cta-band">
            <h2>Not sure which service you need?</h2>
            <p>Use our smart intake or ask the AI assistant — we'll point you to the right clearance in seconds.</p>
            <Link to="/contact" className="btn btn-light">Request a Proposal <IconArrow size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
