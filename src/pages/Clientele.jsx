import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";
import { CLIENTS } from "../data/services.js";
import { IconArrow } from "../components/Icons.jsx";

const SECTORS = [
  "Mining & Minerals", "Thermal / Power", "Cement", "Chemicals & Petrochemicals",
  "Pharmaceuticals", "Metallurgical", "Infrastructure & Building", "Ports & Coastal",
  "Oil & Gas", "Foundries", "Ferro Alloys", "Townships",
];

export default function Clientele() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Clientele</span>
            <h1>Trusted by <span className="gradient-text">3,000+ industrial units</span> across India &amp; abroad</h1>
            <p className="breadcrumb"><Link to="/">Home</Link> / Clientele</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats grid-4">
            <div className="stat"><div className="num"><Counter to={3000} suffix="+" /></div><div className="lbl">Industrial units served</div></div>
            <div className="stat"><div className="num"><Counter to={50} suffix="+" /></div><div className="lbl">Sectoral areas</div></div>
            <div className="stat"><div className="num"><Counter to={20} /></div><div className="lbl">NABET sectors</div></div>
            <div className="stat"><div className="num"><Counter to={29} /></div><div className="lbl">Years of legacy</div></div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Our clientele</span>
            <h2 className="section-title">A few of the organisations we work with</h2>
          </Reveal>
          <Reveal className="logo-strip">
            {CLIENTS.map((c) => (
              <div className="logo-pill" key={c.name}>
                {c.name}
                <small>{c.note}</small>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Sectors served</span>
            <h2 className="section-title">Experience across 50+ sectoral areas</h2>
          </Reveal>
          <Reveal className="chips" style={{ justifyContent: "center", marginTop: 30 }}>
            {SECTORS.map((s) => (
              <span className="chip" key={s} style={{ cursor: "default" }}>{s}</span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <Reveal className="cta-band">
            <h2>Join the organisations who trust RGPL</h2>
            <p>From a single clearance to an enterprise-wide ESG programme — let's start the conversation.</p>
            <Link to="/contact" className="btn btn-light">Become a client <IconArrow size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
