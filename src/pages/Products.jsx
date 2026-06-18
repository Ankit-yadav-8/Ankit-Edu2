import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import { IconBeaker, IconActivity, IconArrow } from "../components/Icons.jsx";

const ROADMAP = [
  { emoji: "🔎", tag: "Internal", title: "AI Research & Drafting Assistant", desc: "Trained on RGPL's own EIA/ESIA reports and regulations — cited answers in seconds instead of searching PDFs by hand." },
  { emoji: "💬", tag: "Website", title: "AI Visitor Assistant", desc: "24/7 chat answering clearances, sectors and accreditation, then routing the lead. Try it bottom-right!" },
  { emoji: "📋", tag: "Lead intake", title: "Smart Project Intake", desc: "A guided form giving a preliminary read on likely clearances — CRZ, Forest, Wildlife — from project location." },
  { emoji: "🛰️", tag: "Geospatial", title: "Geospatial AI for Remote Sensing", desc: "AI-assisted satellite change detection layered onto the existing ArcGIS / Erdas workflow." },
  { emoji: "📡", tag: "Product", title: "Predictive Monitoring", desc: "Anomaly detection and threshold-breach forecasting on CEQMS & air-quality sensor data." },
  { emoji: "🛡️", tag: "Governance", title: "Responsible Use", desc: "Every AI output stays a draft until a qualified RGPL consultant reviews and signs it. Data stays access-controlled." },
];

const PHASES = [
  { n: "01", title: "Foundations · Months 1–3", desc: "Front-end redesign, search & sector filter, SEO, and the AI visitor assistant live. Research assistant piloted." },
  { n: "02", title: "Depth · Months 4–7", desc: "Smart project intake, geospatial AI pilot, AI-assisted insights hub, research assistant rolled out team-wide." },
  { n: "03", title: "Scale · Months 8–12", desc: "Predictive monitoring on CEQMS/AAQMS, ESG drafting workflow, and a client project-status portal." },
];

export default function Products() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Products & AI</span>
            <h1>Monitoring products, now made <span className="gradient-text">predictive with AI</span></h1>
            <p className="breadcrumb"><Link to="/">Home</Link> / Products</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <Reveal className="card">
              <div className="ico"><IconBeaker size={26} /></div>
              <span className="tag">Effluent</span>
              <h3>CEQMS — Continuous Effluent Quality Monitoring System</h3>
              <p>
                A continuous monitoring system that tracks effluent quality parameters in real time for
                industrial compliance. With the AI layer, it flags anomalies and forecasts threshold
                breaches <b>before they happen</b>, rather than only reporting the current reading.
              </p>
            </Reveal>
            <Reveal delay={1} className="card">
              <div className="ico"><IconActivity size={26} /></div>
              <span className="tag">Air Quality</span>
              <h3>Mobile Sensor-Based Air Quality Monitoring System</h3>
              <p>
                A sensor-based AAQMS for ambient air-quality measurement. AI-assisted anomaly detection
                turns a measurement product into a predictive one — a real differentiator when serving
                industrial clients.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">✨ Our AI Roadmap</span>
            <h2 className="section-title">Five places AI is going to work for you</h2>
            <p className="section-sub">Mapped to RGPL's actual services — every AI output is reviewed and signed off by a qualified consultant.</p>
          </Reveal>
          <div className="grid grid-3" style={{ marginTop: 44 }}>
            {ROADMAP.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) + 1} className="card">
                <div className="ico">{r.emoji}</div>
                <span className="tag">{r.tag}</span>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Implementation</span>
            <h2 className="section-title">A phased, low-cost rollout</h2>
          </Reveal>
          <div className="grid grid-3" style={{ marginTop: 44 }}>
            {PHASES.map((p, i) => (
              <Reveal key={p.n} delay={(i % 3) + 1} className="card">
                <div className="step-num gradient-text">{p.n}</div>
                <h3 style={{ marginTop: 6 }}>{p.title}</h3>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <Reveal className="cta-band">
            <h2>Interested in CEQMS or our AI capabilities?</h2>
            <p>Let's scope a pilot for your site — start small, prove the value, then scale.</p>
            <Link to="/contact" className="btn btn-light">Talk to an Expert <IconArrow size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
