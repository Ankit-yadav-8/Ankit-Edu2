import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";
import { IconArrow, IconUsers, IconBeaker, IconStar, IconCheck } from "../components/Icons.jsx";

const TEAM = [
  { icon: <IconUsers size={22} />, count: 12, role: "Technical Crew", sub: "Senior & project consultants" },
  { icon: <IconBeaker size={22} />, count: 5, role: "Lab Experts", sub: "Sampling & analysis specialists" },
  { icon: <IconStar size={22} />, count: 3, role: "Field Officers", sub: "On-site monitoring & surveys" },
  { icon: <IconCheck size={22} />, count: 5, role: "Auxiliary Staff", sub: "Coordination & operations" },
];

const ACCRED = [
  { tag: "Accreditation", title: "NABET", desc: "National Accreditation Board for Education and Training — accredited across 20 sectors for EIA/ESIA studies." },
  { tag: "Empanelment", title: "MoEFCC", desc: "Ministry of Environment, Forest & Climate Change empanelment — recognised for environmental clearance work." },
  { tag: "Registration", title: "NSIC", desc: "National Small Scale Industrial Corporation registration — supporting credibility for public & private tenders." },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">About RGPL</span>
            <h1>A team of environmental experts, <span className="gradient-text">pooled for your green journey</span></h1>
            <p className="breadcrumb"><Link to="/">Home</Link> / About Us</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2 className="section-title">Techno-legal advisory you can rely on</h2>
            <p className="body">
              REJIG GREENLOGIC PRIVATE LIMITED (RGPL), incorporated on 15th December 2021, is a group
              of well-known environmental experts pooled up to extend environmental consultancy and be
              your techno-legal advisory partner.
            </p>
            <p className="body" style={{ marginTop: 12 }}>
              Since incorporation we have successfully provided environmental solutions to{" "}
              <b>more than 3,000 specialised industrial units</b> across India and abroad, covering
              more than fifty sectoral areas.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Work with us <IconArrow size={18} /></Link>
              <Link to="/services" className="btn btn-ghost">Our Services</Link>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="stats grid-2">
              <div className="stat"><div className="num"><Counter to={3000} suffix="+" /></div><div className="lbl">Units served</div></div>
              <div className="stat"><div className="num"><Counter to={50} suffix="+" /></div><div className="lbl">Sectors</div></div>
              <div className="stat"><div className="num"><Counter to={2021} /></div><div className="lbl">Incorporated</div></div>
              <div className="stat"><div className="num"><Counter to={20} /></div><div className="lbl">NABET sectors</div></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Operations philosophy */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">What differentiates us</span>
            <h2 className="section-title">Operations philosophy</h2>
          </Reveal>
          <div className="grid grid-3" style={{ marginTop: 40 }}>
            <Reveal className="card">
              <h3>Analyse → Visualise → Utilise</h3>
              <p>We extend services with competence by first analysing, then visualising and finally utilising technically strong, dedicated skill to optimise cost on regulatory governance and customer satisfaction.</p>
            </Reveal>
            <Reveal delay={1} className="card">
              <h3>Turnkey, end-to-end</h3>
              <p>A Rapid Service Delivery Framework (RSDF) lets us take on every environment-related scope on a turnkey basis — with end-to-end planning and delivery responsibility.</p>
            </Reveal>
            <Reveal delay={2} className="card">
              <h3>29 years of legacy</h3>
              <p>RGPL is a sister concern of JM EnviroNet Private Limited (JMEPL), working in the field of environment for the past 29 years — recognised by QCI-NABET, MoEF&amp;CC, MSME, NSIC and more.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <Reveal className="vm-tile">
              <h3>🎯 Our Vision</h3>
              <p>To become the valued partner with which clients can pivot their green image &amp; sustainability drive.</p>
            </Reveal>
            <Reveal delay={1} className="vm-tile alt">
              <h3>🚀 Our Mission</h3>
              <p>Maintaining the highest integrity to QCI, NABET and MoEF&amp;CC standards — built on trust, responsibility, collaboration and performance, as a responsible entity preaching green initiatives.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Our people</span>
            <h2 className="section-title">A multidisciplinary technical crew</h2>
            <p className="section-sub">Consultants, lab experts and field officers working together on every assessment.</p>
          </Reveal>
          <div className="grid grid-4" style={{ marginTop: 44 }}>
            {TEAM.map((t, i) => (
              <Reveal key={t.role} delay={i % 4} className="card text-center">
                <div className="ico" style={{ margin: "0 auto 16px" }}>{t.icon}</div>
                <div className="num" style={{ fontFamily: "var(--font-head)", fontSize: "2.1rem", fontWeight: 800 }}>
                  <span className="gradient-text"><Counter to={t.count} /></span>
                </div>
                <h3 style={{ marginTop: 6 }}>{t.role}</h3>
                <p>{t.sub}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Accreditations &amp; Certifications</span>
            <h2 className="section-title">Recognised by the regulators that matter</h2>
          </Reveal>
          <div className="grid grid-3" style={{ marginTop: 44 }}>
            {ACCRED.map((a, i) => (
              <Reveal key={a.title} delay={i % 3} className="card">
                <span className="tag">{a.tag}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <Reveal className="cta-band">
            <h2>Let's build your sustainability story together</h2>
            <p>From a single clearance to an enterprise-wide ESG programme — RGPL is your partner at every step.</p>
            <Link to="/contact" className="btn btn-light">Get in touch <IconArrow size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
