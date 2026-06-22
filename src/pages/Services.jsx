import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import PageHero from "../components/PageHero.jsx";
import SmartImg from "../components/SmartImg.jsx";
import { SERVICES, SERVICE_CATEGORIES, CATEGORY_IMG } from "../data/services.js";
import { IconSearch, IconArrow } from "../components/Icons.jsx";

export default function Services() {
  const [searchParams] = useSearchParams();
  const [cat, setCat] = useState(searchParams.get("cat") || "all");
  const [term, setTerm] = useState("");
  const [open, setOpen] = useState(null);

  // Deep-link support: navbar/footer links like /services?cat=Clearance
  // pre-select the matching category each time the query param changes.
  useEffect(() => {
    const next = searchParams.get("cat");
    if (next) {
      setCat(next);
      setOpen(null);
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

      <section className="section">
        <div className="container">
          <div className="toolbar">
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
                  onClick={() => { setCat(c.key); setOpen(null); }}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {list.length ? (
            <div className="grid grid-3">
              {list.map((s) => {
                const isOpen = open === s.t;
                return (
                  <div className={`card svc-card2 ${isOpen ? "open" : ""}`} key={s.t}>
                    <button className="svc-card2__head" onClick={() => setOpen(isOpen ? null : s.t)} aria-expanded={isOpen}>
                      <div className="svc-thumb">
                        <SmartImg src={CATEGORY_IMG[s.c]} alt={s.c} />
                      </div>
                      <div className="svc-card2__body">
                        <span className="tag">{s.c}</span>
                        <h3>{s.t}</h3>
                        <p>{s.d}</p>
                      </div>
                      <span className={`svc-caret ${isOpen ? "open" : ""}`} aria-hidden="true">▾</span>
                    </button>
                    <div className="svc-detail" style={{ maxHeight: isOpen ? 320 : 0 }}>
                      <div className="svc-detail__inner">
                        <p>{s.more}</p>
                        <Link to="/contact" className="btn btn-primary btn-sm">Enquire about this <IconArrow size={16} /></Link>
                      </div>
                    </div>
                  </div>
                );
              })}
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
