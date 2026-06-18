import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";
import HeroCarousel from "../components/HeroCarousel.jsx";
import { CLIENTS } from "../data/services.js";
import {
  IconDoc, IconLeaf, IconEye, IconShield, IconChart, IconGlobe,
  IconCheck, IconActivity, IconArrow, IconUsers, IconBeaker, IconStar,
} from "../components/Icons.jsx";

const SERVICES = [
  { icon: <IconDoc size={26} />, title: "EIA & ESIA Studies", desc: "Full Environmental & Social Impact Assessment studies aligned to IFC and ADB guidelines, with baseline monitoring and compliance auditing." },
  { icon: <IconLeaf size={26} />, title: "Forest & Wildlife Clearance", desc: "Biodiversity Impact Assessment, forest & wildlife clearances, conservation and mangrove management plans, tree enumeration and ecology studies." },
  { icon: <IconEye size={26} />, title: "Remote Sensing & GIS", desc: "Land Use / Land Cover mapping by satellite imagery, mining plan preparation, DGPS surveys and AI-assisted change detection." },
  { icon: <IconShield size={26} />, title: "Compliance & Auditing", desc: "Environmental compliance auditing, due diligence, permitting, green / waste audits and corporate EHS support." },
  { icon: <IconChart size={26} />, title: "ESG & Climate Risk", desc: "Sustainability & ESDD studies, ESG management frameworks, Climate Change Risk Assessment and IGBC/LEED documentation." },
  { icon: <IconGlobe size={26} />, title: "Coastal & Marine", desc: "Coastal Regulatory Zone (CRZ) clearance, marine environment monitoring, hydrodynamic and hydrological studies." },
];

const WORKFORCE = [
  { icon: <IconUsers size={22} />, role: "Technical Crew", count: 12, sub: "Senior & project consultants" },
  { icon: <IconBeaker size={22} />, role: "Lab Experts", count: 5, sub: "Sampling & analysis specialists" },
  { icon: <IconStar size={22} />, role: "Field Officers", count: 3, sub: "On-site monitoring & surveys" },
  { icon: <IconCheck size={22} />, role: "Auxiliary Staff", count: 5, sub: "Coordination & operations" },
];

