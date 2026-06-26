import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";
import HeroCarousel from "../components/HeroCarousel.jsx";
import { CLIENT_LOGOS } from "../data/clients.js";
import { AI_FEATURES } from "../data/aiFeatures.js";
import SmartImg from "../components/SmartImg.jsx";
import visionImg from "../assets/vision-handshake.png";
import {
  IconDoc, IconLeaf, IconEye, IconShield, IconChart, IconGlobe,
  IconCheck, IconActivity, IconArrow, IconUsers, IconBeaker, IconStar,
} from "../components/Icons.jsx";

const U = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=720&q=60`;
const WELCOME_IMG = U("1542601906990-b4d3fb778b09"); // hands / green earth

const SERVICES = [
  { icon: <IconDoc size={26} />, title: "EIA & ESIA Studies", img: U("1454165804606-c3d57bc86b40"), desc: "Full Environmental & Social Impact Assessment studies aligned to IFC and ADB guidelines, with baseline monitoring and compliance auditing." },
  { icon: <IconLeaf size={26} />, title: "Forest & Wildlife Clearance", img: U("1441974231531-c6227db76b6e"), desc: "Biodiversity Impact Assessment, forest & wildlife clearances, conservation and mangrove management plans, tree enumeration and ecology studies." },
  { icon: <IconEye size={26} />, title: "Remote Sensing & GIS", img: U("1502920917128-1aa500764cbd"), desc: "Land Use / Land Cover mapping by satellite imagery, mining plan preparation, DGPS surveys and AI-assisted change detection." },
  { icon: <IconShield size={26} />, title: "Compliance & Auditing", img: U("1450101499163-c8848c66ca85"), desc: "Environmental compliance auditing, due diligence, permitting, green / waste audits and corporate EHS support." },
  { icon: <IconChart size={26} />, title: "ESG & Climate Risk", img: U("1473773508845-188df298d2d1"), desc: "Sustainability & ESDD studies, ESG management frameworks, Climate Change Risk Assessment and IGBC/LEED documentation." },
  { icon: <IconGlobe size={26} />, title: "Coastal & Marine", img: U("1505142468610-359e7d316be0"), desc: "Coastal Regulatory Zone (CRZ) clearance, marine environment monitoring, hydrodynamic and hydrological studies." },
];

const WORKFORCE = [
  { icon: <IconUsers size={22} />, role: "Technical Crew", count: 12, sub: "Senior & project consultants", desc: "Senior consultants and project leads who scope studies, draft EIA/ESIA reports and steer projects through SEAC/EAC appraisal." },
  { icon: <IconBeaker size={22} />, role: "Lab Experts", count: 5, sub: "Sampling & analysis specialists", desc: "Sampling and analysis specialists handling air, water, soil and noise testing through our NABL-grade laboratory partner." },
  { icon: <IconStar size={22} />, role: "Field Officers", count: 3, sub: "On-site monitoring & surveys", desc: "On-ground officers running baseline monitoring, ecological surveys and DGPS field work across project sites pan-India." },
  { icon: <IconCheck size={22} />, role: "Auxiliary Staff", count: 5, sub: "Coordination & operations", desc: "Coordination and operations staff who keep documentation, regulatory liaison and client communication running smoothly." },
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

          <Reveal delay={1} className="welcome-media">
            <SmartImg src={WELCOME_IMG} alt="Hands protecting a green earth" />
          </Reveal>
        </div>

        {/* stats band */}
        <div className="container" style={{ marginTop: 40 }}>
          <div className="stats grid-4">
            <div className="stat"><div className="num"><Counter to={3000} suffix="+" /></div><div className="lbl">Industrial units served</div></div>
            <div className="stat"><div className="num"><Counter to={50} suffix="+" /></div><div className="lbl">Sectoral areas</div></div>
            <div className="stat"><div className="num"><Counter to={20} /></div><div className="lbl">NABET sectors</div></div>
            <div className="stat"><div className="num"><Counter to={25} suffix="+" /></div><div className="lbl">Expert team members</div></div>
          </div>
        </div>
      </section>

      {/* ===================== INTRO ===================== */}
      <section className="section section--soft" style={{ paddingBottom: 40 }}>
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">What we do</span>
            <h2 className="section-title">Environment Management and Engineering Services</h2>
            <p className="section-sub" style={{ textAlign: "justify", marginTop: 24, fontSize: "1.05rem", maxWidth: "900px", marginInline: "auto" }}>
              Rejig GreenLogic (RGPL) is a full-service environmental consulting and engineering firm. We provide expertise in regulatory compliance, permitting, technical services, and the development of environmental programs. Our stellar reputation is built on our commitment to excellence in the design, implementation, and management of innovative solutions for both private and public sector clients.
            </p>
            <p className="section-sub" style={{ textAlign: "justify", marginTop: 12, fontSize: "1.05rem", maxWidth: "900px", marginInline: "auto" }}>
              We are serving clients with a team of experts and associates accredited by the Quality Council of India-NABET and an in-house well-equipped EPA-recognized and NABL accredited laboratories. We assess all factors contributing to environmental concerns in view of legal, statutory compliances & consultancy services.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== DETAILED PANELS ===================== */}
      
      {/* Panel 1 (Combined all topics) */}
      <section className="detailed-panel">
        <div className="container dp-grid">
          <Reveal className="dp-text" style={{ gridColumn: "1 / -1", maxWidth: "100%" }}>
            <span className="eyebrow">Accredited by QCI-NABET | Empanelled with Pollution Control Board</span>
            <h2>Environment Consultancy Services</h2>
            <p style={{ textAlign: "justify" }}>
              RGPL's Environment Management & Engineering Division is a full-service consulting partner helping organizations enhance environmental performance, ensure compliance, and achieve sustainability goals. Backed by state-of-the-art laboratories and an expert team, we deliver end-to-end solutions. Thus, EME division partners with an organization in their efforts of achieving sustainable business model.
            </p>
            <p style={{ marginBottom: 24, color: "var(--muted)", textAlign: "justify" }}>
              Our primary service includes obtaining environmental clearance (in accordance with the Environment Impact Assessment Notification) from the Ministry of Environment and Forest (MoEFCC) as well as from the State Environmental Impact Assessment Authority and NOC/consent from Pollution Control Board.
            </p>
            <h3 style={{ marginBottom: 16, fontSize: "1.2rem", fontWeight: 700 }}>Core Expertise:</h3>
            <ul className="dp-list" style={{ columns: "1", columnGap: "40px" }}>
              <li><strong>Techno-Legal Advisory, Environment & Social Impacts Assessment (ESIA)</strong> Studies (as per IFC & ADB Guidelines) & Environmental Impact Assessment (EIA) Studies, Environmental Monitoring and Environmental Compliance Auditing: Environmental Due Diligence, Environmental Permitting</li>
              <li><strong>Social Impact Assessment (SIA) Studies</strong>, Chemical/Industrial Risk Assessment, Biodiversity Impact Assessment (BIA), Ecology and Biodiversity Study/Tree Enumeration</li>
              <li><strong>Sustainability & ESDD studies</strong> - Corporate EHS (Environment, Health & Safety), ESGMS Framework/ Management System (ESGMS) and Trainings, The gaps identified in E&S and E&S Action Plan (ESAP), ES DD/ Red Flag Assessment, Climate Change Risk Assessment (CCRA)</li>
              <li><strong>ESIA Study, ESR DD</strong> (to Understand The Business Feasibility)</li>
              <li><strong>Coastal Regulatory Zone Clearance</strong>, Marine Environment Monitoring (Marine Water & Sea Bed Sediment Sampling & Analysis), Hydrodynamic Study</li>
              <li><strong>Forest Clearance & Wildlife Clearances</strong>, Wildlife Conservation Plan/Mangrove Management Plan</li>
              <li><strong>Environment/Waste/Green Audits</strong>, Damage assessment as per OM B04(E)</li>
              <li><strong>Leak Detection and Repair (LDAR)</strong> studies in Pharma & Oil Refining Industries, Indoor Air Quality (IAQ) Testing in IT/ITES/Hospitality/Hospitals Facilities</li>
              <li><strong>IGBC/LEED Documentation</strong> For Green Building Certification</li>
              <li><strong>Mining Plan Preparation & Dgps Surveys</strong></li>
            </ul>
            <Link to="/services" className="btn btn-primary" style={{ marginTop: 12 }}>Know more <IconArrow size={18} /></Link>
          </Reveal>
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
            <Link to="/ai-integration" className="btn btn-ghost" style={{ marginTop: 22 }}>
              Explore our AI approach <IconArrow size={18} />
            </Link>
          </Reveal>
        </div>

        {/* AI feature teaser */}
        <div className="container" style={{ marginTop: 40 }}>
          <div className="grid grid-3">
            {AI_FEATURES.slice(0, 3).map((f, i) => (
              <Reveal key={f.id} delay={(i % 3) + 1} className="card">
                <div className="ico">{f.icon}</div>
                <span className="tag">{f.phase}</span>
                <h3>{f.label}</h3>
                <p>{f.summary}</p>
              </Reveal>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 30 }}>
            <Link to="/ai-integration" className="btn btn-primary">See all 5 AI features <IconArrow size={18} /></Link>
          </div>
        </div>
      </section>

      {/* ===================== VISION / MISSION ===================== */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Our purpose</span>
            <h2 className="section-title">Vision &amp; Mission</h2>
          </Reveal>
          <div className="vm-split" style={{ marginTop: 44 }}>
            <Reveal className="vm-image">
              <img src={visionImg} alt="Nature and industry in partnership" />
            </Reveal>
            <Reveal delay={1} className="vm-cards">
              <div className="vm-card">
                <div className="ico"><IconEye size={26} /></div>
                <div>
                  <h3>Our Vision</h3>
                  <p>To become the valued partner with which clients can pivot their green image &amp; sustainability drive.</p>
                </div>
              </div>
              <div className="vm-card">
                <div className="ico"><IconShield size={26} /></div>
                <div>
                  <h3>Our Mission</h3>
                  <p>
                    Maintaining the highest integrity to QCI, NABET and MoEF&amp;CC standards — built on a
                    culture of trust, responsibility, collaboration and performance, as a responsible
                    entity preaching green initiatives that delight our customers.
                  </p>
                </div>
              </div>
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
          <div className="workforce">
            {WORKFORCE.map((w) => (
              <Reveal key={w.role} className="wf-row">
                <div className="wf-text">
                  <span className="tag">{w.sub}</span>
                  <h3>{w.role}</h3>
                  <p>{w.desc}</p>
                </div>
                <div className="wf-card">
                  <div className="ico">{w.icon}</div>
                  <div className="wf-num"><span className="gradient-text"><Counter to={w.count} /></span></div>
                  <div className="wf-card__label">Employees</div>
                  <div className="wf-card__role">{w.role}</div>
                </div>
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
          <Reveal className="client-grid">
            {CLIENT_LOGOS.map((c) => (
              <div className="client-logo" key={c.name}>
                <img src={c.src} alt={c.name} loading="lazy" />
              </div>
            ))}
          </Reveal>
          <div className="text-center" style={{ marginTop: 28 }}>
            <Link to="/clientele" className="btn btn-ghost">See all clientele <IconArrow size={18} /></Link>
          </div>
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
