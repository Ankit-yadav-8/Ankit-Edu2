import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";
import PageHero from "../components/PageHero.jsx";
import { IconArrow, IconUsers, IconBeaker, IconStar, IconCheck } from "../components/Icons.jsx";
import visionDice from "../assets/vision-dice.png";
import nabetCert from "../assets/nabet-certificate.png";
import isoCert from "../assets/iso-certificate.png";

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

const CREDENTIALS = [
  { level: "Experience", tone: "teal", points: ["Team of experts who have served for more than 2 decades in Environmental Consultancy", "Environmental services in more than 11 varied industrial sectors"] },
  { level: "Expertise", tone: "green", points: ["Experts from IBM, UTCL, ACC (Holcim) etc."] },
  { level: "Strengths", tone: "amber", points: ["Accreditation and empanelment with MoEF/NABET, NABL, IBM, ISO, State Govt (SPCB), Ministry of Water Resources"] },
  { level: "Infrastructure", tone: "green", points: ["Pan India Presence", "NABL / MoEF Approved Laboratory"] },
];

const NABET_SECTORS = [
  "Mining of Mineral — opencast mining only",
  "Offshore and onshore oil & gas exploration, development & production",
  "Thermal power plants",
  "Metallurgical industries (Ferrous & Non-Ferrous)",
  "Cement plants",
  "Chlor-Alkali Industry",
  "Manmade Fibers manufacturing",
  "Synthetic organic chemicals industry",
  "Oil & gas transportation projects",
  "Building and construction projects",
  "Township and Area development projects",
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About RGPL"
        title="A team of environmental experts,"
        highlight="pooled for your green journey"
        subtitle="Incorporated in 2021, RGPL is your techno-legal advisory partner across environmental consultancy — backed by 29 years of legacy."
        breadcrumb="About Us"
        cards={[
          { type: "stat", num: 3000, suffix: "+", label: "Units served", tone: "green" },
          { type: "stat", num: 50, suffix: "+", label: "Sectoral areas", tone: "teal" },
          { type: "info", icon: "🏅", title: "NABET Accredited", sub: "20 sectors", tone: "amber" },
          { type: "stat", num: 29, label: "Years of legacy", tone: "green" },
        ]}
      />

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

      {/* Mission & Vision (dice image + small text) */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Our purpose</span>
            <h2 className="section-title">Our Mission &amp; Vision</h2>
          </Reveal>
          <div className="vm-split" style={{ marginTop: 40 }}>
            <Reveal className="vm-image">
              <img src={visionDice} alt="Mission and Vision" />
            </Reveal>
            <Reveal delay={1} className="vm-cards">
              <div className="vm-card">
                <div className="ico"><IconStar size={24} /></div>
                <div>
                  <h3>Our Vision</h3>
                  <p className="small-text">To become the valued partner with which clients can pivot their green image &amp; sustainability drive.</p>
                </div>
              </div>
              <div className="vm-card">
                <div className="ico"><IconCheck size={24} /></div>
                <div>
                  <h3>Our Mission</h3>
                  <ul className="mini-list">
                    <li>Maintaining the highest integrity to and meeting all standards of quality of QCI, NABET and MoEF&amp;CC.</li>
                    <li>Employing a collaborative approach to ensure that each solution is customized to fit the unique contours of the client's venture — building trust between environmental imperatives and overarching corporate goals.</li>
                    <li>Being a responsible entity, preaching the green initiatives in the work culture as well as a personal core of associates, to be customer delight.</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Why RGPL</span>
            <h2 className="section-title">Credentials</h2>
            <p className="section-sub">Two decades of experience, deep expertise and pan-India infrastructure.</p>
          </Reveal>
          <div className="cred-list" style={{ marginTop: 40 }}>
            {CREDENTIALS.map((c, i) => (
              <Reveal key={c.level} delay={(i % 4)} className={`cred-row tone-${c.tone}`}>
                <div className="cred-level">{c.level}</div>
                <ul className="mini-list">
                  {c.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </Reveal>
            ))}
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

      {/* NABET certificate + sectors */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">NABET Certificate</span>
            <h2 className="section-title">Accredited across 11 NABET sectors</h2>
            <p className="section-sub">Our certificate of accreditation covers the following industrial sectors.</p>
          </Reveal>
          <div className="cert-split" style={{ marginTop: 40 }}>
            <Reveal className="card">
              <ol className="sector-list">
                {NABET_SECTORS.map((s) => <li key={s}>{s}</li>)}
              </ol>
            </Reveal>
            <Reveal delay={1} className="cert-frame">
              <img src={nabetCert} alt="NABET Certificate of Accreditation" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ISO certificate */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Quality Management</span>
            <h2 className="section-title">ISO 9001:2015 certified</h2>
            <p className="body">
              Rejig GreenLogic Private Limited holds a Certificate of Registration for ISO 9001:2015
              Quality Management System, independently assessed by QRO — covering the full scope of our
              environmental consultancy, impact assessment, monitoring and compliance services.
            </p>
            <ul className="checklist">
              <li><span className="tick">✓</span> Independently audited quality management</li>
              <li><span className="tick">✓</span> Standardised, repeatable delivery processes</li>
              <li><span className="tick">✓</span> Continual improvement &amp; client focus</li>
            </ul>
          </Reveal>
          <Reveal delay={1} className="cert-frame">
            <img src={isoCert} alt="ISO 9001:2015 Certificate of Registration" loading="lazy" />
          </Reveal>
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
