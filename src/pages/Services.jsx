import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import { SERVICES, SERVICE_CATEGORIES } from "../data/services.js";
import PageHero from "../components/PageHero.jsx";
import { IconSearch, IconLeaf, IconArrow } from "../components/Icons.jsx";

export default function Services() {
  const [cat, setCat] = useState("all");
  const [term, setTerm] = useState("");

  const list = useMemo(() => {
    const q = term.toLowerCase().trim();
    return SERVICES.filter(
      (s) =>
        (cat === "all" || s.c === cat) &&
        (s.t.toLowerCase().includes(q) || s.d.toLowerCase().includes(q))
    );
  }, [cat, term]);

  return (
    <>
      <PageHero
        eyebrow="Product & Services"
        title="Everything you need for"
        highlight="environmental compliance"
        subtitle="From impact assessments to clearances, audits and ESG — a single partner across the entire compliance lifecycle."
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
                  onClick={() => setCat(c.key)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {list.length ? (
            <div className="grid grid-3">
              {list.map((s) => (
                <div className="card svc-card" key={s.t}>
                  <div className="ico"><IconLeaf size={22} /></div>
                  <div>
                    <span className="tag">{s.c}</span>
                    <h3>{s.t}</h3>
                    <p style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </div>
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