export default function Home() {
  return (
    <>
      {/* ===================== HERO CAROUSEL ===================== */}
      <HeroCarousel />

      {/* ===================== CREDIBILITY STRIP ===================== */}
      <div className="cred-strip">
        <div className="container">
          <span><b>3,000+</b> industrial units served</span><span className="dot" />
          <span><b>50+</b> sectoral areas</span><span className="dot" />
          <span><b>20</b> NABET-accredited sectors</span><span className="dot" />
          <span><b>India</b> &amp; abroad</span>
        </div>
      </div>

      {/* ===================== WELCOME / ABOUT ===================== */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Who we are</span>
            <h2 className="section-title">Welcome to Rejig Green Logic Private Limited</h2>
            <p className="body">
              Incorporated on 15th December 2021, <b>Rejig GreenLogic Private Limited (RGPL)</b> is a
              group of well-known environmental experts pooled together to extend environmental
              consultancy and be your techno-legal advisory partner.
            </p>
            <p className="body" style={{ marginTop: 12 }}>
              We have successfully provided environmental solutions to{" "}
              <b>more than 3,000 specialised industrial units</b> across India and abroad, covering
              more than fifty sectoral areas.
            </p>
            <ul className="checklist">
              <li><span className="tick">✓</span> Highest integrity to QCI, NABET &amp; MoEF&amp;CC standards</li>
              <li><span className="tick">✓</span> Trust, Responsibility, Collaboration &amp; Performance culture</li>
              <li><span className="tick">✓</span> A responsible entity preaching green initiatives</li>
            </ul>
            <Link to="/about" className="btn btn-ghost" style={{ marginTop: 24 }}>
              Read more <IconArrow size={18} />
            </Link>
          </Reveal>

          <Reveal delay={1}>
            <div className="stats grid-2">
              <div className="stat"><div className="num"><Counter to={3000} suffix="+" /></div><div className="lbl">Industrial units served</div></div>
              <div className="stat"><div className="num"><Counter to={50} suffix="+" /></div><div className="lbl">Sectoral areas</div></div>
              <div className="stat"><div className="num"><Counter to={20} /></div><div className="lbl">NABET sectors</div></div>
              <div className="stat"><div className="num"><Counter to={25} suffix="+" /></div><div className="lbl">Expert team members</div></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">What we do</span>
            <h2 className="section-title">Comprehensive environmental services</h2>
            <p className="section-sub">
              From impact assessments to clearances, audits and ESG — a single partner across the
              entire compliance lifecycle.
            </p>
          </Reveal>

          <div className="grid grid-3" style={{ marginTop: 44 }}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) + 1} className="card">
                <div className="ico">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: 36 }}>
            <Link to="/services" className="btn btn-primary">View all 30+ services <IconArrow size={18} /></Link>
          </div>
        </div>
      </section>

      {/* ===================== AI SECTION ===================== */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <div className="hero-card" style={{ boxShadow: "var(--shadow-lg)" }}>
              <div className="hc-row"><span className="hc-ico">🤖</span><div><b>AI Visitor Assistant</b><small>Answers clearances, sectors &amp; accreditation 24/7</small></div></div>
              <div className="hc-row"><span className="hc-ico">📋</span><div><b>Smart Project Intake</b><small>Preliminary read on likely clearances</small></div></div>
              <div className="hc-row"><span className="hc-ico">🛰️</span><div><b>Geospatial AI</b><small>Satellite change detection on ArcGIS/Erdas</small></div></div>
              <div className="hc-row"><span className="hc-ico">📡</span><div><b>Predictive Monitoring</b><small>Forecasts threshold breaches before they happen</small></div></div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <span className="eyebrow">✨ AI-Integrated</span>
            <h2 className="section-title">Real intelligence, layered onto real expertise</h2>
            <p className="body">
              We're putting AI to work across our research desk, this website, and our monitoring
              products — shortening the slow parts of the work without ever removing the qualified
              consultant who reviews and signs off every output.
            </p>
            <ul className="checklist">
              <li><span className="tick">✓</span> Instant answers about clearances, sectors &amp; NABET accreditation</li>
              <li><span className="tick">✓</span> Guided intake that hands our team a structured brief</li>
              <li><span className="tick">✓</span> AI-assisted satellite analysis for forest, mining &amp; hydrology</li>
              <li><span className="tick">✓</span> Predictive alerts on CEQMS &amp; air-quality sensor data</li>
            </ul>
            <Link to="/products" className="btn btn-ghost" style={{ marginTop: 22 }}>
              See our AI roadmap <IconArrow size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===================== VISION / MISSION ===================== */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Our purpose</span>
            <h2 className="section-title">Vision &amp; Mission</h2>
          </Reveal>
          <div className="grid grid-2" style={{ marginTop: 40 }}>
            <Reveal className="vm-tile">
              <h3>🎯 Our Vision</h3>
              <p>To become the valued partner with which clients can pivot their green image &amp; sustainability drive.</p>
            </Reveal>
            <Reveal delay={1} className="vm-tile alt">
              <h3>🚀 Our Mission</h3>
              <p>
                Maintaining the highest integrity to QCI, NABET and MoEF&amp;CC standards — built on a
                culture of trust, responsibility, collaboration and performance, as a responsible
                entity preaching green initiatives.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== WORKING FORCE ===================== */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Our people</span>
            <h2 className="section-title">Introduction to our working force</h2>
            <p className="section-sub">A multidisciplinary crew of consultants, lab experts and field officers.</p>
          </Reveal>
          <div className="grid grid-4" style={{ marginTop: 44 }}>
            {WORKFORCE.map((w, i) => (
              <Reveal key={w.role} delay={(i % 4)} className="card text-center">
                <div className="ico" style={{ margin: "0 auto 16px" }}>{w.icon}</div>
                <h3>{w.role}</h3>
                <div className="num" style={{ fontFamily: "var(--font-head)", fontSize: "2.1rem", fontWeight: 800 }}>
                  <span className="gradient-text"><Counter to={w.count} /></span>
                </div>
                <p>{w.sub}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CLIENTELE ===================== */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Trusted by industry</span>
            <h2 className="section-title">Our clientele</h2>
            <p className="section-sub">A few of the 3,000+ organisations who rely on RGPL.</p>
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

      {/* ===================== CTA ===================== */}
      <section className="section">
        <div className="container">
          <Reveal className="cta-band">
            <h2>Ready to make compliance your competitive edge?</h2>
            <p>Tell us your sector, location and project type — our smart intake gives you a faster, more accurate proposal.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn btn-light">Talk to an Expert</Link>
              <Link to="/signup" className="btn btn-light">Create an Account</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
