import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";
import { CLIENT_LOGOS } from "../data/clients.js";
import { SECTOR_COUNT } from "../data/sectors.js";
import PageHero from "../components/PageHero.jsx";
import { IconArrow } from "../components/Icons.jsx";
import clientsMeetingImg from "../assets/clients_meeting.png";

const SECTORS = [
  "Mining & Minerals", "Thermal / Power", "Cement", "Chemicals & Petrochemicals",
  "Pharmaceuticals", "Metallurgical", "Infrastructure & Building", "Ports & Coastal",
  "Oil & Gas", "Foundries", "Ferro Alloys", "Townships",
];

export default function Clientele() {
  return (
    <>
      <PageHero
        eyebrow="Clientele"
        title="Trusted by"
        highlight="Industrial units"
        titleEnd="across India"
        subtitle="From cement and power to mining, chemicals and infrastructure — leading industrial names rely on RGPL."
        breadcrumb="Clientele"
        cards={[
          { type: "image", src: clientsMeetingImg, alt: "Trusted corporate partners" },
        ]}
        fullImage={true}
      />



      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Our clientele</span>
            <h2 className="section-title">A few of the organisations we work with</h2>
          </Reveal>
          <Reveal className="client-grid">
            {CLIENT_LOGOS.map((c) => (
              <div className="client-logo" key={c.name}>
                <img src={c.src} alt={c.name} loading="lazy" />
              </div>
            ))}
          </Reveal>
          <Reveal className="client-text-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginTop: '40px', textAlign: 'center' }}>
            {CLIENT_LOGOS.map((c) => (
              <div key={`txt-${c.name}`} style={{ fontWeight: 600, color: 'var(--ink-soft)' }}>
                {c.name}
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
